import React, { createContext, useState } from 'react'
import { RouterProvider } from 'react-router-dom'

export const ThemeDataContext = createContext()
const ThemeContext = (props) => {
    const [theme, setTheme] = useState('light')
    
    return (
        <ThemeDataContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeDataContext.Provider >

    )
}

export default ThemeContext