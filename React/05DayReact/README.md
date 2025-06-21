honotoreact1578@gmail.com
honotoreact1578


React Hooks - 6
_______________________
StateManagement
useState()
_______________________
API calls + Rendering
useEffect()
_______________________
Navaigation+ Routing
useNavigate()
useParams()
useLocation()
_______________________
Avoid PropDrilling
useContext()
________________________



useCallback()
Dependencies >>Change >>Rerendering >>Happen
>>Prevent rerendering

function x(n){
    100*n   /// n value chnage >> 1 >>100
}
x() >>100
x() >>100
x() >>100
x() >>100
x() >>100
x() >>100

const memoizedFn = useCallback(()=>{
    //logic function ----
}, [dependency1,dependency2,dependency3......])

Usage
>>Memomize >>Function 
Skipping re-rendering of components
Updating state from a memoized callback function


useMemo()
>>Memomize >>Value 
>>Optimize Performance 
>>Heavy & expensive >>High Time Taken >>Rendering will delay
>>Result of heavy computation >> Save it >>Memomize it 
>>Recompute it if depandancy change

const memoizedVal=useMemo(()=>{
    // logic function----heavy computation >>performance degrdation
},[dependency1,dependency2,dependency3......])


useRef:
React Hook

React >> Dont Manipulate the DOM Directly >> Virtual DOM

const inputRef =useRef(initialValue) // state >>Direct Modification in the DOM

No Re-render 



both useState() and useRef() are important hooks in React that serve different purposes. 
useState() is used to manage the state in a component and trigger re-renders when the state value changes, while useRef() is used to create a mutable reference to a value that does not trigger re-renders

useReducer:
Hook
const [state, dispatch] = useReducer(reducer, initialState)
state logic - state management || It is an alteranative to useState

reducer >> function >> receive state & action , return a new state || written outside the component
initialState >> initialValue of the state


state      : Current state of the component >>1 ||5
dispatch   : Function to update the state >> going to send the action to reducer function >>return a new state

Useful :
Complex state management
easier to track and manage

reducer function :reducer >> state,action (parameters) >>switch statement
function reducer(state,action){
    

}

Component Creation :Counter
function Counter(
    return(
        <>
            <h1>Dispplay an Counter Message</h1>
        </>
    )
)
export default Counter

let num=700
// 0-6
// Sunday
// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday

switch(num){
    case 0:console.log("Sunday")
        break;
    case 1:console.log("Monday")
        break;
    case 2:console.log("Tuesday")
        break;
    case 3:console.log("Wednesday")
        break;
    case 4:console.log("Thursday")
        break;
    case 5:console.log("Friday")
        break;
    case 6:console.log("Saturday")
        break;    
    default :console.log("Insert Correct Numbers from 0-6")
        break;
}

// let fruit="apple"
// let fruit="orange"
let fruit="kiwi"


switch(fruit){
    case "apple": console.log("Yes Its an Apple")
        break;
    case "orange":console.log("Yes Its an Orange")
        break;
    default:console.log("I Like only Apple & Orange,You bought",fruit)
        break;
}


>> REDUX IS NOT A PART OF REACT
>> REACT IS INDEPENDANT
>> REACT IS SELFSUFFIECIENT

>>MOM DAD     >>++++   MOM >>HOME    ||DAD
>>2 SIBLINGS

>>MOM
>>2 SIBLINGS    >> SURVIVE >>SELFSUFFIECIENT



REACT REDUX
MOM   DAD    >>CHILDRENS(APP)


MOM   >>HOUSEWIFE  (REACT)
DAD   >>WORKING    (REDUX)

MOM   >>HOUSEWIFE + WORKING + TAKEOUT WEEKENDS +DRIVE (REACT) >>SELFSUFFIECIENT
REACT >>STRUCTURE + LAYOUT + COMPONENTS +ALIGN + CONTEXT API >> 

REDUX >>MANAGE THE STATE >>CREATING THE SEPERATE STORE >> 

REDUX  >>OLDER VERSION 
REDUX TOOLKIT >> LEARN >>NEW VERSION 

A JS library for predictable and maintainable global state management

WHY???
Predictable
Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

Centralized
Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.

Debuggable
The Redux DevTools make it easy to trace when, where, why, and how your application's state changed. Redux's architecture lets you log changes, use "time-travel debugging", and even send complete error reports to a server.
redux devtools

Flexible

Redux works with any UI layer, and has a large ecosystem of addons to fit your needs.



CSS?
CSS ---> to an extent >> coding is more
REact bootstrap >> Good  >> TRY 
Tailwind Css >> Good
Material UI >>React Bootstrap

All 3 needs NPM installation >> all 4 can be used simulatenoulsy
Components +templates already created >> so directly use 
>> modal full screen + cards +carousel + accordion +dropdown

never use cdn links in react only do npm installations 

REDUX FOR NEXT 


// pass same input >> output is same >>pure
let a=2;
let b=3
function add(){
    console.log(a+b)
}
add()
add()
add()

// impure functions >> same input but different output
let count=1;
function counter(){
 count++
console.log(count)
}
counter()//2
counter()//3
counter()//4
// console.log(count)

let z=1;
let y=2
function addition(){
 z++;
 y++
console.log(z,y," - ",z+y)
}
addition()
addition()
addition()
addition()

.myContainer{
    display: flex; >>
    justify-content: space-between; >>
    align-items: center; >>
    height: 3.3rem;
    margin: 0.4rem;
    border-radius: 0.3rem; >>
    background-color: rgba(0, 0, 0, 0.585); >>
}

Boostrap
d-flex justify-content-between align-items-center bg-dark rounded
brealpoints
sm >> small mobile
md  >> mobile
lg >>tablet 
xl >>laptop
xxl >>deskatops


Redux >>
Material UI >>