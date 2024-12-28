import { useState } from "react";

const Counter=()=>{

    const[message,SetMessage]=useState('')
    const[count,SetCount]=useState(0)

    const styleDiv={
        border:'3px dotted green',
        width:'40%',
        padding:'1%',
        margin:'auto',
        textAlign:'center'
    }

    const btnStyle={
        padding:'3%',
        margin:'1%',
        backgroundColor:'green',
        color:'white',
        fontSize:'19px',
        border:'none',
        borderRadius:'5%',
    }
    const messageStyle={
        // Fizbuzz Problem 
        color:count==5?"orange":count>0?"purple":"red"
    }

    return(
        <>
            <div style={styleDiv}>
                <h1 style={{fontSize:'40px',color:'blueviolet'}}>{count}</h1>
                <button style={btnStyle} onClick={()=>{
                    SetCount(count+1)
                    SetMessage("Increasing the Count")                    

                }}>Increment btn</button>

                <button style={btnStyle} onClick={()=>{
                  if(count>0){
                    SetCount(count-1)
                    SetMessage("Decreasing the Count")
                  }    
                  if(count==0){
                    SetMessage("Press the Increment Button,as we cant decrement below 0")
                  }
                }}>Decrement btn</button>

                <h5 style={messageStyle}>{message}</h5>
            </div>
        </>
    )
}
export default Counter
