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

    const columns = [
        {
            title: 'Student ID',
            dataIndex: 'studentId',
            key: 'studentId',
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
    ];

    return (
        <Fragment>
            {students && students.length ?
                (<Table 
                    dataSource={students} 
                    columns={columns} 
                />)
                :
                (<div>Sorry, but no students could be found</div>)
            }
        </Fragment>
    );
}

export default DisplayStudents;
