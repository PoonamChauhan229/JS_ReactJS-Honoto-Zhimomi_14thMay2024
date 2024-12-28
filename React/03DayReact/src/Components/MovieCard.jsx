const MovieCard=({movieposter,moviename,rating,summary})=>{
    console.log(movieposter,moviename,rating,summary)
    return(
        <>
            <div>
                <img src={movieposter} alt="" />
                <h1>{moviename}</h1>
                <h5>{rating}</h5>
                <h5>Counter +- like dislike</h5>
                <p>{summary}</p>
            </div>
        
        </>
    )
}
export default MovieCard