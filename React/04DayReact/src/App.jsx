import { useState } from 'react'
import './App.css'
import Create from './Components/Create'
import Read from './Components/Read'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
import StartPage from './Components/StartPage'
import Params from './Components/Params'
import Apicall from './Components/Apicall'
import Trailer from './Components/Trailer'

//Navigate, Route, Routes>> Components
// useNavigate() >>Hook

// Navigate any page >> Routing is must <Route path="" element={} />
// Link Tag
// useNavigate() Hook >> React router dom

// HTML CSS >> anchor || React simple >> Link Tag

// Entity >> Button >>Link tag >>not advisable >> Operation >> useNavigate
// onclick >> useNavigate()
function App() {  
     const navigate= useNavigate()  
    const [id,setId]=useState('9')  

   
  return (
    <>
      <button
        onClick={()=>{
          console.log("Btn is clicked")
          navigate('/home')
        }}
      >Click</button>

      <button
      onClick={()=>navigate('/trailer')}
      >
        Watch Trailer
      </button>

      <Link to='/paramscrud/Armenia'>ParamsCrud</Link>
      <br/>
      <hr/>

      <Link to={`/apicall/${id}`}>API</Link>

      <hr/>
      {/* 4 || 7 || 13 ||12 ||20 >>> total no of movies */}

      {/* Link +Routing */}
      {/* <Create movies={movies} setMovies={setMovies}/> 
      <Read  movies={movies} setMovies={setMovies}/> */}
      <Routes>
        
        <Route path='/' element={<StartPage/>}/>

        {/* <Route path='/notfound' element={<NotFound/>}/>
      
        <Route path='*' element={<Navigate to="/notfound"/>}/>   handled unnecssary url typed by people */}

        {/* <Route path='*' element={<NotFound/>}/>  */}

        {/* 1 more way ? website >>/team >>/team-management */}

        {/* change my old url to the new url */}

        <Route path='/home' element={<Navigate to="/home-management"/>}/> 
        <Route path='/home-management' element={<Home/>}/>


        {/* 10 yrs >> /home >>/home-management  >> existing user >>/home is not working*/}
        {/*  */}

        <Route path='/paramscrud/:holiday' element={<Params/>}/>
        <Route path='/apicall/:id' element={<Apicall setId={setId}/>}/>

        <Route path='/trailer' element={<Trailer/>}/>
      </Routes>
     
    </>
  )
}

export default App



{/* <Link to "/"><Button >>> any oprations>Click</Button></Link> */}