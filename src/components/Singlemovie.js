import React from 'react'
import { useParams } from 'react-router-dom'
import {API_URL} from '../context';
import { useState, useEffect } from 'react';

const Singlemovie=()=>{

  const {id} = useParams();
  

  const [isLoading, setisLoading] = useState(true);
    const [movie, setmovie] = useState(null);


    const getMovies = async(url)=>{
        setisLoading(true);
        try { 
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setisLoading(false);
                setmovie(data);                
            }
        } catch (error){
            console.log(error);
        }
    }

    useEffect(()=>{
        let timeOut = setTimeout(()=>{
            getMovies(`${API_URL}&i=${id}`);
        }, 500);
        return ()=>clearTimeout(timeOut);

    }, [id]);

    if(isLoading){
        return <div className="loading">looding....</div>
    }

    return(
      <div>
            <h1>{movie.Title}</h1>
      </div>
    );
}

export default Singlemovie