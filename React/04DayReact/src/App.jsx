import './App.css'
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import Delete from './Components/Delete'
import {Routes,Route} from 'react-router-dom'
import Edit from './Components/Edit'


function App() {  
  return (
    <>
      <Create/> 
      <Read/>
      <Routes>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
     
    </>
  )
}

export default App



