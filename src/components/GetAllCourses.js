import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Input, InputGroup, Row, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import CourseBody from './CourseBody';
import userContext from '../context/userContext';
import { loadAllCourse } from '../services/CourseService';

function GetAllCourses() {
    const [search, setSearch] = useState('');
    const object = useContext(userContext);
    const [courseContent, setCourseContent] = useState(null);
    const [loading, setLoading] = useState(true); // Step 1: Introduce loading state

    useEffect(() => {
        setLoading(true); // Set loading to true when fetching data starts
        loadAllCourse()
            .then((data) => {
                console.log(data);
                setCourseContent(data);
            })
            .catch(error => {
                console.error("Error occurred:", error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when data fetching completes
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
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
                                }}
                            />
                        </InputGroup>
                    </Form>
                    {loading ? ( // Step 2: Display spinner conditionally based on loading state
                        <div className="text-center my-5">
                            <Spinner color="primary" />
                            <p>Loading courses...</p>
                        </div>
                    ) : (
                        courseContent?.filter((course) => {
                            return search.toLowerCase() === '' ? true : course.title.toLowerCase().includes(search);
                        }).map((course) => (
                            <CourseBody course={course} key={course.id} />
                        ))
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default GetAllCourses;
