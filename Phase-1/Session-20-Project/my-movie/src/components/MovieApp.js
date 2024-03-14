import React,{useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const MovieApp=()=>{

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [movies,setMovies]=useState([]);

  

    //fetch the movie
    const fetchMovies= async(searchTerm)=>{
        setLoading(true);
        setError(null);

        const API_KEY=process.env.REACT_APP_API_KEY;

        try {
            
            const response=await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
            if(response.data.Response === "True"){
                //console.log(response.data);
                setMovies(response.data.Search);
            }else{
                setError(response.data.Error);
            }
        } catch (error) {
            setError('An Error Occured While Fetching the Data:',error);
        }finally{
            setLoading(false);
        }
    }


    return(
    <div>

        <h1>My Movie</h1>
        
         <SearchBar onSearch={fetchMovies}/>

         {loading && <p>Loading....</p>}
         {error && <p>{error}</p>}

         <MovieList movies={movies}/>
    </div>);
}

export default MovieApp;