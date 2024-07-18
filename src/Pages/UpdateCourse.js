import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Base from '../components/Base';
import { courseById, updateCourseService } from '../services/CourseService';
import userContext from '../context/userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardHeader, Col, Container, Form, FormGroup, Label, Row, CardBody, Input, Button } from 'reactstrap';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component
import backgroundImg from "../resource/updateprofile1.jpg";

function UpdateCourse() {
    const object = useContext(userContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: '',
        link: '',
    });
   

    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false); // State to manage update operation loading
    const [loadingPage, setLoadingPage] = useState(true); // State to manage page loading

    useEffect(() => {
        if (object.user.data.role === "admin") {
            courseById(id)
                .then(courseData => {

                    setData({ ...courseData });
                 
                    setLoading(false);
                    
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                })
                .finally(() => {
                    setLoadingPage(false); // Set loadingPage to false after fetching data
                });
        } else {
            toast.error("You are not authorized to update this course.");
            navigate("/");
        }
    }, [id, object.user.data.role, navigate]);





    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });

    };


    
    const resetData = () => {
        setData({
            title: '',
            link: '',
        });
    };

    const update = (event) => {
        event.preventDefault();

        if (object.user.data.role === "admin") {
            setUpdating(true); // Start update loading
            updateCourseService(id, object.user.data.role, { ...data })
                .then((resp) => {
                    toast.success("Course updated!!");
                    resetData();
                    navigate("/user/courses");
                })
                .catch((error) => {
                    console.error(error);
                    toast.error("Failed to update course.");
                })
                .finally(() => {
                    setUpdating(false); // End update loading
                });
        } else {
            toast.error("You are not authorized to update this course.");
            navigate("/");
        }
    };

    const updateHtml = () => {
        return (

            <div
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                }}
            >

                <Container>
                    <Row className="mt-4">
                        <Col sm={{ size: 6, offset: 3 }}>
                            <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', fontWeight: 'bold' }}>
                                <CardHeader>
                                    <h1><u><i><center>Update</center></i></u></h1>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={update}>
                                        <FormGroup>
                                            <Label for="title" style={{ fontSize: '1.25rem' }}>Title:</Label>
                                            <Input
                                                type="text"
                                                id="title"
                                                placeholder="Enter Title"
                                                required
                                                onChange={(e) => handleChange(e, 'title')}
                                                value={data.title}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="link" style={{ fontSize: '1.25rem' }}>Link:</Label>
                                            <Input
                                                type="text"
                                                id="link"
                                                placeholder="Enter Link"
                                                required
                                                onChange={(e) => handleChange(e, 'link')}
                                                value={data.link}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                            />
                                        </FormGroup>
                                        <Container className="text-center">
                                            {updating ? (
                                                <Spinner animation="border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                            ) : (
                                                <>
                                                    <Button outline color="primary">Update</Button>
                                                    <Button outline color="danger" className="ms-2" type="reset" onClick={resetData}>Reset</Button>
                                                </>
                                            )}
                                        </Container>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

    return (
        <Base>
            <Row>
                <Col>
                    {loadingPage ? (
                        <div style={{
                            backgroundImage: `url(${backgroundImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <div>{updateHtml()}</div>
                    )}
                </Col>
            </Row>
        </Base>
    );
}

export default UpdateCourse;
