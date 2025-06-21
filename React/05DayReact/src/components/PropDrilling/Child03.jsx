import { useState } from "react";
import NewBorn from './NewBorn'
function Child03({ancestorName,setAncestorName}) {
    return(
        <>
         <h1>Hello from Child03-{ancestorName}</h1>
         <NewBorn ancestorName={ancestorName} setAncestorName={setAncestorName}/>
        </>
    )
}
export default Child03