import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
        <div className='flex items-center justify-center h-screen '>
            <div className='px-10 py-10 bg-gray-800  rounded-xl'>
                <div className="">
                    <h1 className='mb-4 text-xl font-bold text-center text-white'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3 '>
                    <button
                        className='w-full px-2 py-2 font-bold text-black bg-yellow-500 rounded-lg '>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className='font-bold text-yellow-500 ' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
  )
}

export default LogIn