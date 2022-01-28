import { Typography } from '@mui/material';
import * as React from 'react';
function Home (){
    return (
        <div>
            <Typography  variant='h3' sx={{
                display:'flex',
                justifyContent: 'center',
                fontWeight: 'bold' 

            }} >
                Welcome to the Premium Services
            </Typography>
        </div>
    )
}
export default Home