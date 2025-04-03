import { useState } from "react";

function Create() {
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault(); // Prevents form from reloading the page

    console.log("Form Submitted");
    console.log(movieName, moviePoster, movieRating, movieSummary);

    const movie = {
      movieposter: moviePoster,
      moviename: movieName,
      rating: movieRating,
      summary: movieSummary,
    };

    console.log(movie);
    handlePostMovie(movie);
  };

  const handlePostMovie = async (movie) => {
    console.log("Adding data to the server", movie);

    try {
      let res = await fetch("https://67d541d4d2c7857431efd3a5.mockapi.io/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(movie),
      });

      let data = await res.json();
      console.log("Response from server:", data);
      alert("Movie added successfully!"); // Confirmation message

      // Reset form fields after submission
      setMovieName("");
      setMoviePoster("");
      setMovieRating("");
      setMovieSummary("");
    } catch (error) {
      console.error("Error adding movie:", error);
      alert("Failed to add movie. Please try again.");
    }
  };

  return (
    <>
      <hr />
      <h3 className="text-center text-decoration-underline text-primary">Create Movie</h3>
      <hr />
      <form className="p-3 container w-50" onSubmit={handleSubmitForm}>
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

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default Create;
