

const MovieItem=({movie})=>{
    return(
        <div>
            <li>
                <h3>{movie.Title}</h3>
                <p>Year: {movie.Year}</p>
                <p>Type: {movie.Type}</p>
            </li>
        </div>
    )
}

export default MovieItem;