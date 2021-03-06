
import React, {useState} from 'react';
import {List, ListItem, ListItemText, Button, Modal, FormControl, Input, InputLabel} from '@material-ui/core';
import db from './../firebase';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position:'absolute',
    top: '30%',
    left: '30%',
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
  const [input, setInput] = useState(props.todo.todo);
  // could use this instead placeholder={props.todo.todo} 

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const updateTodo = () => {

    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, {merge: true});

    setOpen(false);
  }

  return (
    <>
    <Modal
      open={open}
      // onClose={handleClose}
      onClose={e => setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>Edit Action</h1>
          <FormControl>
            <Input value ={input} onChange={event => setInput(event.target.value)} />
          </FormControl>
          <Button onClick={updateTodo}>Update To Do</Button>
        </div>
      </Modal>

    <List>
      <ListItem
      style={{width:400}}>
        {/* <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar> */}
        <ListItemText primary={props.todo.todo} secondary="🍃 Details" />
      <Button onClick={e => setOpen(true)}>Edit</Button>
      <RemoveCircleOutlineOutlinedIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
      </ListItem>
    </List>
    </>
  )
}

export default Todo