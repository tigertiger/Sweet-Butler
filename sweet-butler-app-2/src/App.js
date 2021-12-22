import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './components/Todo';
import db from './firebase';
import firebase from 'firebase';
import ButlerControl from './components/ButlerControl';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from './components/Form';
import Nav from './components/Nav';
import Welcome from './pages/Welcome';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleAction = (id) => {
    console.log(id)
  }

  return (
    <Router>
      <div className="App">
      <Nav />
        <Switch>
          <Route
            exact path='/login'>
            <Form title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)} /></Route>

          <Route
            exact path='/register'>
            <Form title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)} /></Route>

          <Route exact path='/'>
            <Welcome />
          </Route>

          <Route><>404. Go Somewhere Else. 😠</></Route>


        </Switch>
        {/* <ButlerControl /> */}
      </div>
    </Router>
  );
}

export default App;
