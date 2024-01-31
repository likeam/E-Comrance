import React, { useEffect, useState } from 'react';
import myContext from './myContext';
import { QuerySnapshot , Timestamp, addDoc, collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../firebase/FirebaseConfig';

function MyState(props) {
    const [mode, setMode] = useState('light');
    const [loading, setLoading] = useState(false);


      // ********************** Add Product Section  **********************
    const [products, setProducts]  = useState({
        title: null, 
        price: null,
        imgageUrl: null,
        category: null,
        description : null,
        tidescriptiome: Timestamp.now(),
        date: new Date().toLocaleString( 
            "en-US",
            {
                month:"short",
                day: "2-digit",
                year: "numeric"
            }
        )


    });

    const addProduct = async() => {

        if(products.title == null || products.price == null || products.imgageUrl == null || products.category == null || products.description == null ) {
            return toast.error('Please fill all fields.');
        }

        const productRef = collection(fireDB, "products");
        setLoading(true);

        try {

            await addDoc(productRef, products);
            toast.success("Product Add Sucessfully");
            getProductData();
            closeModal();
            setLoading(false);

        } catch(error){
            console.error(error);
            setLoading(false);
        }
            setProducts("");

    }

    // ****** get product
    const [product, setProduct] = useState([]);
    const getProductData = async() => {
        setLoading(true);
        try{
            const q = query(
                collection(fireDB, 'products'),
                orderBy("time")
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArry = [];
                QuerySnapshot.forEach((doc) => {
                    productArry.push({...doc.data(), id: doc.id});
                });
                setProduct(productArry);
                setLoading(false);
            })
            return  () => data;
        } catch(error) {
            console.error(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductData();
    },  []);

    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = rgb(17, 24, 39);
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }
  return (
    <myContext.Provider value={{mode, toggleMode, loading, setLoading,  products, setProducts,addProduct, product, setProduct}}>
        {props.children}
    </myContext.Provider>
  )
}

export default MyState;