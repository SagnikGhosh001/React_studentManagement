import React from 'react';
import Base from '../components/Base';
import GetAllCourses from '../components/GetAllCourses.';
import { Container } from 'reactstrap';
import backgroundImg from "../resource/Home.jpg";

const Courses = () => {
    return (
        <Base>
            <div style={{ backgroundColor: '#1BFFFF', minHeight: '100vh' }}>
                <Container>
                    <GetAllCourses />
                </Container>
            </div>
        </Base>
    );
}

export default Courses;
