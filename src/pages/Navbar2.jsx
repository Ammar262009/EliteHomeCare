import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate()

    const returnHome = () => {
        navigate('/')
    }
    const prev = () => {
        navigate(-1)
    }
    const next = () => {
        navigate(+1)
    }

    return (
        <div className='py-3 px-6 flex gap-3 bg-cyan-800'>
            <button onClick={returnHome} className='bg-amber-700 px-5 py-2 rounded-2xl'>Return to Home</button>
            <button onClick={prev} className='bg-amber-700 px-5 py-2 rounded-2xl'>Prev</button>
            <button onClick={next} className='bg-amber-700 px-5 py-2 rounded-2xl'>Next</button>
        </div>
    )
}

export default Navbar2