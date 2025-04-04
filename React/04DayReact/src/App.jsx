import { useState } from 'react'
import './App.css'
import Create from './Components/Create'
import Read from './Components/Read'



function App() {  
    const [movies, setMovies] = useState([]);  
   
  return (
    <>
      <Create movies={movies} setMovies={setMovies}/> 
      <Read  movies={movies} setMovies={setMovies}/>
     
    </>
  )
}

export default App



