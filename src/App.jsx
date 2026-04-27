import React, { useContext, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { ThemeDataContext } from './context/ThemeContext'
import Buttons from './component/Buttons'

const App = () => {
  const [theme] = useContext(ThemeDataContext)
  let color;
  if(theme=='light'){
    color = 'bg-white text-black'
  }
  else if(theme == 'dark'){
    color = 'bg-black text-white'
    
  }
  
  return (
    <div className={`h-screen w-full ${color} overflow-auto`}>
      <Navbar />
      <h2 className='font-bold text-2xl m-3'>The Current theme is {theme}</h2>
      <Buttons/>
    </div>
  )
}

export default App
