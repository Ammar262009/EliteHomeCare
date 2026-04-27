import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Buttons = () => {
    let [theme,setTheme] = useContext(ThemeDataContext)
    
    const changeTheme=()=>{
        if(theme=='light'){

            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
  return (
    
    <div>
        <button onClick={changeTheme} className='m-3 px-4 py-2 bg-amber-500 rounded my-2 active:scale-94'>Change Theme</button>
    </div>
  )
}

export default Buttons