import React, { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Women from './pages/Women';
import Courses from './pages/Courses';
import CoursesContent from './pages/CoursesContent';
import Navbar2 from './pages/Navbar2';

const App = () => {

  return (
    <div className='h-screen w-full bg-black overflow-auto  text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:id' element={<CoursesContent />}/>
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men /> } />
          <Route path='kids' element={<Kids /> } />
          <Route path='women' element={<Women /> } />
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      
    </div>
  )
}

export default App
