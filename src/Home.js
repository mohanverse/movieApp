import React from 'react'
import Search from './components/Search'
import Movie from './components/Movie'
//import { useGlobalContext } from './context'
//import { AppContext } from './context'

const Home = () => {
  //declare a useContext
  //const name = useContext(AppContext)

  //deaclaire a useGlobalContext
  //const name = useGlobalContext();

  return (
    <>
    <div className='h-[100vh] w-full bg-black'>
    <Search/>
    <Movie/>
    </div>
    </>
  )
}

export default Home