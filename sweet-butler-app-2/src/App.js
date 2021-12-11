import React, { useState, useEffect } from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Todo from './components/Todo';
import db from './firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    console.log("😠");
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Ugh. 😠</h1>
      <form>
      <FormControl>
        {/* Added form to enable Enter as submit. A much easier way than creating the keylogger...buuuuut...not as cool. :D */}
        <InputLabel>🎩 How Can I Help?</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} /><br />
      </FormControl>
        <Button disabled={!input} variant="outlined" color="#000" type="submit" onClick={addTodo}>Add To Do</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
