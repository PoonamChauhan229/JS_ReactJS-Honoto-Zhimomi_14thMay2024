import { useState } from "react";
import Child03 from './Child03'
function Parent02({ancestorName,setAncestorName}) {
    return(
        <>
        <h1>Hello from Parent 02-{ancestorName}</h1>
        <Child03 ancestorName={ancestorName} setAncestorName={setAncestorName}/>
        </>
    )
}
export default Parent02