import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Base from '../../components/Base';
import { getUser, updateUserUsername } from '../../services/user-service';
import userContext from '../../context/userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import backgroundImg from "../user-routes/resource1/updateprofile2.jpg";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";

function UpdateUserName() {
    const { id } = useParams();
    const object = useContext(userContext);
    const navigate = useNavigate();

    const [data, setData] = useState(null);
    useEffect(() => {
        getUser(id).then(userData => {
            setData({ ...userData });
        }).catch(error => {
            console.error(error);
        });
    }, [id]);

    const [error, setError] = useState({
        errors: {},
        isError: false
    });

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    const resetData = () => {
        setData({
            ...data,
            userName: ''
        });
    };

    const update = (event) => {
        event.preventDefault();

        if (error.isError) {
            toast.error("Already data exist in server...");
            setError({ ...error, isError: false });
            return;
        }

        updateUserUsername(id, { ...data }).then((resp) => {
            toast.success("User Name updated!!");
            setData({
                ...data,
                userName: ''
            });
            // Update user context here
            object.setUser({
                ...object.user,
                data: {
                    ...object.user.data,
                    userName: data.userName // Update the username
                }
            });
            navigate(`/user/dashboard/${id}`);
        }).catch((error) => {
            setError({
                errors: error,
                isError: true
            });
        });
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
                                    <h3><u><i><center>Update User Name</center></i></u></h3>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={update}>
                                        <FormGroup>
                                            <Label for="userName" style={{ fontSize: '1.25rem' }}>User Name:</Label>
                                            <Input
                                                type="text"
                                                id="userName"
                                                placeholder="Enter your User Name"
                                                required="required"
                                                onChange={(e) => handleChange(e, 'userName')}
                                                defaultValue={data[0]?.userName || ''}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                            />
                                        </FormGroup>
                                        <FormFeedback>{error.errors?.response?.data?.userName}</FormFeedback>
                                        <Container className="text-center">
                                            <Button outline color="primary">Update</Button>
                                            <Button outline color="danger" className="ms-2" type="reset" onClick={resetData}>Reset</Button>
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
                    <div>{data && updateHtml()}</div>
                </Col>
            </Row>
        </Base>
    );
}

export default UpdateUserName;
