import { useEffect, useState } from 'react'

// https://jsonplaceholder.typicode.com/posts
//fetch

// useEffect(cbk function)
// useEffect(()=>{}) initial render >> call n times >> burden
// useEffect(cbk function,dependancy array)
// useEffect(()=>{},[]) >>initial render >> multiple times no >> 1 call 
const APIcall = () => {
    const [todos,setTodos]=useState([])
    const [count,setCount]=useState(0) //1
    useEffect(()=>{
        getTodos();
        updateTodos();
        deleteTodos();
    },[count])  // empty dependancy array
    //depenedancy >> empty array >> initial render >> run once >>page load
    // putting value in dependancy >> initial render + whenever value changes that time it will render

    //evrey time >> empty 
    // state variable 
// api call >> READ METHOD GET
const getTodos=async()=>{
    console.log("GET ALL TODOS")
    let res=await fetch("https://jsonplaceholder.typicode.com/todos")
    let data=await res.json()
    console.log(data)
    setTodos(data)
}
// console.log(todos)
// getTodos()
 

const updateTodos=async()=>{
    // https://jsonplaceholder.typicode.com/posts/1
    let newPost={
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'PUT',
        body: JSON.stringify(newPost),
        headers:  {'Content-type': 'application/json'}
    })
    let data=await res.json()
    console.log(data)

   
}

const deleteTodos=async()=>{
    // https://jsonplaceholder.typicode.com/posts/1
    let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'DELETE'
    })
    let data=await res.json()
    console.log(data)
}
  return (
    <div>
      <h1>APICALL</h1>
        {
            todos.map((element)=>(
                <>
                    <h4>Title:{element.title}</h4>                    
                </>
            ))
        }

    </div>
  )
}

export default APIcall
