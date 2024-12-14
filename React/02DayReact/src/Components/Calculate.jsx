import { useState } from "react";

const Calculate=()=>{
    // let count=0;// js variable
    //react state variable >> useState() >> Hooks 
    // destructuring of an array 
    //useState >> returns an arry >> destructure it out okay
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(28);
    const [name, setName] = useState('Taylor');
    const [newOne,setNewOne]=useState(" ")

    return(
        // JSX 
        <>
         <p>{count}{newOne}{age}{newOne}{name}</p>
    
        </>
    )
}
export default Calculate;