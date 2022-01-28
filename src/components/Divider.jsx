import React from 'react'
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
    width: '50%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  export default function DividerText() {
    const content = (
        <Typography variant='h4'>
          {`This compo can be used in any type of box or divs and comtomsible for anyone and from anywhere in the page itself.`}
        </Typography>
      );
  return (
      <Box sx={{
        display:'flex',
        justifyContent:'center'
    }}>
        <Root>
        <Divider>
            <Chip label="You should Know" />
        </Divider>
        {content}
        </Root>
    </Box>
  )
}


