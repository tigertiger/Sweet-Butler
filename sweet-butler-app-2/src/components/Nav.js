// import * as React from 'react';
// import { Link } from "react-router-dom";

// function Nav(){
//   return (
//     <div>

//       <Link to='/login'>Log In</Link>
//       <Link to='/register'>Sign Up</Link>

//     </div>
//   );
// }

// export default Nav;

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
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles, withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";

export default function TemporaryDrawer() {

  const useStyles = makeStyles({
    paper: {
      background: "#d9e4f541",
    },
  });

  const classes = useStyles();


  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className={classes.paper}
      sx={{ width: 250, height: 700 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Log In', 'Log Out'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <LoginIcon /> : <LogoutIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Placeholder', '& Testing', 'Etc.'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <BedtimeIcon /> : <AutoAwesomeIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Grid container justifyContent="flex-end">
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
          </Grid>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}