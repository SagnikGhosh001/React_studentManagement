import React, { useContext, useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row, FormFeedback } from "reactstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Base from '../components/Base';
import userContext from '../context/userContext';
import { addCourseService } from '../services/CourseService';
import backgroundImg from "../resource/updateprofile1.jpg";
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component

function AddCourse() {
    const object = useContext(userContext);
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: '',
        link: '',
    });

    const [validity, setValidity] = useState({
        title: true,
        link: true,
    });

    const [submitting, setSubmitting] = useState(false); // State to manage submission loading
    const [loading, setLoading] = useState(true); // State to manage component loading

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000); 

        return () => clearTimeout(timeout);
    }, []);

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    const resetData = () => {
        setData({
            title: '',
            link: '',
        });
        setValidity({
            title: true,
            link: true,
        });
    };

    const validateForm = () => {
        let isValid = true;
        const updatedValidity = { ...validity };

        if (data.title.trim() === '') {
            updatedValidity.title = false;
            isValid = false;
        } else {
            updatedValidity.title = true;
        }

        if (data.link.trim() === '') {
            updatedValidity.link = false;
            isValid = false;
        } else {
            updatedValidity.link = true;
        }

        setValidity(updatedValidity);
        return isValid;
    };

    const submitForm = (event) => {
        event.preventDefault();

        if (validateForm()) {
            if (object.user.data.role === "admin") {
                setSubmitting(true); // Start submission loading
                addCourseService(data, object.user.data.role)
                    .then((resp) => {
                        toast.success("Course registered successfully!!");
                        resetData();
                        navigate("/user/courses");
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error("Failed to add course.");
                    })
                    .finally(() => {
                        setSubmitting(false); // End submission loading
                    });
            } else {
                toast.error("You are not authorized to add a course.");
                navigate("/");
            }
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <Base>
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
                                    <h1><u><i><center>Add</center></i></u></h1>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={submitForm}>
                                        <FormGroup>
                                            <Label for="title">Title:</Label>
                                            <Input
                                                type="text"
                                                id="title"
                                                placeholder="Enter title"
                                                required
                                                onChange={(e) => handleChange(e, 'title')}
                                                value={data.title}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                                invalid={!validity.title}
                                            />
                                            <FormFeedback>Title is required</FormFeedback>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="link">Link:</Label>
                                            <Input
                                                type="text"
                                                id="link"
                                                placeholder="Enter link"
                                                required
                                                onChange={(e) => handleChange(e, 'link')}
                                                value={data.link}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                                invalid={!validity.link}
                                            />
                                            <FormFeedback>Link is required</FormFeedback>
                                        </FormGroup>

                                        <Container className="text-center">
                                            {submitting ? (
                                                <Spinner animation="border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                            ) : (
                                                <>
                                                    <Button outline color="primary">ADD</Button>
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
        </Base>
    );
}

export default AddCourse;
