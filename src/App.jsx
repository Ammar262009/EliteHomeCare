import React, { useState } from 'react'
import './App.css'
import Photo from './component/Photo'
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  const [photoArr, setPhotoArr] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setPhotoArr(response.data)
  }
  useEffect(() => {
    getData()
  }, [index])

  const increaseIndex = () => {
    setIndex(index + 1)
    setPhotoArr([])
  }

  const decreaseIndex = () => {
    if (index > 1) {
      setIndex(index - 1)
      setPhotoArr([])
    }
  }
  let printData = <h3 className='top-1/2 left-1/2 -translate-1/2 absolute font-semibold text-2xl'>Loading...</h3>
  if (photoArr.length > 0) {
    {
      printData = photoArr.map((elem, idx) => {
        return <Photo elem={elem} key={idx} />
      })
    }
  }

  return (
    <div className='h-screen w-full bg-black overflow-auto  text-white'>
      <h1 className='pt-3 font-bold text-xl text-center'>Photo Gallery</h1>
      <div className='py-7 flex justify-center items-center flex-wrap gap-2 px-4 my-4 h-auto min-h-[80%] w-full relative bg-amber-800'>
        {printData}
      </div>
      <div className='flex gap-8 justify-center mb-4 items-center'>
        <button style={{ opacity: index == 1 ? 0.5 : 1, cursor: index == 1 ? 'not-allowed' : 'pointer' }} onClick={decreaseIndex} className='bg-emerald-900 cursor-pointer active:scale-95 text-white px-5 py-2 rounded'>Prev</button>
        <div>Page: {index}</div>
        <button onClick={increaseIndex} className='bg-emerald-900 active:scale-95 text-white cursor-pointer px-5 py-2 rounded'>Next</button>
      </div>
    </div>
  )
}

export default App
