const submitForm=document.getElementById('submitForm')
const fname=document.getElementById('fname')
const lname=document.getElementById('lname')
const tbody=document.getElementById('tbody')
const url=`https://66e9696a87e417609449515a.mockapi.io/userData/userData`
submitForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(fname.value,lname.value)
    // createTableRow(fname.value,lname.value)
    createUserData(fname.value,lname.value)
})

function createTableRow(id,value1,value2){
    let tr=document.createElement('tr')
    let td1=document.createElement('th')
    let td2=document.createElement('td')
    let td3=document.createElement('td')
    let td4=document.createElement('td')
    
    td1.setAttribute("scope","row")// bold 

    // id >> 
    td2.setAttribute("id",`tableFname${id}`)// fname
    td3.setAttribute("id",`tableLname${id}`)// lname
  

    td1.innerHTML=id
    td2.innerHTML=value1
    td3.innerHTML=value2
    td4.innerHTML=`
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
    data-bs-target='#exampleModal${id}'
    id='edit${id}'
    onclick='getEditById(${id})'
    >
     Edit
    </button>  
    <button class="btn btn-danger" id='delete${id}' onclick='deleteUserData(${id})'>Delete</button>`
    tr.append(td1,td2,td3,td4)
    tbody.append(tr)
}

// fetch usersData
async function getUserData(){
    let res=await fetch(url,{
        method:"GET"
    })
    let data=await res.json()
    console.log(data)
    data.map((element,index)=>{
        const{fname,lname,id}=element
        console.log(fname,lname,id)
        createTableRow(id,fname,lname)
    })    
}
getUserData()

//create user data
async function createUserData(fname,lname){
    // i have to pass my data from the form
    let newUser={
        fname:fname,
        lname:lname
    }
    let data=await fetch(url,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(newUser)
    })
    let res=await data.json()
    console.log(res)
    createTableRow(res.id,res.fname,res.lname)

}


// delete

async function deleteUserData(id){
    console.log(id)
    console.log(`${url}/${id}`)
    await fetch(`${url}/${id}`,{
        method:"DELETE"
    })
    tbody.innerHTML=""
    getUserData()
}

// edit
//PUT >> make changes on the server 
// method:"PUT",
// headers:{"Content-type":"application/json"},
// body:JSON.stringify(newUser)

async function getEditById(id){
console.log(id)
console.log(`${url}/${id}`)
let data=await fetch(`${url}/${id}`,{
    method:"GET"
})
let res=await data.json()
console.log(res)
const{fname,lname}=res

        const modal=document.createElement('span')
        modal.innerHTML=`
        <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel${id}">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type='text' value=${fname} id="alertfname${id}">
                <input type='text' value=${lname} id="alertlname${id}">
            
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick='updateUserData(${id})'>Save changes</button>
            </div>
            </div>
        </div>
        </div>
        `
        document.body.append(modal)
   
   // Show the modal manually after appending
   const modalElement = new bootstrap.Modal(document.getElementById(`exampleModal${id}`));
   modalElement.show();
}

async function updateUserData(id){
modalFname=document.getElementById(`alertfname${id}`).value
modalLname=document.getElementById(`alertlname${id}`).value
console.log(modalFname,modalLname)
console.log(id)
let updateUser={
    fname:modalFname,
    lname:modalLname
}
let data=await fetch(`${url}/${id}`,{
    method:"PUT",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(updateUser)
})

let res=await data.json()
console.log(res)

document.getElementById(`tableFname${id}`).innerText=res.fname
document.getElementById(`tableLname${id}`).innerText=res.lname

}
