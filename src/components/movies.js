import MovieItem from './MovieItem';

const Movies = (props) => {
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie = {movie} key={movie._id} Reload = {props.ReloadData}/> // Pass functions to child components 
        }
    )
}

export default Movies;