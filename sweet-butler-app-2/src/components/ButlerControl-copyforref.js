// import React, { useState, useEffect } from 'react';
// import './../App.css'
// import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, Input } from '@material-ui/core';
// import Todo from './../components/Todo';
// import db from './../firebase';
// import firebase from 'firebase/compat/app';
import Query from './../components/Query';
// import "firebase/firestore";
import React, { useState, useEffect } from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, InputLabel, Input} from '@material-ui/core';
import Todo from './../components/Todo';
import db from './../firebase';
import firebase from 'firebase';

function ButlerControl() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo, key: doc.id })))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      // stressful: 
    })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="ButlerControl">
      <h1>Ugh. 😠</h1>
      <form>
        <FormControl>
          {/* Added form to enable Enter as submit. A much easier way than creating the keylogger...buuuuut...not as cool. :D */}
          <InputLabel>🎩 How Can I Help?</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} /><br />
          <FormControlLabel control={<Checkbox />} label="Is this Stressful?" /><br />
        </FormControl><br />
        <Button disabled={!input} variant="outlined" color="default" type="submit" onClick={addTodo}>Add To Do</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}
            key={todo.id} />
        ))}
      </ul>
      <Query />
    </div>
  );
}

export default ButlerControl;
