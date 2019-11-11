import React from 'react';
import './App.css';
import { getAllStudents } from './client';

const App = () => {
  getAllStudents().then(res => res.json().then(students => {
    console.log(students) 
  }));
  return (
    <div className="App">
    </div>
  );
}

export default App;
