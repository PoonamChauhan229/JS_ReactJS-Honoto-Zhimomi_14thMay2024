import { useState } from "react";
import AncestorNameContext from './utils/AncestorNameContext'
import ContextParent02 from './ContextParent02'
function ContextMainParent01() {
    const [ancestorName,setAncestorName] = useState('Chauhan');
    return(
        <>
            <h1>Hello, From ContextMainParent01</h1>

            <AncestorNameContext.Provider value={[ancestorName,setAncestorName]}>                
                <ContextParent02/>            
            </AncestorNameContext.Provider>

        </>
    )
}
export default ContextMainParent01