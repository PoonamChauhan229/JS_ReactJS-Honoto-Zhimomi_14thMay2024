import { useContext, useState } from "react";
import AncestorNameContext from "./utils/AncestorNameContext";
function ContextNewBorn() {
    const [dataName,setDataName]=useContext(AncestorNameContext)
    
    console.log(dataName)

    return(
        <>
         <h1>Hello from ContextNewBorn-{dataName}</h1>
       
        </>
    )
}
export default ContextNewBorn