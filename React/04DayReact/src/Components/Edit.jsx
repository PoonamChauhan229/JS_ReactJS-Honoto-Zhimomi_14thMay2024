import React, { useState, useEffect } from "react";

function EditModal({ showModal, setShowModal, selectedMovie, getMovies }) {
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState("");

  useEffect(() => {
    if (selectedMovie) {
      setMovieName(selectedMovie.moviename);
      setMoviePoster(selectedMovie.movieposter);
      setMovieRating(selectedMovie.rating);
      setMovieSummary(selectedMovie.summary);
    }
  }, [selectedMovie]);

  const handleUpdate = async () => {
    if (!selectedMovie) return;

    const updatedMovie = {
      moviename: movieName,
      movieposter: moviePoster,
      rating: movieRating,
      summary: movieSummary,
    };

    await fetch(
      `https://67d541d4d2c7857431efd3a5.mockapi.io/movies/${selectedMovie.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedMovie),
      }
    );

    setShowModal(false);
    getMovies(); // Refresh movie list
  };

  if (!showModal) return null; // Prevent rendering when modal is not needed

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // Ensures modal appears above everything
      }}
    >
      <div
        className="modal-content p-4"
        style={{
          background: "#fff",
          borderRadius: "8px",
          width: "500px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h3>Edit Movie</h3>
        <label>Movie Name:</label>
        <input
          type="text"
          className="form-control"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />

        <label>Movie Poster:</label>
        <input
          type="text"
          className="form-control"
          value={moviePoster}
          onChange={(e) => setMoviePoster(e.target.value)}
        />

        <label>Movie Rating:</label>
        <input
          type="number"
          className="form-control"
          value={movieRating}
          onChange={(e) => setMovieRating(e.target.value)}
          min="0"
          max="10"
          step="0.1"
        />

        <label>Movie Summary:</label>
        <textarea
          className="form-control"
          value={movieSummary}
          onChange={(e) => setMovieSummary(e.target.value)}
        ></textarea>

        <div className="mt-3">
          <button className="btn btn-success me-2" onClick={handleUpdate}>
            Update
          </button>
          <button className="btn btn-danger" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
