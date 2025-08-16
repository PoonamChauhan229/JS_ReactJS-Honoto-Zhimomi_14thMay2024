import React from 'react'
import { Box } from '@mui/material'
import CardTest from './CardTest'

const BoxCard = () => {
  return (
    <div>
        <h1>State Value in Redux</h1>
        <Box sx={{display :"flex",gap:2,flexWrap: 'wrap'}} >
         {Array(15).fill(<CardTest/>)}
      </Box>
    </div>
  )
}

export default BoxCard