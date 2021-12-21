import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './components/Todo';
import db from './firebase';
import firebase from 'firebase';
import ButlerControl from './components/ButlerControl';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './components/Form';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleAction = (id) => {
    console.log(id)
  }

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route 
            path='/login' 
            element={
            <Form title="Login"
            setEmail={setEmail}
            setPassword={setPassword}
            handleAction={() => handleAction(1)} />} 
            />

            <Route 
            path='/register' 
            element={
            <Form 
            title="Register"
            setEmail={setEmail}
            setPassword={setPassword}
            handleAction={() => handleAction(2)} />} 
            />

          </Routes>
        <ButlerControl />
      </div>
    </Router>
  );
}

export default App;
