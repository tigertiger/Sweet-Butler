// import * as React from 'react';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// function Questions() {
//   return (
//     <div>
//       <h3>Should we keep it stress free?</h3>
//       <FormGroup>
//         <FormControlLabel control={<Checkbox />} label="Yes, please" id="stressFree" />
//         <FormControlLabel control={<Checkbox />} label="Nah, show me everything" id="everything" />
//       </FormGroup>
//     </div>
//   )
// }

// export default Questions


import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button, Modal, FormControl, Input, InputLabel, FormGroup, FormControlLabel, Checkbox, Slider, Box } from '@material-ui/core';
import db from './../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import TimeSlider from './TimeSlider';
import EnergySlider from './EnergySlider';
import Todo from './../components/Todo';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: '8% auto 0',
  },
}));

function Questions(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(false);
  // could use this instead placeholder={props.todo.todo} 

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // The user clicks "I'm feeling..." & pops up a modal which asks them the following: 
  // "Should we keep it stress free?"
  // This is a checkbox which determines which collections are accessed -> stressful & unstressful or just unstressful
  // Might want to split functionality right here?? Depends on how querying ends up working
  // "How much time do you have?" | "What's your energy level?" | Are you willing to leave the house?
  // These are sliders?? or just fields [& a checkbox?] which filter items from the appropriate collection/s by time
  // The user hits "Buttle Me Up Something to Do" [lol, or something else]
  // Modal closes and view changes to filtered ButlerControl list


  return (
    <>
      <Modal
        open={open}
        // onClose={handleClose}
        onClose={e => setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>How's it Going?</h1>
          <div>
            <FormGroup>
            <h3>Should we keep it stress free?</h3>
              <FormControlLabel control={<Checkbox />} label="Yes, please" id="stressFree" />
              <FormControlLabel control={<Checkbox />} label="Nah, show me everything" id="everything" />
            </FormGroup>
            <FormGroup>
              <h3>How much time do you have?</h3>
              <TimeSlider />
            </FormGroup>
            <FormGroup>
              <h3>What's your energy level like?</h3>
              <EnergySlider />
            </FormGroup>
            <FormGroup>
            <h3>Are you willing to leave the house?</h3>
              <FormControlLabel control={<Checkbox />} label="Shoor" id="leaveHouse" />
              <FormControlLabel control={<Checkbox />} label="No, please" id="stayIn" />
            </FormGroup>
            <Button>Buttle Me Up Some Things To Do</Button>
          </div>
          {/* <FormControl>
            <Input value ={input} onChange={event => setInput(event.target.value)} />
          </FormControl>
          <Button onClick={updateTodo}>Update To Do</Button> */}
        </div>
      </Modal>

      <Button onClick={e => setOpen(true)}>I'm Feeling...</Button>

    </>
  )
}

export default Questions
