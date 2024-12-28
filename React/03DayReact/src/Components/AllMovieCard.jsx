import MovieCard from "./MovieCard"

const AllMovieCard=({movie})=>{
    console.log(movie)
    return(
        <>
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
        </>
    )
}
export default AllMovieCard