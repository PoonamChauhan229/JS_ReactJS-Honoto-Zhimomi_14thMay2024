// Input Field >>Red >>Btn 

// Box >> Red Color
// BOx >> Green Color
import { useState } from "react"
const AddColor=()=>{
    const [colorVal,setColorVal]=useState("yellow")

    const [colorList,setColorList]=useState()

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
        <input type="text" value={colorVal} onChange={(e)=>{setColorVal(e.target.value)}}/>
        <button
        onClick={()=>{
            console.log(colorVal)
            setColorList(colorVal)
        }}
        >Submit</button>

        {colorVal && <p>{colorVal}</p>}
        <div style={colorDiv}></div>


        </>
    )
}
export default AddColor

