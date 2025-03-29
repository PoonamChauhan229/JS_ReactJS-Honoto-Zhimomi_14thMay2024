import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


const Edit = () => {
    const {id}=useParams() // TAKE THE UNIQUE FROM THE URL
      console.log(id)
      const [movieList,setMovieList]=useState({})
      const [movieName,setmovieName]=useState(movieList.moviename)
      const[moviePoster,setmoviePoster]=useState("")
      const [movieRating,setmovieRating]=useState("")
      const [movieSummary,setmovieSummary]=useState("")

    const getEditMovie=async()=>{
        const res=await fetch(`https://67d541d4d2c7857431efd3a5.mockapi.io/movies/${id}`)
        const data=await res.json()
        console.log(data)   
        setMovieList(data)     
    }
    useEffect(()=>{
        getEditMovie()},
        [])
        return (
            <form className="p-3 container w-50">\
            {/* moviename */}
        <div className="row mb-3 ">
            <label htmlFor="movieName" className="col-sm-2 col-form-label">MovieName :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="movieName" 
            value={movieName}
            onChange={(e)=>setmovieName(e.target.value)}
            />
            </div>
        </div>

        {/* poster */}
        <div className="row mb-3 ">
        <label htmlFor="moviePoster" className="col-sm-2 col-form-label">MoviePoster :</label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="moviePoster"
        value={moviePoster}
        onChange={(e)=>setmoviePoster(e.target.value)}      
        />
        </div>
        </div>
        {/* rating */}
        <div className="row mb-3 ">
        <label htmlFor="movieRating" className="col-sm-2 col-form-label">Movierating :</label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="movieRating"
        value={movieRating}
        onChange={(e)=>setmovieRating(e.target.value)}
        />
        </div>
        </div>

        {/* moviesummary */}
        <div className="row mb-3 ">
        <label htmlFor="movieSummary" className="col-sm-2 col-form-label">MovieSummary:</label>
        <div className="col-sm-9">
        <textarea className="form-control" id="movieSummary" rows="3"
        value={movieSummary}
        onChange={(e)=>setmovieSummary(e.target.value)}
        ></textarea>
        </div>
        </div>

        {/* button */}
        <button type="submit" className="btn btn-primary" onClick={(e)=>handleSubmitForm(e)}>Submit</button>
            </form>
  )
}

export default Edit