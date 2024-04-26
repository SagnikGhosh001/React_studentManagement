import React from 'react';
import Base from '../components/Base';
import GetAllCourses from '../components/GetAllCourses.';
import { Container } from 'reactstrap';
import backgroundImg from "../resource/Home.jpg";
const Courses = () => {
    return (
        <Base>
        <div>
            <Container className="mt-3">
                <GetAllCourses />
            </Container>
            
        </div>
        </Base>
    );
}

export default Courses;
