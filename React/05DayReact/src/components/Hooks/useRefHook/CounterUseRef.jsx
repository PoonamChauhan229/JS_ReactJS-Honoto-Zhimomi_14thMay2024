import { useState ,useRef} from "react"

function CounterUseRef(){
    const countRef=useRef(0)              //DOM
    const [counter,setCounter]=useState(0)//Browser

    const handleCounter=()=>{
        console.log("handleCounter")
        console.log("Ref",countRef)  //object
        console.log("UseState",counter) //directly
        countRef.current++;
        setCounter(countRef.current)
    }
    return(
        <>
        <h3>CounterUseRef-{counter}</h3>
        <button onClick={()=>handleCounter()}>Counter +</button>
        </>
    )

}
export default CounterUseRef