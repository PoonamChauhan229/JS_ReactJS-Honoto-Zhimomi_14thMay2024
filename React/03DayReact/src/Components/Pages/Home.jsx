import Header from "../Header"
import MovieDisplay from "../MovieDisplay"
import Services from "./Services"

const Home=({movie})=>{ //params
    

    return(
        <>
       <Header/>
       <MovieDisplay movie={movie}/> 
     
        </>
    )
}
export default Home