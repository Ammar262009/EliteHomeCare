import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs';
import Product from './pages/Product';
import LearnMore from './component/Product/LearnMore';
import About from './pages/aboutUs';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<ContactUs />}/>
      <Route path='/product' element={<Product />}/>
      <Route path='/product/:id' element={<LearnMore />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default App
