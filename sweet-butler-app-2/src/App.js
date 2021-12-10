import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['😠 Ugh.', '😠 Grr.']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    console.log("😠");
    setTodos([...todos, input])
  }

  return (
    <div className="App">
      <h1>Ugh. 😠</h1>
      <form>
        {/* Added form to enable Enter as submit. A much easier way than creating the keylogger...buuuuut...not as cool. :D */}
        <input value={input} onChange={event => setInput(event.target.value)} /><br />
        <button type="submit" onClick={addTodo}>Add To Do</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
