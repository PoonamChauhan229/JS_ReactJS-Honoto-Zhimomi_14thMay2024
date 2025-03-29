import { useState } from "react"
import { useEffect } from "react"
import {useNavigate} from "react-router-dom"

function Read() {  
    const navigate=useNavigate()

    // https://67d541d4d2c7857431efd3a5.mockapi.io/movies
    const [showMovies,setshowMovies]=useState([])
    useEffect(()=>{
        getMovies()
    },[])

    const getMovies=async()=>{
        const res=await fetch(`https://67d541d4d2c7857431efd3a5.mockapi.io/movies`)
        const data=await res.json()
        console.log(data)
        setshowMovies(data)
    }
    const handleDelete=async(id)=>{
        const res=await fetch(`https://67d541d4d2c7857431efd3a5.mockapi.io/movies/${id}`,{
            method:"DELETE"
        })
        const data=await res.json()
        console.log(data)
        getMovies()
    }
    const handleEdit=async(id)=>{
        // api call
        // fetching data >> GET METHOD      
        navigate(`/edit/${id}`)
    }
  return (
    <>
    <hr/>
      <h3 className="text-center text-decoration-underline text-primary">Get All Movies</h3>
      <hr/>
      {/* Show All Movies */}
      <table className="table table-striped container-fluid text-center" style={{width:"75%"}}>
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Poster</th>
            <th scope="col">Rating</th>
            <th scope="col">Summary</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                // array of movieobject >>
                showMovies.length>0?
                    showMovies.map((element,index)=>(
                        <tr key={element.id}>
                            <td scope="row">{element.id}</td>
                            <td>{element.moviename}</td> 
                            <td style={{width:"fit-content !important"}}>
                            <img src={element.movieposter} style={{width:"100px",height:"80px"}} className="rounded-circle border" alt=""/>
                            </td>
                            {/* <td>{element.movieposter}</td>  */}
                            <td>{element.rating}</td>
                            <td style={{width:"500px"}}>{element.summary.substring(0,100)}...</td>
                            <td>
                                <button type="button" className="btn btn-warning me-3"
                                onClick={()=>handleEdit(element.id)}
                                >Edit</button>
                                <button type="button" className="btn btn-danger"
                                onClick={()=>handleDelete(element.id)}
                                >Delete</button>
                            </td>        
                        </tr>
                    ))
                
                
                :null
            }           
        </tbody>
      </table>
    </>
  )
}

export default Read