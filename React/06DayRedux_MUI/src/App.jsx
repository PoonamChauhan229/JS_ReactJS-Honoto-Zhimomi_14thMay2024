import './App.css'
import NavBar from './components/Pages/NavBar'
import { Container } from '@mui/material'
import Test from './components/Pages/Test'
import BoxCard from './components/Pages/BoxCard'
import ActionCard from './components/Pages/ActionCard'
import ActionDisplay from './components/Pages/ActionDisplay'

function App() {  
    
   
  return (
    <>
     <NavBar />   
    <Test/>
    {/* State */}
    <Container sx={{mt:2}}>
      {/* <BoxCard/>       */}
    </Container>

    {/* Action */}
    <Container>
      <ActionDisplay/>
    </Container>

    </>
  
  )
}

export default App