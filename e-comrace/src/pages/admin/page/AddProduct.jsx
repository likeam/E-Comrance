import React from 'react'

function AddProduct() {
  return (
    <div>
    <div className='flex items-center justify-center h-screen '>
        <div className='px-10 py-10 bg-gray-800  rounded-xl'>
            <div className="">
                <h1 className='mb-4 text-xl font-bold text-center text-white'>Add Product</h1>
            </div>
            <div>
                <input type="text"
                    name='title'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Product title'
                />
            </div>
            <div>
                <input type="text"
                    name='price'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Product price'
                />
            </div>
            <div>
                <input type="text"
                    name='imageurl'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Product imageUrl'
                />
            </div>
            <div>
                <input type="text"
                    name='category'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Product category'
                />
            </div>
            <div>
               <textarea cols="30" rows="10" name='title'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Product title'>

               </textarea>
            </div>
            <div className='flex justify-center mb-3 '>
                <button
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