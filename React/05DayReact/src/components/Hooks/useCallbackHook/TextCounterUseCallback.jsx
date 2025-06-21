import { useCallback, useState} from "react"

function TextCounterUseCallback(){
    const [count,setCount]=useState(0)
    const [text,setText]=useState("")

    // useCallback

    // const increment=useCallback(()=>{
    //     console.log("Btn is pressed")
    //     setCount(count+1)
    //     console.log(count)
        
    // },[text])

    const increment=useCallback(()=>{
        console.log("Btn is pressed")
        setCount(count+1)
        console.log(count)
        
    },[text,count])

      return(
        <>       
        <h1>CounterUseCallback-{count}</h1>
        <button onClick={()=>increment()}>Increment</button>

        <input type="text" 
        value={text}
        onChange={(e)=>{
            setText(e.target.value)
        }}
        placeholder="Type Something..."
        />
     </>
    )

}
export default TextCounterUseCallback