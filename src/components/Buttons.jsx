import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

function Buttons() {
  return (
    <Box >
      <Fab color="primary" aria-label="add" sx={{m: 1 }}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" sx={{m: 1 }}>
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        
      </Fab>
      <Fab disabled aria-label="like" sx={{m: 1 }}>
        <FavoriteIcon />
      </Fab>
    </Box>
  )
}

export default Buttons
