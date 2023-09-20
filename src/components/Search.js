import React from 'react'
import { useGlobalContext } from '../context';

const Search=()=> {
  const {query, setquery, isError} = useGlobalContext();

  return (
    <>
    <div className='flex justify-center text-white bg-black'>
      <div className='space-y-4 py-10'>
        <h2 className=' text-2xl lg:text-4xl'>Search your favourite Anime</h2>
        <form action='#' onSubmit={(e)=>e.  preventDefault()}>
          <div>
            <input
            className='border rounded-2xl p-2 bg-black text-white w-full ' 
            type='text'
            value={query} 
            placeholder="search movie...."
            onChange={(e)=>setquery(e.target.value)}/>
          </div>
        </form>
        <div>
          <h2>{isError.show && isError.msg}</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default Search