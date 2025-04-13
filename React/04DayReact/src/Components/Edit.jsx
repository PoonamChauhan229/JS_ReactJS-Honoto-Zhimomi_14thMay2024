// Edit Modal
// show modal  >>click on that edit btn  >> boolean value >>true
// fade modal  >>plain screen no visible >> boolean value >>false


import { useState,useEffect } from "react";
function Edit({showModal,setShowModal,selectedMovie,getMovies}) {  
    // edit + update
    console.log(showModal)// false
    const [movieName, setMovieName] = useState("");
    const [moviePoster, setMoviePoster] = useState("");
    const [movieRating, setMovieRating] = useState("");
    const [movieSummary, setMovieSummary] = useState("");
    

    // modal to load
    // selectedmovie
    useEffect(() => {
        console.log("Test",selectedMovie)
        if(selectedMovie){ // false
            console.log(selectedMovie)
            setMovieName(selectedMovie.moviename)
            setMoviePoster(selectedMovie.movieposter)
            setMovieRating(selectedMovie.rating)
            setMovieSummary(selectedMovie.summary)

        }        
    },[selectedMovie])
    // [] >> Intial Render >> 1st 
    // [something inside] >> render >> whenever "something inside" is updated

    const handleClose=()=>{
        setShowModal(false)
    }
    const handleUpdate=async()=>{
        console.log("Updation to Server in progress for the Id No....",selectedMovie.id)
        const updateMovie={
            moviename:movieName,
            movieposter:moviePoster,
            rating:movieRating,
            summary:movieSummary,
        }
            // 1- We have to make an API Call >> to the server
            // `https://67d541d4d2c7857431efd3a5.mockapi.io/movies/${selectedMovie.id}`
            // id >> ?

            let data=await fetch(`https://67d541d4d2c7857431efd3a5.mockapi.io/movies/${selectedMovie.id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(updateMovie)// pass the updation to the server
            })
            let res=await data.json()
            console.log(res)

            // 2- update to the browser
            setShowModal(false)
            getMovies()
        
    }

    if(showModal==false) return null;  

    
        return (
            <>
               

                <div 
                style={{
                    position:"fixed",
                    backgroundColor:"rgba(0,0,0,0.5)",
                    inset:0,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    zIndex:1000,
                
                }} >
                <div className="modal-dialog" style={{width:"500px"}}>
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Update Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                         onClick={()=>handleClose()}
                        ></button>
                    </div>
                    <div className="modal-body">
                            {/* Movie Name */}
                            <div className="row mb-3">
                            <label htmlFor="movieName" className="col-sm-2 col-form-label">Movie Name:</label>
                            <div className="col-sm-10">
                                <input
                                type="text"
                                className="form-control"
                                id="movieName"
                                value={movieName}
                                onChange={(e) => setMovieName(e.target.value)}
                                required
                                />
                            </div>
                            </div>

                            {/* Movie Poster */}
                            <div className="row mb-3">
                            <label htmlFor="moviePoster" className="col-sm-2 col-form-label">Movie Poster:</label>
                            <div className="col-sm-10">
                                <input
                                type="text"
                                className="form-control"
                                id="moviePoster"
                                value={moviePoster}
                                onChange={(e) => setMoviePoster(e.target.value)}
                                required
                                />
                            </div>
                            </div>

                            {/* Movie Rating */}
                            <div className="row mb-3">
                            <label htmlFor="movieRating" className="col-sm-2 col-form-label">Movie Rating:</label>
                            <div className="col-sm-10">
                                <input
                                type="number"
                                className="form-control"
                                id="movieRating"
                                value={movieRating}
                                onChange={(e) => setMovieRating(e.target.value)}
                                min="0"
                                max="10"
                                step="0.1"
                                required
                                />
                            </div>
                            </div>

                            {/* Movie Summary */}
                            <div className="row mb-3">
                            <label htmlFor="movieSummary" className="col-sm-2 col-form-label">Movie Summary:</label>
                            <div className="col-sm-10">
                                <textarea
                                className="form-control"
                                id="movieSummary"
                                rows="3"
                                value={movieSummary}
                                onChange={(e) => setMovieSummary(e.target.value)}
                                required
                                ></textarea>
                            </div>
                            </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                        onClick={()=>handleClose()}
                        >Close</button>
                        <button type="button" className="btn btn-primary" 
                        onClick={()=>handleUpdate()}
                        >Update</button>
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    }

export default Edit;