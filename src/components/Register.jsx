import React from 'react'

function Register() {
  return (
    <div className='flex flex-col  w-full items-center justify-center h-screen'>
        <div className='flex flex-col border-2 p-10 rounded-lg'>
        <h1 className='text-5xl items-center font-semibold'>Create an account</h1>
        <p className='my-5 text-2xl'>Enter your details below</p>
        <input className='border-b-2 outline-none border-gray-300 focus:border-blue-600 text-xl mb-2' type="Name" placeholder="Name" ></input>
        <input className='border-b-2 outline-none border-gray-300 focus:border-blue-600 text-xl mb-2' type="email" placeholder="Email" ></input>
        <input className='border-b-2 outline-none border-gray-300 focus:border-blue-600 text-xl mb-2' type="password" placeholder="Password" ></input>
        <button className='bg-red-500 mt-4 text-white rounded-lg py-3 focus:bg-red-700'>Create Account</button>
        <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register