import React, { useState } from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';

function App() {

  const [todos, setTodos] = useState(['😠 Ugh.', '😠 Grr.']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    console.log("😠");
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Ugh. 😠</h1>
      <FormControl>
        {/* Added form to enable Enter as submit. A much easier way than creating the keylogger...buuuuut...not as cool. :D */}
        <InputLabel>🎩 How Can I Help?</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} /><br />
        <Button disabled={!input} variant="outlined" color="#000" type="submit" onClick={addTodo}>Add To Do</Button>
      </FormControl>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
