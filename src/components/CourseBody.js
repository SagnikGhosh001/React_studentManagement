import React, { useContext, useEffect, useState } from 'react';
import userContext from "../context/userContext";
import { Button, Card, CardBody, CardFooter, CardText } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteCourseService } from '../services/CourseService';
import CourseBodySkeleton from '../components/CourseBodySkeleton';
import { Tilt } from 'react-tilt'
function CourseBody({ course, onDeleteCourse }) {
    const object = useContext(userContext);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const handleDownload = (url) => {
        window.open(url, '_blank');
    };

    const handleDeleteCourse = () => {
        if (course.id && object.user.data.role) {
            setDeleting(true);
            deleteCourseService(course.id, object.user.data.role)
                .then(data => {
                    toast.success("Course deleted");
                    onDeleteCourse(course.id);
                    navigate("/user/courses");

                })
                .catch(error => {
                    console.error(error);
                    toast.error("Error deleting course");
                })
                .finally(() => {
                    setTimeout(() => {
                        setDeleting(false);
                    }, 300); // Adjust the delay as needed
                });
        } else {
            toast.error("You are not an admin");
            navigate("/");
        }
    };
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <Tilt options={defaultOptions}>
        <Card
            style={{
                border: 'none',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                fontFamily: 'Arial, sans-serif',
                color: 'white',
                backgroundColor: 'transparent',
                backgroundSize: 'cover',
                transition: 'transform 0.3s ease-in-out',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                filter: deleting ? 'blur(1px)' : 'none',
                opacity: deleting ? 0.5 : 1,
            }}
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
                            style={{ marginRight: '10px', transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out', color: 'white' }}
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
                                    style={{ marginRight: '10px', transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out', color: 'white' }}
                                    onClick={handleDeleteCourse}
                                    disabled={deleting}
                                >
                                    {deleting ? 'Deleting...' : 'Delete Course'}
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
        </Tilt>
    );
}

export default CourseBody;
