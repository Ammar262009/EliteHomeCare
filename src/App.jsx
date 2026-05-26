import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      {/* create contact us page */}
      <Route path='/contact' element={<ContactUs />}/>
    </Routes>
  )
}

export default App
