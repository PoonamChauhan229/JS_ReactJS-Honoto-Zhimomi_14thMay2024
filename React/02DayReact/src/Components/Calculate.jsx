import { useState } from "react";

const Calculate=()=>{
    // let count=0;// js variable
    //react state variable >> useState() >> Hooks 
    // destructuring of an array 
    //useState >> returns an arry >> destructure it out okay
    // state >> react state variable
    //setState >> function to update ur state variable 
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(28);
    const [name, setName] = useState('Taylor');
    const [newOne,setNewOne]=useState(" ") // initialState || initialValue

    let num=1
    return(
        // JSX 
        <>
        {/* Javasscript Variable*/}
        <h1>{num}</h1>
        <button onClick={()=>{
            num++
            console.log(num)
            }}>JS Btn</button>
        <h1>{num}</h1>

        <p>{count}{newOne}{age}{newOne}{name}</p>

        {/* React State Variable >> useState()  */}

         <h1 style={{color:"orangered"}}>{count}</h1>  
         <button
         onClick={()=>{
            setCount(count+1)
            setNewOne("React")
            setAge(100)
            setName("Honoto")
         }}>React Btn</button> 

         <h4>{count}</h4>
        </>
    )
}
export default Calculate;