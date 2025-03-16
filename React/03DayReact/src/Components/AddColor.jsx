// Input Field >>Red >>Btn 

// Box >> Red Color
// BOx >> Green Color
import { useState } from "react"
const AddColor=()=>{
    // useState
    // destructuring
    // colorVal  >> Initial Value >> yellow
    // setColorVal >> Updates the Value
    const [colorVal,setColorVal]=useState("yellow")

   
    const [colorList,setColorList]=useState() //null empty 

    const colorDiv={
        color:colorList,
        backgroundColor:colorList,
        height:"20px",
        width:"210px",
        marginTop:"10px"
    }
    return(
        <>
        <h1>Add Color</h1>

      
        <input 
        type="text" 
        // value="RRR"
        value={colorVal} 
        // e:{target:{value:"RRR"}}
        onChange={(e)=>{
            // console.log(e)
            // console.log(e.target.value)
            setColorVal(e.target.value)
            }         
        }
        />
        <button
        onClick={()=>{
            console.log(colorVal)
            setColorList(colorVal)
        }}
        >Submit</button>

        {/* if colorVal is prsent>> show ColorVal */}
        {/* && >> ternary  */}
        {colorVal && <p>{colorVal}</p>}
        {/* condition && true  */}
        {/* condition? true : false  */}
        {/* Showing the color */}
        <div style={colorDiv}></div>


        </>
    )
}
export default AddColor

