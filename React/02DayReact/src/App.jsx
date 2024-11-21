import './App.css'
import React from 'react'

import Profile from './Components/Profile'
import LearningDisplay from './Components/LearningDisplay'
function App() {

  return (
    // React Fragment >> React.Fragment
    //<React.Fragment>block of code </React.Fragment>
    // <>block of code</>
   <React.Fragment>
    {/* <LearningDisplay/> */}
    <div className='profileSection'>
      {/* name img email city */}
      <Profile name="Poonam" email={"poonam@gmail.com"} city={"Mumbai"}/>
      <Profile name="Honoto" email={"honoto@gmail.com"} city={"Shillong"}/>
      <Profile name="Alice" email={"alice89@gmail.com"}
      city="Phoenix, AR"/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
    </div>
   </React.Fragment>
  )
}

export default App

//Props >> Properties
//Profile() >> JS Function Call 

//Params >> Parameters >> image , name, email,city
// Cannot pass()
// Componenet >> like a attribute and value pair
//<Profile attribute ="value" >Content</Profile>
// <Profile attribute ="value"/>


// function test(){

// }
// test("javascript")

// function test2(){

// }
// test2()
// test("javascript")// i have passed an args inside test
