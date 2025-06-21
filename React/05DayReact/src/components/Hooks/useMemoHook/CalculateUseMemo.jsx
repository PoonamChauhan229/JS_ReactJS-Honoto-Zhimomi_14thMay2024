import { useMemo, useState } from "react"

function CalculateUseMemo(){
    const [count,setCount]=useState(2)

    // Assume >>Create 1 calculation
    const expensiveCalulation=(num)=>{ // count
        console.log("Calculating....")
        console.log(num*2)
        return num *2
    }

    const increment=()=>{
        console.log(count)
        setCount(count+1)
    }

    // useMemo >> Return >> Memoized Value
    // const memoizedVal=useMemo(()=>{
        // expensive cal
    //     return expensiveCalulation(count) // function call //0
    // },[count]) // value is changed >> its not rendering >>dependancy was empty 

    const memoizedVal=useMemo(()=>expensiveCalulation(count),[count])

    return(
        <>
            <div>Hi UseMemo</div>
            <p>Memoized Value-{memoizedVal} </p>
            <button
            onClick={()=>increment()}
            >Increment Num</button>
            <p>Render Count-{count}</p>
        </>
    )
}
export default CalculateUseMemo

