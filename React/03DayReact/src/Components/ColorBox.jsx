// Input Field >>Red >>Btn 

// Box >> Red Color
// BOx >> Green Color
import { useState } from "react"
const ColorBox=()=>{
    const [colorVal,setColorVal]=useState("yellow")

     // For storing multiple value in an array
    // [yellow,red,green]
    const [colorList,setColorList]=useState([])

    const colorDiv={
        // color:colorVal,
        // backgroundColor:colorList,
        height:"20px",
        width:"210px",
        marginTop:"10px"
    }
    return(
        <>
        <h1>ColorBox</h1>
        <input type="text"
        value={colorVal} 
        onChange={(e)=>{setColorVal(e.target.value)}}
        />
        
        <button
        onClick={()=>{
            console.log(colorVal)
            // Spread Operator >> copy colorVal and update colorList
            setColorList([...colorList,colorVal])
            console.log(colorList)
        }}
        >Submit</button>

        {colorVal && <p>{colorVal}</p>}
        
        {
            colorList.map((element,index)=><div 
            key={index} // virtual DOM  >> unique key
            style={{
                 backgroundColor:element,
                    height:"20px",
                    width:"210px",
                    marginTop:"10px"
            }}></div>)
        }
    </>
    )
}
export default ColorBox

