
import React, {useState} from 'react';
import {List, ListItem, ListItemText, Button, Modal} from '@material-ui/core';
import db from './../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position:'absolute',
    width:400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
  },
}));

function Todo(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
    <Modal
      open={open}
      // onClose={handleClose}
      onClose={e => setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <button onClick={e => setOpen(false)}>Close</button>
        </div>
      </Modal>

    <List>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar> */}
        <ListItemText primary={props.todo.todo} secondary="⏱️ Dummy Deadline" />
      </ListItem>
      <button onClick={e => setOpen(true)}>Edit</button>
      <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
    </List>
    </>
  )
}

export default Todo