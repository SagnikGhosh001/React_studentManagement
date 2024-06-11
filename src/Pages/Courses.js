import React from 'react';
import Base from '../components/Base';
import GetAllCourses from '../components/GetAllCourses';
import { Container } from 'reactstrap';
import backgroundImg from "../resource/courseback.jpg";

const Courses = () => {
    return (
        <Base>
            <div style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
                padding: '20px',
                color: 'white' 
            }}>
                <Container>
                    
                    <GetAllCourses />
                </Container>
            </div>
        </Base>
    );
}

export default Courses;
