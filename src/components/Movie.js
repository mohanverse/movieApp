import React from 'react'
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';

const Movie = () => {
  const {movie, isLoading}= useGlobalContext();
  if (isLoading) {
    return( 
    <div className="">
          <h1>Loading....</h1>
    </div>
    );
  }

  return (
    <>
    <section className='bg-black text-white w-full'>
      <div className='grid md:grid-cols-2   lg:grid-cols-4 justify-center mx-10 gap-10 py-10'>
      {movie ? movie.map((curMovie)=>{
        const {imdbID, Title, Poster} = curMovie;
        const movieName = Title.substring(0, 25)
        return(
          <NavLink className='transition duration-150 ease-out hover:ease-in hover:scale-75' to={`movie/${imdbID}`} key={imdbID}>
            <div className='grid items-center border p-6 text-xl font-bold rounded-lg w-[300px] h-[500px]'>
              <img alt='#' src={Poster}/>
              <p className='flex justify-center '>  {movieName.length >= 25 ? `${movieName} ...` : movieName}</p>
            </div>
          </NavLink>
        );
      })
      : ""}
      </div>
    </section>
    </>
  )
}

export default Movie