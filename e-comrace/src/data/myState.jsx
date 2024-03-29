import React, { useEffect, useState } from 'react';
import myContext from './myContext';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query, deleteDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDb } from '../firebase/FirebaseConfig'
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

       //if(products.title === null || products.price === null || products.imgageUrl === null || products.category === null || products.description === null ){
        //return toast.error("All fileds are required.")
      //}      

        try {
          setLoading(true);  
          const productRef = collection(fireDb, "products");             

            await addDoc(productRef, products);
            toast.success("Product Add Sucessfully");
            setTimeout(() =>{
              window.location.href = '/dashboard'            
            }, 800);
            getProductData();
            closeModal();
            setLoading(false);

        } catch(error){
            console.error(error);
            setLoading(false);
        }
            setProducts("");

    }


    const [product, setProduct] = useState([]);

    // ****** get product
    const getProductData = async () => {
        setLoading(true)
        try {
          const q = query(
            collection(fireDb, "products"),
            orderBy("time"),
            
          );
          
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productsArray = [];
                QuerySnapshot.forEach((doc) => {
                  productsArray.push({ ...doc.data(), id: doc.id });
                });
               
                setProduct(productsArray);
               
                setLoading(false);
            })
            
            return  () => data;
        } catch(error) {
            console.error(error);
            setLoading(false);
        }
    }



    const edithandle = (item) => {
        setProducts(item)
      }
      // update product
      const updateProduct = async (item) => {
        setLoading(true)
        try {
          await setDoc(doc(fireDb, "products", products.id), products);
          toast.success("Product Updated successfully")
          getProductData();
          setLoading(false)
          window.location.href = '/dashboard'
        } catch (error) {
          setLoading(false)
          console.log(error)
        }
      setProducts("")
      }

      const deleteProduct = async (item) => {

        try {
          setLoading(true)
          await deleteDoc(doc(fireDb, "products", item.id));
          toast.success('Product Deleted successfully')
          setLoading(false)
          getProductData()
        } catch (error) {
          toast.success('Product Deleted Falied')
         setLoading(false)
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
    <myContext.Provider value={{mode, toggleMode, loading, setLoading,  products, setProducts, addProduct, product, setProduct, edithandle, deleteProduct}}>
        {props.children}
    </myContext.Provider>
  )
}

export default MyState;

