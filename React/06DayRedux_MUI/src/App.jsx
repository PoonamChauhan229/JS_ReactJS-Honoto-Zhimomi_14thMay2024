import './App.css'
import NavBar from './components/NavBar'
import CardTest from './components/CardTest'
import { Box, Container } from '@mui/material'


function App() {  
    
   
  return (
    <>
     <NavBar />   
    
    <Container sx={{mt:2}}>
      
      <Box sx={{display :"flex",gap:2,flexWrap: 'wrap'}} >
        {Array(15).fill(<CardTest/>)}
      </Box>
      </Container>
    </>
  
  )
}

export default App