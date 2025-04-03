import { useState, useEffect } from "react";
import Edit from "./Edit";

function Read() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal,setShowModal]=useState(false)

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const res = await fetch(`https://67d541d4d2c7857431efd3a5.mockapi.io/movies`);
    const data = await res.json();
    setMovies(data);
  };

  const handleDelete = async (id) => {
    await fetch(`https://67d541d4d2c7857431efd3a5.mockapi.io/movies/${id}`, {
      method: "DELETE",
    });
    getMovies();
  };

  const handleEdit = (movie) => {
    console.log(movie)//element
    setSelectedMovie(movie)
    setShowModal(true)
  }

  return (
    <>
      <h3 className="text-center text-decoration-underline text-primary">Get All Movies</h3>
      <table className="table table-striped container-fluid text-center" style={{ width: "75%" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Poster</th>
            <th>Rating</th>
            <th>Summary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.moviename}</td>
              <td>
                <img src={element.movieposter} style={{ width: "100px", height: "80px" }} className="rounded-circle border" alt="" />
              </td>
              <td>{element.rating}</td>
              <td style={{ width: "500px" }}>{element.summary.substring(0, 100)}...</td>
              <td>
                
                <button className="btn btn-warning me-3" onClick={() => handleEdit(element)}>Edit</button>

                <button className="btn btn-danger" onClick={() => handleDelete(element.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Edit showModal={showModal} setShowModal={setShowModal} selectedMovie={selectedMovie}/>
      </>
  );
}

export default Read;
