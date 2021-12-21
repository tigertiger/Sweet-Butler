import React, { useState, useEffect } from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Todo from './components/Todo';
import db from './firebase';
import firebase from 'firebase';
import ButlerControl from './components/ButlerControl';

function App() {

  return (
    <div className="App">
      <ButlerControl />
    </div>
  );
}

export default App;
