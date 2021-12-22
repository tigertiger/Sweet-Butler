// import React, { useState, useEffect } from 'react';
// import './../App.css'
// import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, Input } from '@material-ui/core';
// import Todo from './../components/Todo';
// import db from './../firebase';
// import firebase from 'firebase/compat/app';
import Query from './../components/Query';
// import "firebase/firestore";
import React, { useState, useEffect } from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, InputLabel, Input, FormGroup} from '@material-ui/core';
import Todo from './../components/Todo';
import db from './../firebase';
import firebase from 'firebase';

function ButlerControl() {

  const [todos, setTodos] = useState([]);
  const [object, setObject] = useState('');
  const [stress, setStress] = useState('');
  const [time, setTime] = useState('');
  const [energy, setEnergy] = useState('');
  const [location, setLocation] = useState ('');

  useEffect(() => {
    db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo, key: doc.id })))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: object,
      stressful: stress,
      duration: time,
      energy: energy,
      location: location,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      // stressful: 
    })

    setTodos([...todos, object, stress, time, energy, location]);
    setObject('');
  }

  const onLocChange = (event) => {
    setLocation(event.target.value)
  }

  const isHome = location === 'home';

  return (
    <div className="ButlerControl">
      <h1>Ugh. 😠</h1>
      <form>
        <FormControl>
          {/* Added form to enable Enter as submit. A much easier way than creating the keylogger...buuuuut...not as cool. :D */}
          <InputLabel>🎩 How Can I Help?</InputLabel>
          <Input value={object} onChange={event => setObject(event.target.value)} /><br />
          <FormControlLabel control={<Checkbox value={stress} onChange={(e) => setStress(e.target.value)} />} label="Is this Stressful?" /><br />
          <div>How Much Time Does This Take?</div>
          <Input label="How Much Time Does This Take?" type="number" value={time} onChange={event => setTime(event.target.value)} /><br />
          <div>How Much Energy Does This Take?</div>
          <Input type="number" value={energy} onChange={event => setEnergy(event.target.value)} /><br />
          <div>Where does this happen?</div>
          {/* <FormControlLabel control={<Checkbox value={home} onChange={(e) => setHome(0)} />} label="Home" /><br />
          <FormControlLabel control={<Checkbox value={home} onChange={(e) => setHome(1)} />} label="Out" /><br /> */}
          <FormControlLabel control={<Checkbox value={'home'} onChange={onLocChange} checked={isHome} />} label="Home" /><br />
          <FormControlLabel control={<Checkbox value={'out'} onChange={onLocChange} checked={!isHome} />} label="Out" /><br />
        </FormControl><br />
        <Button disabled={!object} variant="outlined" color="default" type="submit" onClick={addTodo}>Add To Do</Button>
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
