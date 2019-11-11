import React, { useState, useEffect }from 'react';
import './App.css';
import { getAllStudents } from './client';

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

      {students ? 
        students.map(student => (<div key={student.studentId}>{student.firstName} {student.lastName}</div>))
        :
        <div>Sorry, but no students could be found</div>
      }
    </div>
  );
}

export default App;
