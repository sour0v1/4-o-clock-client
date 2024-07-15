import React from 'react';

const Login = () => {
    return (
        <div className='w-full flex justify-center items-center mt-16 font-montserrat'>
            <form className='w-1/3 flex flex-col justify-center items-center gap-6'>
                <input className='py-3 px-3 border border-gray-400 w-full focus:ring-1 outline-none focus-within:ring-gray-400' type="text" placeholder='First Name' />
                <input className='py-3 px-3 border border-gray-400 w-full focus:ring-1 outline-none focus-within:ring-gray-400' type="text" placeholder='Last Name' />
                <input className='py-3 px-3 border border-gray-400 w-full focus:ring-1 outline-none focus-within:ring-gray-400' type="email" placeholder='Email' />
                <input className='py-3 px-3 border border-gray-400 w-full focus:ring-1 outline-none focus-within:ring-gray-400' type="password" placeholder='Password' />
                
            </form>
        </div>
    );
};

export default Login;