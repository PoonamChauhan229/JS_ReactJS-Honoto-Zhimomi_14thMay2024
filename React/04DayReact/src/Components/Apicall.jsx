import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Apicall({setId}) {
    const {id}=useParams()
    const [movies,setMovies]=useState({})
    const navigate=useNavigate()
    // const [randomID,setRandomID]=useState()
    
    const apicall=async(id)=>{
        const res=await fetch(`https://67d541d4d2c7857431efd3a5.mockapi.io/movies/${id}`)
        const data=await res.json()
        console.log(data)
        setMovies(data)
    }
    useEffect(()=>{
        apicall(id)
    },[id])
    
    return (
        <>
        <button onClick={()=>{
            const newID=Math.floor(Math.random()*12+1)
            setId(newID)
            navigate(`/apicall/${newID}`)
            // apicall()
            // console.log(Math.floor(Math.random()*12+1));
        }}>Change Random ID</button>
        
        {/* {console.log(id)} */}
        
        <div style={{marginTop:'20px'}}>
            <img style={{height:'200px',weight:'200px'}} src={movies.movieposter} alt="" />
            <p>{movies.moviename}</p>
            <p>{movies.rating}</p>
            <p>{movies.summary}</p>

            <button
            onClick={()=>{
            navigate(('/trailer'),{state:{movies:movies}})
            }}>
            Watch Movie Trailer
            </button>
        </div>
        
        </>
    )
}

export default Apicall