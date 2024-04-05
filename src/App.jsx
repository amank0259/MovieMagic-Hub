import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  return (
    <div className='flex w-screen h-screen bg-[#1f1e24]'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App