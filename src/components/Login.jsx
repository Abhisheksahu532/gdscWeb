import React from 'react'

const Login = () => {
  return (
    
    <div className='flex flex-col  w-full items-center justify-center h-screen'>
        <div className='flex flex-col border-2 p-10 rounded-lg'>
        <h1 className='text-5xl items-center font-semibold'>Login</h1>
        <p className='my-5 text-2xl'>Enter your details below</p>
        <input className='border-2 border-gray-300 rounded-md text-3xl mb-2' type="email" placeholder="Email" ></input>
        <input className='border-2 border-gray-300 rounded-md text-3xl mb-2' type="password" placeholder="Password" ></input>
        <button className='bg-red-600 mt-4 text-white rounded-lg py-3'>Login</button>
        </div>
    </div>

  )
}

export default Login