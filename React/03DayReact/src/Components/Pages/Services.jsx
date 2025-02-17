import ColorBox from "../ColorBox"
const Services=({movie,title})=>{//n >params
    console.log(movie)
    return(
        <>
        <h1 style={{color:"white"}}>ServicesPage </h1>
        <ColorBox/>
        <h2>{title}</h2>
        {
            movie.map((element)=><p>{element.moviename}</p>)
        }
    </>
    )
}
export default Services


//array of objecta >> home
//want to us >> service ???

// conatct >> gallery component