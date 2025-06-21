import { useReducer } from "react"
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const initialState=0
function reducer(state,action){
   switch(action.type){
        case "increment" :
            return state + 1;       
        case "decrement" :
            if(state>0){ // below 0 not possible
                 return state-1;
            }   
            return state;
        case "muiltiplyby2" :
            if(state>0){
                return state*2;   
            }
            return state;
        case "divideby20" :
            if(state>0){
                return parseFloat((state/20).toFixed(2));   
            }
            return state;
        default:
            return state=0;
    }
}

function CounteruseReducer(){
    const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            <h1>CounteruseReducer</h1>
            <p>{count}</p>
    <button onClick={
        // dipatch the reducer action >> swtich case type >> increment ||decrement
        ()=>{dispatch({type:"increment"})}
    }>Increment</button>

    <br/><br/>

    <button onClick={
         ()=>{dispatch({type:"decrement"})}
    }>Decrement</button>

    <br/><br/>
    <button onClick={
        ()=>{dispatch({type:"muiltiplyby2"})}
    }
    >muiltiplyby2</button>

    <br/><br/>
    <button onClick={
        ()=>{dispatch({type:"divideby20"})}
    }
    >divideby20</button>

    <br/><br/>
    <button onClick={
          ()=>{dispatch({type:"reset"})}
    }>Reset</button>

    <br/><br/>
    <Button
    className="bg-dark fs-1"
    variant="outline-success"
    >Test-React Bootstrap</Button>


      <br/><br/>

      <Button>Test</Button>
       <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="danger"
        title="Movies Type"
        className="mt-2"
        data-bs-theme="dark"
      >
       
        <Dropdown.Item href="#/action-4">Comedy</Dropdown.Item>

        <Dropdown.Item href="#/action-3">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Thriller</Dropdown.Item>
      </DropdownButton>
    </>
    )
}
export default CounteruseReducer