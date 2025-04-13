import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Apicall = () => {
    const {id}=useParams()
    const [movies,setMovies]=useState("")

  const getMovies = async () => {
     const data =await fetch(`https://67d541d4d2c7857431efd3a5.mockapi.io/movies/${id}`) 
     const res=await data.json()
     console.log(res)
     setMovies(res)
  }  
  console.log(movies)
//   {id: '4', movieposter: 'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZD…kEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg', moviename: 'Jai Bhim', rating: '8.8', summary: 'A tribal woman and a righteous lawyer battle in co…and, who was picked up the police on a false case'}

// map >>array ??? xxxx
// console.log(movies.movieposter)
console.log(movies.rating)

// const {movieposter,rating}=movies
  return (

    <div>

        <button onClick={()=>getMovies()}>Apicall</button>

        <p>{movies.rating}-Rating</p>
        {/* <img src={movies.movieposter} alt="" /> */}

          {/* <p>{rating} My Movie Rating</p> 
          <img src={movieposter} alt="" />  */}

    </div>
  )
}

export default Apicall