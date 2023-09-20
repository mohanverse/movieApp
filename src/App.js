import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Singlemovie from './components/Singlemovie'
import Error from './components/Error'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='*' element={<Error/>}  />
        <Route path="movie/:id" element={<Singlemovie/>} />
      </Routes>
    </>
  )
}

export default App