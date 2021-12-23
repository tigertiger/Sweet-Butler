// import React from 'react'
// import Todo from './../components/Todo';
// import db from './../firebase';
// import firebase from 'firebase';

// function Query() {

//   const [todos, setTodos] = useState([]);

//   db.collection('todos').where('location', '===', 'home').onSnapshot(querySnapshot) => {
//     const items = [];
//     querySnapshot.forEach((doc) => {
//       items.push(doc.data());
//     });
//     setTodos(items);
//   }
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Query

// ----------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import './../App.css'
// import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, Input } from '@material-ui/core';
// import Todo from './../components/Todo';
// import db from './../firebase';
// import firebase from 'firebase/compat/app';
// import "firebase/firestore";
import React, { useState, useEffect } from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, InputLabel, Input, FormGroup} from '@material-ui/core';
import Todo from './../components/Todo';
import db from './../firebase';
import firebase from 'firebase';

function Query() {

  const [todos, setTodos] = useState([]);
  const locFilter = "home";
  const stressFilter = "noStress";
  const timeFilter = 10;
  const energyFilter = 10;

  useEffect(() => {
    db.collection('todos')
      .orderBy("time", "timestamp", "desc")
      .where("location", "==", locFilter)
      .where("stress", "==", stressFilter)
      .where("time", "<=", timeFilter)
      // .where("energy", "<=", energyFilter)
      .onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo, key: doc.id })))
    })
  }, []);
    
    
    return (
      <div className="query">
      <h1>Query. 😠</h1>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}
          key={todo.id} />
          ))}
      </ul>
    </div>
  );
}

export default Query;
