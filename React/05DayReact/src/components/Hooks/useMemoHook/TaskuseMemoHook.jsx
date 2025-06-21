import { useMemo, useState } from "react"

function TaskuseMemoHook(){
    const [searchTerm,setSearchTerm]=useState("")
    const usersData=[
        {id:1,name:"Shivam"},
        {id:2,name:"Honoto"},
        {id:3,name:"Poonam"},
        {id:4,name:"Ravi"},
        {id:5,name:"Deepak"},
        {id:6,name:"Anjali"}
    ]
    // filter >>search >> based on the input
    // true is considered
    // false is considered

    const filteredUsers=useMemo(()=>{
        if(searchTerm.length==0) return usersData // early return >> stop execution

         return usersData.filter((element)=>{     
        // complete name  
        //   return element.name.toLowerCase()==searchTerm.toLowerCase()

        // partial name   
           return element.name.toLowerCase().includes(searchTerm.toLowerCase())  

        })
    },[searchTerm])

    return(
        <> 
        <h1>TaskuseMemoHook</h1>
        <input type="text" 
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}  
        />
        {/* <span>Test-{searchTerm}</span> */}
       
        {console.log(filteredUsers)}
        {
           filteredUsers.length>0 ?(
                filteredUsers.map((element)=>(             
                            <div 
                            key={element.id}   
                            style={{border:"1px solid black",width:"100px",textAlign:"center"}}>
                                <b>{element.name}</b>
                            </div>               
                    ))
           ) :<p><b>No users Found</b></p> // text red color
        }
   
        
     </>
    )
}
export default TaskuseMemoHook

// Task: Whatever i type >>> not there in the list >> No users found 