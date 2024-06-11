import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import Profile from './Profile/Profile';
const Nav = () => {



    const [state, setState] = React.useState({
        top: false,
        left: true,
        bottom: false,
        right: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
 const list = (anchor) => (
    <>
    <Box  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation"
       >
           <List>
               {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                   <ListItem key="{text}" disablePadding>
                       <ListItemButton>
                           <ListItemIcon>
                               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} 
                           </ListItemIcon>
                           <ListItemText primary={text} />
                       </ListItemButton>
                   </ListItem>
               ))} 
           </List>
           <Divider />
           <List>
               {['All mail', 'Trash', 'Spam'].map((text, index) => (
                   <ListItem key={text} disablePadding>
                       <ListItemButton>
                           <ListItemIcon>
                               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                           </ListItemIcon>
                           <ListItemText primary={text} />
                       </ListItemButton>
                   </ListItem>
           ))} 
           </List>

       </Box>
   </>
   )

    return (
        {['left', 'right', 'top', 'bottom'].map((anchor) =>
            (
             <React.Fragment key={anchor}>
               <Button onClick={toggleDrawer(anchor, false)}>{anchor}</Button>
               <Drawer
                 anchor={anchor}
                 open={state[anchor]}
                 onClose={toggleDrawer(anchor, true)}
               >
                 {list(anchor)}
               </Drawer>
               <Profile  />
             </React.Fragment>
           ))}
     
     
       
    )
}

export default Nav