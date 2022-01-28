import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (right, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [right]: open });
  };

  const list = (right) => (
    <Box
      sx={{ width: right === 'top' || right === 'bottom' ? 'auto' : 250, bgcolor:'#f48fb1'}}
      role="presentation"
      onClick={toggleDrawer(right, false)}
      onKeyDown={toggleDrawer(right, false)}
    >
      <List>
        {['Nigga1', 'Nigga2', 'Nigga3', 'Nigga4'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['side_bar'].map((right) => (
        <React.Fragment key={right}>
          <Button onClick={toggleDrawer(right, true)}>{right}</Button>
          <Drawer
            anchor={right}
            open={state[right]}
            onClose={toggleDrawer(right, false)}
          >
            {list(right)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
