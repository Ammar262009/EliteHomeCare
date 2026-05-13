import React, { useEffect, useRef, useState } from 'react'
import { UserRound,     Menu, Cross } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
    const overlay = useRef(null)
    const pages = useRef(null)
    const navbarSelectedClass = 'px-9 flex text-black bg-white shadow-[1px_3px_3px_1px_rgba(0,0,0,0.2)]'

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [])

    const handleMenuClick = () => {
        if (isDesktop) return;
        overlay.current.classList.toggle("active");
        pages.current.classList.toggle("active");
    }
    return (
        <div className='flex justify-between items-center w-auto px-6 py-4 h-auto'>
            <h1 className='text-xl font-bold'>Elite Home Logo</h1>
            <div className='cursor-pointer bg-[#493f3b60] hidden md:flex rounded-full h-[55px] transition duration-75'>
                <div className={`w-auto rounded-full text-center items-center justify-center px-9 flex ${navbarSelectedClass}`}>Home</div>
                <div className={`w-auto rounded-full text-center items-center justify-center px-9 flex `}>Product</div>
                <div className={`w-auto rounded-full text-center items-center justify-center px-9 flex `}>About Us</div>
                <div className={`w-auto rounded-full text-center items-center justify-center px-9 flex `}>Contact</div>
            </div>
            <div onClick={handleMenuClick} className=' rounded-full flex justify-center items-center h-[45px] w-[45px] md:h-[65px] bg-[#6d6c6c62] md:w-[65px]'>
                {isDesktop ? (
                    <UserRound size={53} strokeWidth={1.25} />
                ) : (
                    <Menu size={30} strokeWidth={1} />
                )}
            </div>
            <div ref={pages} className="pages" id="navLinks">
                {/* <Cross size={33} strokeWidth={1} /> */}
                <div className="flex font-bold text-white text-xl">
                    <Link to="/" >Home</Link>
                    {/* <Link to="/products">Products</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact Us</Link> */}
                </div>
            </div>

            <div ref={overlay} onClick={handleMenuClick} className="overlay" id="overlay"></div>
        </div>
    )
}

export default Navbar