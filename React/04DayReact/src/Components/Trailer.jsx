import React from 'react'
import { useLocation } from 'react-router-dom'
const Trailer = () => {
  const location=useLocation()
  console.log(location)
  console.log(location.state.movies)
  // Trailer >
  console.log(location.state.movies.trailer)

  return (
    <div>
      <iframe width="503" height="280" 
      src={location.state.movies.trailer} 
      title={location.state.movies.moviename} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    // <div>
    //   <img src={location.state.movies.movieposter} alt='' height={300} width={200}/>
    // </div>
  )
}

export default Trailer