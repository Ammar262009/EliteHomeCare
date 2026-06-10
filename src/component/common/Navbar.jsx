import React, { useEffect, useRef, useState } from 'react'
import { UserRound, Menu, X } from 'lucide-react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

    const overlay = useRef(null)
    const pages = useRef(null)

    useEffect(() => {

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [])

    const handleMenuClick = () => {

        if (isDesktop) return;

        overlay.current?.classList.toggle("active");
        pages.current?.classList.toggle("active");
    }

    return (

        <div className='flex justify-between items-center w-auto px-6 py-4 h-auto relative'>

            <h1 className='text-xl font-bold'>
                Elite Home Logo
            </h1>

            <div className='cursor-pointer bg-[#493f3b60] hidden md:flex rounded-full h-[55px] transition duration-75 overflow-hidden'>

                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        `w-auto rounded-full text-center items-center justify-center px-9 flex transition-all duration-300
                        ${isActive
                            ? "text-black bg-white shadow-[1px_3px_3px_1px_rgba(0,0,0,0.2)]"
                            : "text-white hover:bg-white/20"
                        }`
                    } >
                    Home
                </NavLink>

                <NavLink
                    to='/product'
                    className={({ isActive }) =>
                        `w-auto rounded-full text-center items-center justify-center px-9 flex transition-all duration-300
                        ${isActive
                            ? "text-black bg-white shadow-[1px_3px_3px_1px_rgba(0,0,0,0.2)]"
                            : "text-white hover:bg-white/20"
                        }`
                    }>
                    Product
                </NavLink>

                <NavLink
                    to='/about'
                    className={({ isActive }) =>
                        `w-auto rounded-full text-center items-center justify-center px-9 flex transition-all duration-300
                        ${isActive
                            ? "text-black bg-white shadow-[1px_3px_3px_1px_rgba(0,0,0,0.2)]"
                            : "text-white hover:bg-white/20"
                        }`
                    }>
                    About Us
                </NavLink>

                <NavLink
                    to='/contact'
                    className={({ isActive }) =>
                        `w-auto rounded-full text-center items-center justify-center px-9 flex transition-all duration-300
                        ${isActive
                            ? "text-black bg-white shadow-[1px_3px_3px_1px_rgba(0,0,0,0.2)]"
                            : "text-white hover:bg-white/20"
                        }`
                    }>
                    Contact
                </NavLink>

            </div>

            <div
                onClick={handleMenuClick}
                className='rounded-full flex justify-center items-center h-[45px] w-[45px] md:h-[65px] bg-[#6d6c6c62] md:w-[65px] cursor-pointer'>

                {isDesktop ? (
                    <UserRound size={53} strokeWidth={1.25} />
                ) : (
                    <Menu size={30} strokeWidth={1} />
                )}

            </div>

            <div
                ref={pages}
                className="pages"
                id="navLinks">

                <div
                    className='absolute top-5 right-5 cursor-pointer text-white'
                    onClick={handleMenuClick}>
                    <X size={35} strokeWidth={1.5} />
                </div>

                <div className="flex flex-col gap-6 font-bold text-white text-xl mt-20 px-8">

                    <NavLink
                        to="/"
                        onClick={handleMenuClick}
                        className={({ isActive }) =>
                            `${isActive ? "text-orange-400" : "text-white"}`
                        }>
                        Home
                    </NavLink>

                    <NavLink
                        to="/products"
                        onClick={handleMenuClick}
                        className={({ isActive }) =>
                            `${isActive ? "text-orange-400" : "text-white"}`
                        }>
                        Products
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={handleMenuClick}
                        className={({ isActive }) =>
                            `${isActive ? "text-orange-400" : "text-white"}`
                        }>
                        About Us
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={handleMenuClick}
                        className={({ isActive }) =>
                            `${isActive ? "text-orange-400" : "text-white"}`
                        } >
                        Contact Us
                    </NavLink>

                </div>

            </div>

            <div
                ref={overlay}
                onClick={handleMenuClick}
                className="overlay"
                id="overlay"
            ></div>

        </div>
    )
}

export default Navbar