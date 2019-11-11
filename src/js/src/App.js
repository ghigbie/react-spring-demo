import React, { fragment, useState, useEffect }from 'react';
import './App.css';
import { getAllStudents } from './client';

import DisplayStudents from './DisplayStudents';

const App = () => {
  const [students, setStudents] = useState([]);
  const fetchStudents = () => {
    getAllStudents()
      .then(res => res.json()
      .then(students => {
        console.log(students);
        setStudents(students);
      }
      ));
  };
  useEffect(() => {
    fetchStudents();
  },[]);


  return (
    <div className="App">
      <DisplayStudents />
    </div>
  );
}

export default App;
