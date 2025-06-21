import { useState } from "react";
function NewBorn({ancestorName,setAncestorName}) {
    return(
        <>
         <h1>Hello from NewBorn-{ancestorName}- Data Flowed from Main to NewBorn</h1>
        </>
    )
}
export default NewBorn