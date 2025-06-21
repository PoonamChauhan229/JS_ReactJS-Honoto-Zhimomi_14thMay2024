import { useState } from "react";
import Parent02 from './Parent02'
function MainParent01() {
    const [ancestorName,setAncestorName] = useState('Chauhan');
    return(
        <>
            <h1>Hello, From MainParent01-{ancestorName}</h1>
            <Parent02 ancestorName={ancestorName} setAncestorName={setAncestorName}/>
        </>
    )
}
export default MainParent01