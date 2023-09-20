//context api
//context (warehouse)
//provider (provider)
//consumer (consumer)
import React, {useEffect, useState } from "react";

const AppContext = React.createContext();

export const API_URL=`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

//create provider function 

const AppProvider = ({children})=>{
    const [isLoading, setisLoading] = useState(true);
    const [movie, setmovie] = useState([]);
    const [isError, setisError] = useState({show:false, msg:""});
    const [query, setquery] = useState('naruto');


    const getMovies = async(url)=>{
        setisLoading(true);
        try { 
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setmovie(data.Search);
                setisLoading(false);
            }
            else{
                setisError({show:true, msg:data.Error});
            }
        } catch (error){
            console.log(error);
        }
    }

    useEffect(()=>{
        let timeOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        }, 600);
        return ()=>clearTimeout(timeOut);

    }, [query]);


    return <AppContext.Provider value={{isLoading,isError, movie, query, setquery}}>
        {children}
    </AppContext.Provider>
};


//global custom hooks
//useGlobalContext
const useGlobalContext =()=>{
    return React.useContext(AppContext);
}


export {AppContext, AppProvider, useGlobalContext};

