import React, { Fragment, useState, useEffect } from 'react';
import { getAllStudents } from './client';

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
            {students ?
                students.map(student => (
                    <div key={student.studentId}>{student.firstName} {student.lastName}
                    </div>))
                :
                <div>Sorry, but no students could be found</div>
            }
        </Fragment>
    );
}

export default DisplayStudents;
