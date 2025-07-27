import './App.css'
import NavBar from './components/NavBar'
import CardTest from './components/CardTest'
import { Box, Container } from '@mui/material'
import Test from './components/Test'


function App() {  
    
   
  return (
    <>
     <NavBar />   
    <Test/>
    <Container sx={{mt:2}}>
      
      <Box sx={{display :"flex",gap:2,flexWrap: 'wrap'}} >
        {Array(15).fill(<CardTest/>)}
      </Box>
      </Container>
    </>
  
  )
}

export default App