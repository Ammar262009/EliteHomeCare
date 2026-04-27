import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
    return (
        <div className={theme}>
            <h2 className='font-bold text-xl'>Logo</h2>
            <div className='flex text-lg font-medium gap-4'>
                <span>Home</span>
                <span>About</span>
                <span>Courses</span>
                <span>Contact</span>
                <span>Product</span>
            </div>
        </div>
    )
}

export default Navbar