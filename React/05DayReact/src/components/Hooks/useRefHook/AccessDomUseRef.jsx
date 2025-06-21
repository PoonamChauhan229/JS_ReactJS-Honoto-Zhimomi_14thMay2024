import { useEffect, useRef } from "react"

function AccessDomUseRef(){
    const inputRef=useRef("test") //useRef Hook
    // inputRef >> object >>.current property
    // current property >> initialvalue of useRef
    console.log(inputRef.current)
  
    const handle1=()=>{
        console.log("handle1")
        inputRef.current.value="Hello Honoto"
    }

     const handle2=()=>{
              console.log("handle2")
            document.getElementById("test").value="Hello Poonam"
    }

    return(
        <>
            <h1>UseRef Start</h1>
            {/* input Feild */}
        {/* <input type="text" value={inputRef.current} /> */}
        {/* Attching ref to the input element */}
        <input type="text" value={inputRef.current} ref={inputRef} placeholder="type username...."
        
        /> 
         <button onClick={()=>handle1()}>Submit1 Input</button>
         <br/><br/>
        <input type="text" name="" id="test"  />

       

         <button onClick={()=>handle2()}>Submit2 Input</button>
        </>
    )
}
export default AccessDomUseRef