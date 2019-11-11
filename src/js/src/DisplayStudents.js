import React, { Fragment, useState, useEffect } from 'react';
import { getAllStudents } from './client';
import { 
    Table
} from 'antd';

const DisplayStudents = () => {
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
    }, []);

    return (
        <Fragment>
            {students && students.length ?
                students.map(student => (
                    <div key={student.studentId}>
                        <h2> {student.studentId }</h2>
                        <p>{ student.firstName }</p>
                        <p>{ student.lastName }</p>
                        <p>{ student.gender }</p>
                        <p>{ student.email }</p>
                    </div>))
                :
                <div>Sorry, but no students could be found</div>
            }
        </Fragment>
    );
}

export default DisplayStudents;
