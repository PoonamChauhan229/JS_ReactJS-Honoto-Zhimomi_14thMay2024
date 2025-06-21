import { useCallback, useState} from "react"

function CounterUseCallback(){
    const [count,setCount]=useState(0)

    // useCallback >>
    // re-render wont happen  >>dependancy same + memoized function(saving+caching)
    // react knowlwdge >> Use it(Memoized Brain)|| rrelearn it

    const increment=useCallback(()=>{
        console.log("Btn is pressed,useCallback")
        setCount(count+1) // value is changed >> its not rendering >>dependancy was empty        
    },[count])

    // useState()     >>increment()  >>Rerender again  >>Direct execution >>state change
    // useCallback()  >>increment()

    // const increment=()=>{
    //     console.log("Btn is pressed")
    //     setCount(count+1)   // value is changed >> its will render >>Direct execution     
    // }
    return(
        <>       
        <h1>CounterUseCallback-{count}</h1>
        <button onClick={()=>increment()}>Increment-Test</button>        
        </>
    )

}
export default CounterUseCallback