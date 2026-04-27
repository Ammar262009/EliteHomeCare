import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-blue-700 justify-between items-center flex py-5.5 px-4 w-full h-auto'>
            <h2 className='font-bold text-xl'>Logo</h2>
            <div className='flex text-lg font-medium gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
            </div>
        </div>
    )
}

export default Navbar