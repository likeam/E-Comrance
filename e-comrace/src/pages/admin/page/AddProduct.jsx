import React, { useContext } from 'react'
import myContext from '../../../data/myContext'



function AddProduct() {
    
    const context = useContext(myContext);
    const {products, setProducts, addProduct} = context;

    console.log(products);


    return (
        <div>
            <div className='flex items-center justify-center h-screen '>
                <div className='px-10 py-10 bg-gray-800 rounded-xl'>
                    <div className="">
                        <h1 className='mb-4 text-xl font-bold text-center text-white'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                           name='title'
                            onChange={(e) => setProducts({ ...products, title: e.target.value })} 
                            value={products.title}                            
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" 
                             name='description' 
                             onChange={(e) => setProducts({ ...products, description: e.target.value })} value={products.description}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'>

                       </textarea>
                    </div>
                    <div className='flex justify-center mb-3 '>
                        <button
                        onClick={addProduct}
                            className='w-full px-2 py-2 font-bold text-black bg-yellow-500 rounded-lg '>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default AddProduct