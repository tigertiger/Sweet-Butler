import React, { useState, useEffect } from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, Input, FormGroup } from '@material-ui/core';
import Todo from './../components/Todo';
import db from './../firebase';
import firebase from 'firebase';
import Grid from "@material-ui/core/Grid";

function Lists() {

  const [todos, setTodos] = useState([]);
  const [object, setObject] = useState('');
  const [stress, setStress] = useState('');
  const [time, setTime] = useState('');
  const [energy, setEnergy] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo, key: doc.id })))
    })
  }, []);

  return (
    <>
      <h1 className="mainTitle">Sweet Butler</h1>
      <Grid container justify="flex-middle" id="cabinetGrid">
        <div className="listHolder">
          <ul>
            {todos.map(todo => (
              <Todo todo={todo}
                key={todo.id} />
            ))}
          </ul>
        </div>
        {/* <Query /> */}
      </Grid>
    </>
  );
}

export default Lists;