import { useContext} from "react";
import ContextNewBorn from './ContextNewBorn'
import AncestorNameContext from "./utils/AncestorNameContext";
function ContextChild03() {
        const [dataName,setDataName]=useContext(AncestorNameContext)
    
    return(
        <>
         <h1>Hello from ContextChild03-{dataName}</h1>
         <ContextNewBorn/>
        </>
    )
}
export default ContextChild03