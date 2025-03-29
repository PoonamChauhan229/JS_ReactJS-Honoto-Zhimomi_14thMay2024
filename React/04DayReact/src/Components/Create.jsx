import { useState } from "react"

function Create() {  
  const [movieName,setmovieName]=useState("")
  const[moviePoster,setmoviePoster]=useState("")
  const [movieRating,setmovieRating]=useState("")
  const [movieSummary,setmovieSummary]=useState("")
  
  const handleSubmitForm=()=>{
    console.log("Form Submitted")
    console.log(movieName,moviePoster,movieRating,movieSummary)
    const movie={
      movieposter:moviePoster,
      moviename:movieName,
      rating:movieRating,
      summary:movieSummary
    }
    console.log(movie)
    handlePostMovie(movie) // simple function call
    }

    const handlePostMovie=async(movie)=>{
      console.log("Adding data to the server",movie)
      // post method
     let res=await fetch('https://67d541d4d2c7857431efd3a5.mockapi.io/movies',{
        method:"POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        // Server accepts String Language >> understands 
        // JSON.stringify()
        body:JSON.stringify(movie)  
             
      })
      let data=await res.json()
      console.log(data)
    }
  return (
      <>
        <hr/>
      <h3 className="text-center text-decoration-underline text-primary">Create Movie</h3>
      <hr/>
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
      </>
    )
  }
  
  export default Create