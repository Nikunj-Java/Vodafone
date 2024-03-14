import MovieItem from "./Movieitem"



const MovieList=({movies})=>{

    return(
        <div>
            <h2>Movies</h2>
            <ul>
            {movies.map((movie)=>(
                //console.log(movie) 
                <MovieItem key={movie.imdbID} movie={movie}/>
                )
                )}
            </ul>
        </div>
    )

}

export default MovieList;