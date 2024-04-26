import React, { useContext, useEffect, useState } from 'react'
import { loadAllCourse } from '../services/CourseService'
import { Button, Col, Row } from 'reactstrap'
import CourseBody from './CourseBody'
import userContext from '../context/userContext'
import { Link } from 'react-router-dom'

function GetAllCourses() {
    const object = useContext(userContext);
    const [courseContent, setCourseContent] = useState(null);

    useEffect(() => {
        loadAllCourse()
            .then((data) => {
                console.log(data);
                setCourseContent(data);
            })
            .catch(error => {
                console.error("Error occurred:", error); // Log the actual error object
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Row>
                <Col md={{ size: 10, offset: 1 }}>
                    <h1><i style={{ fontFamily: 'Arial, sans-serif',color:'darkblue', fontWeight:'bold' }}>Course Count {courseContent?.length}</i></h1>
                    {object.user.data.role === "admin" && (
                        <>
                            <Link to="/user/addcourse" ><Button color='success'size="lg" outline className='mb-3'>Add Course</Button></Link>
                            
                        </>
                    )}

                    {courseContent?.map((course) => (
                        <CourseBody course={course} key={course.id} />
                    ))}
                    
                </Col>
            </Row>
        </div>
    );
}

export default GetAllCourses;
