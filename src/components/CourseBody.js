// CourseBody.js
import React, { useContext, useEffect, useState } from 'react';
import userContext from "../context/userContext";
import { Button, Card, CardBody, CardFooter, CardText } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteCourseService } from '../services/CourseService';
import CourseBodySkeleton from '../components/CourseBodySkeleton';

function CourseBody({ course, onDeleteCourse }) {
    const object = useContext(userContext);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const cardStyle = {
        border: 'none',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif',
        color: 'white',
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        transition: 'transform 0.3s ease-in-out',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    };

    const buttonStyle = {
        marginRight: '10px',
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
        color: 'white',
    };

    const handleDownload = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = true;
        link.click();
    };

    const handleDeleteCourse = () => {
        if (course.id && object.user.data.role) {
            deleteCourseService(course.id, object.user.data.role)
                .then(data => {
                    toast.success("Course deleted");
                    onDeleteCourse(course.id); // Notify parent component to remove course from state
                    navigate("/user/courses");
                })
                .catch(error => {
                    console.error(error);
                    toast.error("Error deleting course");
                });
        } else {
            toast.error("You are not an admin");
            navigate("/");
        }
    };

    return (
        <Card
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='mt-2'
        >
            {isLoading ? (
                <CourseBodySkeleton />
            ) : (
                <CardBody>
                    <CardText>
                        <h1><i>Title:-</i>{course.title}</h1>
                    </CardText>
                    <CardText>
                        <h4>{course.link}</h4>
                    </CardText>
                    <CardFooter>
                        <Button
                            color='primary'
                            outline
                            style={buttonStyle}
                            onClick={(e) => {
                                e.preventDefault();
                                handleDownload(course.link);
                            }}
                        >
                            Download
                        </Button>
                        {object.user.data.role === "admin" && (
                            <>
                                <Button
                                    className='ms-4'
                                    color='danger'
                                    outline
                                    style={buttonStyle}
                                    onClick={handleDeleteCourse}
                                >
                                    Delete Course
                                </Button>
                                <Link to={`/user/updatecourse/${course.id}`}>
                                    <Button color='warning' outline className='ms-5'>Update Course</Button>
                                </Link>
                            </>
                        )}
                    </CardFooter>
                </CardBody>
            )}
        </Card>
    );
}

export default CourseBody;
