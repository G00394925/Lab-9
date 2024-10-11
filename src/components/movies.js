import MovieItem from './movieitem';

const Movies = (props) => {
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie = {movie} key={movie.imbdID}/>
        }
    )
}

export default Movies;