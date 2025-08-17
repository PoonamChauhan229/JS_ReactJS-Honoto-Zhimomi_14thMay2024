import './App.css'
import NavBar from './components/Pages/NavBar'
import { Container } from '@mui/material'
import Test from './components/Pages/Test'
import BoxCard from './components/Pages/BoxCard'
import ActionCard from './components/Pages/ActionCard'
import ActionDisplay from './components/Pages/ActionDisplay'
import CartPage from './components/Pages/CartPage'

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


<CartPage/>
    </>
  
  )
}

export default App