import React from 'react';
import {List, ListItem, ListItemText, Button} from '@material-ui/core';
import db from './../firebase';

function Todo(props) {

  return (
    <List>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar> */}
        <ListItemText primary={props.todo} secondary="⏱️ Dummy Deadline" />
      </ListItem>
      <Button onClick={event =>
        db.collection('todos').doc(props.todo.id).delete()
        } >😢 Delete Me</Button>
    </List>
  )
}

export default Todo


