import React, { useState, useEffect } from 'react';
import { getAllStudents } from './client';
import { 
    Table,
    Avatar,
    Spin,
    Icon
} from 'antd';

import Container from './Container';

const DisplayStudents = () => {
    const [students, setStudents] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const fetchStudents = () => {
        setIsFetching(true);
        getAllStudents()
            .then(res => res.json()
                .then(students => {
                    console.log(students);
                    setStudents(students);
                    setIsFetching(false);
                }
                ));
    };
    useEffect(() => {
        fetchStudents();
    }, []);

    const getIndicatorIcon = () => (<Icon type="loading" style={{fontSize: 24}} />);
    const columns = [
        {
            title: '',
            key: 'avatar',
            render: (text, student) => (
                <Avatar size='large'>
                    {
                        `${student.firstName.charAt(0).toUpperCase()} 
                         ${student.lastName.charAt(0).toUpperCase()}`
                    }
                </Avatar>
            )
        },
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

    if(isFetching){ 
        return (
            <Container>
                <Spin indicator={getIndicatorIcon()}/>
            </Container>
        );
    }

    return (
        <Container>
                {students && students.length ?
                    (<Table 
                        dataSource={students} 
                        columns={columns} 
                        pagination={false}
                    />)
                    :
                    (<div>Sorry, but no students could be found</div>)
                }
        </Container>
    );
}

export default DisplayStudents;
