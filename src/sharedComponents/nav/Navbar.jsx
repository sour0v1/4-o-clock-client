import { useEffect, useRef, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import logo from '../../assets/4oclock.webp'
import { IoSearchOutline } from 'react-icons/io5';
import { TfiClose } from 'react-icons/tfi';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const searchRef = useRef(null);
    console.log(searchRef);
    console.log(open);

    const handleClickOutside = e => {
        // e.preventDefault();
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            console.log('hello');
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    return (
        <>
            <nav className='flex justify-between items-center py-6 font-montserrat text-[#01204E] max-w-7xl mx-auto'>
                <img className='w-48' src={logo} alt="" />
                <div className='flex justify-center items-center gap-6'>
                    <a href="">Home</a>
                    <a href="">All Watches</a>
                </div>
                <div className='flex justify-center items-center gap-6 text-2xl'>
                    <button><AiOutlineUser /></button>
                    <button className='hover:scale-125 duration-200' onClick={() => setOpen(true)}><IoSearchOutline /></button>
                    <button><LiaShoppingBagSolid /></button>
                </div>

            </nav>
            <div ref={searchRef} className={`bg-white h-24 w-full absolute top-0 mx-auto transition-transform flex justify-center items-center gap-6 border-b ${open ? 'translate-y-0 duration-300' : '-translate-y-full'}`}>
                <div className='w-1/3 relative'>
                    <input className='py-3 px-3 border border-gray-400 w-full focus:outline-none focus:border-2 hover:border-2 focus:border-black' type="text" placeholder='Search' />
                    {/* <span className='absolute left-4 top-3'>Search</span> */}
                </div>
                <button onClick={() => setOpen(false)} className='text-xl text-end '><TfiClose />
                </button>
            </div>
        </>
    );
};

export default Navbar;