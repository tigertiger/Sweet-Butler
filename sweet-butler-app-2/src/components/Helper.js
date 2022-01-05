import React, { useState, useEffect } from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, InputLabel, Input, FormGroup} from '@material-ui/core';
import Todo from './../components/Todo';
import db from './../firebase';
import firebase from 'firebase';

function Helper() {

  const [todos, setTodos] = useState([]);
  const [object, setObject] = useState('');
  const [stress, setStress] = useState(false);
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
    })

    setTodos([...todos, object, stress, time, energy, location]);
    setObject('');
  }

  const onLocChange = (event) => {
    setLocation(event.target.value)
  }

  const isHome = location === 'home';

  const onStressChange = (event) => {
    setStress(event.target.value)
  }

  const isStress = stress === 'stress';

  return (
    <div className="ButlerControl">
      <form>
        <FormControl>
          {/* Added form to enable Enter as submit. A much easier way than creating the keylogger...buuuuut...not as cool. :D */}
          <InputLabel>🎩 How Can I Help?</InputLabel>
          <Input value={object} onChange={event => setObject(event.target.value)} /><br />
<FormGroup>
          <div>Is this Stressful?</div>
          <FormControlLabel control={<Checkbox size="small" value={'stress'} onChange={onStressChange} checked={isStress} />} label="Yes" />
          </FormGroup>
          <FormGroup>
          <FormControlLabel control={<Checkbox size="small" value={'noStress'} onChange={onStressChange} checked={!isStress} />} label="Nope" /><br />
          </FormGroup>

          <div>How Much Time Does This Take?</div>
          <Input label="How Much Time Does This Take?" type="number" value={time} onChange={event => setTime(event.target.value)} /><br />
          <div>How Much Energy Does This Take?</div>
          <Input type="number" value={energy} onChange={event => setEnergy(event.target.value)} /><br />
          <div>Where does this happen?</div>
          {/* <FormControlLabel control={<Checkbox value={home} onChange={(e) => setHome(0)} />} label="Home" /><br />
          <FormControlLabel control={<Checkbox value={home} onChange={(e) => setHome(1)} />} label="Out" /><br /> */}
          <FormGroup>
          <FormControlLabel control={<Checkbox value={'home'} onChange={onLocChange} checked={isHome} />} label="Home" />
          </FormGroup>
          <FormGroup>
          <FormControlLabel control={<Checkbox value={'out'} onChange={onLocChange} checked={!isHome} />} label="Out" /><br />
          </FormGroup>
        </FormControl><br />
        <Button disabled={!object} variant="outlined" color="default" type="submit" onClick={addTodo}>Add To Do</Button>
      </form>
    </div>
  );
}

export default Helper;
