import React from 'react';
import { BsCart2, BsCart4 } from 'react-icons/bs';
import { TfiClose } from 'react-icons/tfi';
import cart from '../assets/cart.png'

const Cart = ({ cartOpen, setCartOpen }) => {
    // if (!cartOpen) {
    //     return null;
    // }
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 pt-6 lg:p-4 flex justify-end items-center duration-200 font-montserrat ${cartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={` w-full lg:w-1/3 bg-white h-full rounded-t-lg lg:rounded-xl transition-transform duration-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='w-full p-3 flex justify-between items-center'>
                    <p className='text-xl'><BsCart2 /></p >
                    <p className=''>Cart</p>
                    <button onClick={() => setCartOpen(false)} className='text-end '><TfiClose />
                    </button>
                </div>
                <div className='h-full flex flex-col justify-center items-center gap-2'>
                    <p className='text-8xl opacity-30'><BsCart4 /></p >
                    <p className='text-xl opacity-60 mb-9'>Your cart is empty</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;