import React, { useContext, useEffect, useState } from 'react';
import { loadAllCourse } from '../services/CourseService';
import { Button, Col, Form, Input, InputGroup, Row } from 'reactstrap';
import CourseBody from './CourseBody';
import userContext from '../context/userContext';
import { Link } from 'react-router-dom';

function GetAllCourses() {
    const [search, setSearch] = useState('');
    const object = useContext(userContext);
    const [courseContent, setCourseContent] = useState(null);

    useEffect(() => {
        loadAllCourse()
            .then((data) => {
                console.log(data);
                setCourseContent(data);
            })
            .catch(error => {
                console.error("Error occurred:", error);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>

            <Row>
                <Col md={{ size: 10, offset: 1 }}>
                    <h1><i style={{ fontFamily: 'Arial, sans-serif', color: 'darkblue', fontWeight: 'bold', color: 'white' }}>Course Count {courseContent?.length}</i></h1>
                    {object.user.data.role === "admin" && (
                        <>
                            <Link to="/user/addcourse"><Button color='light' size="lg" outline className='mb-3'>Add Course</Button></Link>
                        </>
                    )}
                    <Form>
                        <InputGroup className='my-3'>
                            <Input
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search here"
                                style={{
                                    borderRadius: '20px',
                                    padding: '10px',
                                    width: '100%', 
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
                                }}
                            />
                        </InputGroup>
                    </Form>
                    {courseContent?.filter((course) => {
                        return search.toLowerCase() === '' ? course : course.title.toLowerCase().includes(search);
                    }).map((course) => (
                        <CourseBody course={course} key={course.id} />
                    ))}
                </Col>
            </Row>
        </div>
    );
}

export default GetAllCourses;
