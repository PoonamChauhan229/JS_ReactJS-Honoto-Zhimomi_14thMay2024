import { useState } from "react";

const AddMovie = (allmovies) => {
  // console.log(allmovies)
  // console.log(allmovies.allmovies)
  const [movieName, setMovieName] = useState("RRR");
  const [moviePoster, setmoviePoster] = useState("");
  const [movieRating, setmovieRating] = useState("");
  const [movieSummary, setmovieSummary] = useState("");
  const [movieList, setMovieList] = useState(allmovies.allmovies); // check that spread works


//   12 movie list  exiting movielist >> App.jsx
//   add
//   13 

  return (
    <>
      <h1 style={{ color: "white" }}>AddMovie</h1>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setMovieName(e.target.value)}
        value={movieName}
      />
      <br />
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setmoviePoster(e.target.value)}
        value={moviePoster}
      />
      <br />
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setmovieRating(e.target.value)}
        value={movieRating}
      />
      <br />
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setmovieSummary(e.target.value)}
        value={movieSummary}
      />
      <br />

      <button
        onClick={() => {         

          let newMovie = {
            movieposter: moviePoster,
            moviename: movieName,
            rating: movieRating,
            summary: movieSummary,
          };

          
          console.log(newMovie);
          setMovieList([...movieList,newMovie]) 
          console.log(movieList)
        }}
      
      >
        Submit
      </button>
      {/* {console.log(movieList)} */}
    </>
    
  );

};
export default AddMovie;
