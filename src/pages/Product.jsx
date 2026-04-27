import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex items-center gap-4 justify-center my-3 text-lg'>
            <Link to='men'>Men</Link>
            <Link to='women'>Women</Link>
            <Link to='kids'>Kids</Link>
        </div>

        <Outlet />

    </div>
  )
}

export default Product