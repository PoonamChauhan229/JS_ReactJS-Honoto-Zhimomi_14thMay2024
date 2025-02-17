import { useState } from "react"
import Counter from "./Counter"

const MovieCard=({movieposter,moviename,rating,summary})=>{
    console.log(movieposter,moviename,rating,summary)
    const [show,setShow]=useState(false)
    const ratingStyle={
        fontSize:'17px',
        color:rating<=8?'red':'green',
    }
    const movieCardHeight={
        height:show?'320px':'270px'
    }
    return(
        <>
            <div className="movieCard" style={movieCardHeight}>
                <img src={movieposter} alt="" className="imgPoster" />
                <div className="movieSpecs">
                <h4 className="movieName">{moviename}</h4>
                <h4 style={ratingStyle} className="movieRating">⭐{rating}</h4>
                </div>
                <h5 className="counter">
                    <Counter show={show} setShow={setShow}/>                 
                </h5>
                {show && <p className="movieSummary">{summary.substring(0,60) +"..."}</p>}
            </div>
        
        </>
    )
}
export default MovieCard