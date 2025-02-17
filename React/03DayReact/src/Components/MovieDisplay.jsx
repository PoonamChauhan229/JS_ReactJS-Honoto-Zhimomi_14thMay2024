import MovieCard from "./MovieCard"

const MovieDisplay=({movie})=>{
    console.log(movie)
    return(
        <div className="movieContainer">
            {/* <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/> */}
            {/* map method */}
            {
                movie.map((element)=><MovieCard
                movieposter={element.movieposter}
                moviename={element.moviename}
                rating={element.rating}
                summary={element.summary}
                />)
            }
        </div>
    )
}
export default MovieDisplay