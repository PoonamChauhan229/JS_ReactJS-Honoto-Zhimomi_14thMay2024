import './App.css'
import React from 'react'

import LearningDisplay from './Components/LearningDisplay'
import ProfileSection from './Components/ProfileSEction'
import ChatSection from './Components/ChatSection'
import { HomePage } from './Components/HomePage'
function App() {

  return (
    // React Fragment >> React.Fragment
    //<React.Fragment>block of code </React.Fragment>
    // <>block of code</>
   <React.Fragment>
    {/* <LearningDisplay/> */}
    {/* <ProfileSection/> */}
    {/* <ChatSection/> */}
    <HomePage/>
    
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
