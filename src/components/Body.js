import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {createTheme} from '@material-ui/core'
import Buttons from './Buttons';

const theme = createTheme ({
  palette:{
    background:{
      paper: '#f48fb1'
    }
   
  },
  shape:{
    borderRadius: '60px'
  }
})


function Body() {
  return (
    <div>
      
      <Box color='primary' sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'center',
        '& > :not(style)': {
          m: 4,
          width: 340,
          height: 340,
        },
      }}
    >
     <Paper elevation={24} theme ={theme}
     sx={{
      display:'flex',
      justifyContent: 'center',
      alignItems:'center'
    }} >
       <Buttons
       
       ></Buttons>
      
        
      </Paper>
      <Paper elevation={24} theme ={theme}/>
    </Box>
    </div>
  )
}

export default Body
