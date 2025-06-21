// Start Button
// Stop Button
// Date.now() >> timer 

import { useRef, useState } from "react"

function StopWatchUseRef(){
    const [startTime,setStartTime]=useState(0) //Initial timestamp in ms >>timer Start value
    const intervalRef=useRef(null) //To store interval
    const [now,setNow]=useState(null) //continously run

    const handleStart=()=>{
        console.log("handleStart")
        console.log(Date.now())
        setStartTime(Date.now()) //current timestamp in ms
        setNow(Date.now())   
        
        clearInterval( intervalRef.current) // earlier any setInterval stop   
        
        intervalRef.current=setInterval(()=>{
            setNow(Date.now())
        },10)
    }

     const handleStop=()=>{
        console.log("handleStop")
        clearInterval( intervalRef.current)
    }


    let secondsPassed =0;
    // ms / 1000
    if(startTime !=null && now !==null){
    secondsPassed=(now-startTime)/1000   //>>currentTime - timerStart  //mathematics
    console.log(secondsPassed)
    }

    // Show the seconds Start
    return(
        <>
        <h1>Stop Watch</h1>
        {/* <h3>Time:{startTime}-{now} ={secondsPassed}</h3> */}
        <h3>Time :{secondsPassed.toFixed(2)}</h3>
        <button onClick={()=>handleStart()}>Start</button> &nbsp;
        <button onClick={()=>handleStop()}>Stop</button>
        </>
    )
}
export default StopWatchUseRef