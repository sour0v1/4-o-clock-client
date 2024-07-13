import { useEffect, useRef, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import logo from '../../assets/4oclock.webp'
import { IoSearchOutline } from 'react-icons/io5';
import { TfiClose } from 'react-icons/tfi';
import { VscChromeClose, VscClose, VscMenu } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState(false);
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
            <nav className='flex justify-between items-center h-16 border-b  font-montserrat text-[#01204E] max-w-6xl mx-auto px-4 lg:px-0 relative'>
                <button onClick={() => setMenu(!menu)} className='lg:hidden text-[#01204E] text-xl lg:text-2xl'>{!menu ? <VscMenu /> : <VscChromeClose />}</button>
                <img className='w-28 lg:w-48' src={logo} alt="" />
                {/* Route Section */}
                <div className={`flex justify-center items-center lg:gap-6 absolute lg:static text-center ${menu ? 'top-16 left-0 flex-col lg:flex-row bg-white lg:bg-white w-full' : 'hidden'}`}>
                    <NavLink className='hover:bg-gray-100 lg:hover:bg-white w-full lg:w-auto py-3 border-b lg:border-none' href="">Home</NavLink>
                    <NavLink className='hover:bg-gray-100 lg:hover:bg-white w-full lg:w-auto py-3 border-b lg:border-none' href="">All Watches</NavLink>
                </div>
                {/* user and cart section */}
                <div className='flex justify-center items-center gap-4 lg:gap-6 text-xl lg:text-2xl'>
                    <button><AiOutlineUser /></button>
                    <button className='hover:scale-125 duration-200' onClick={() => setOpen(true)}><IoSearchOutline /></button>
                    <button><LiaShoppingBagSolid /></button>
                </div>

            </nav>
            {/* search section */}
            <div ref={searchRef} className={`bg-white h-24 w-full absolute top-0 mx-auto transition-transform flex justify-center items-center gap-6 border-b ${open ? 'translate-y-0 duration-300' : '-translate-y-full'}`}>
                <div className='w-2/3 lg:w-1/3 relative'>
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