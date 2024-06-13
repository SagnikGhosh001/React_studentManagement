import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Base from '../../components/Base';
import userContext from '../../context/userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImg from "../user-routes/resource1/updateprofile1.jpg";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { getUser, updateUserPasswordr } from '../../services/user-service';
import Spinner from 'react-bootstrap/Spinner';

function UpdatePassword() {
    const { id } = useParams();
    const object = useContext(userContext);
    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [updating, setUpdating] = useState(false); // State to manage updating state

    useEffect(() => {
        getUser(id)
            .then(userData => {
                setData({ ...userData });
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Ensure loading state is set to false in case of error
            });
    }, [id]);

    useEffect(() => {
        if (data?.id === object?.user?.data?.id) {
            toast.error("You are not authorized to update this password");
            navigate("/");
        }
    }, [data, navigate, object]);

    const [error, setError] = useState({
        errors: {},
        isError: false
    });

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    const resetData = () => {
        setData({
            password: '',
        });
    };

    const update = (event) => {
        event.preventDefault();

        // Start updating process
        setUpdating(true);

        if (error.isError) {
            toast.error("Data already exists in the server.");
            setError({ ...error, isError: false });
            setUpdating(false); // Stop updating process due to error
            return;
        }

        updateUserPasswordr(id, { ...data })
            .then(resp => {
                toast.success("Password updated successfully!");
                resetData();
                navigate(`/user/dashboard/${id}`);
            })
            .catch(error => {
                setError({
                    errors: error,
                    isError: true
                });
                console.error(error);
            })
            .finally(() => {
                setUpdating(false); // Stop updating process after API call completes
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
                <Container >
                    <Row className="mt-4">
                        <Col sm={{ size: 6, offset: 3 }}>
                            <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', fontWeight: 'bold' }}>
                                <CardHeader>
                                    <h3 style={{ textAlign: 'center', textDecoration: 'underline', fontStyle: 'italic' }}>Update Password</h3>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={update}>
                                        <FormGroup>
                                            <Label for="password" style={{ fontSize: '1.25rem' }}>Password:</Label>
                                            <Input
                                                type="password"
                                                placeholder="Enter your password"
                                                required
                                                id="password"
                                                onChange={(e) => handleChange(e, 'password')}
                                                value={data.password || ''}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', color: '#000' }}
                                            />
                                        </FormGroup>
                                        <FormFeedback>{error.errors?.response?.data?.password}</FormFeedback>
                                        <Container className="text-center">
                                            <Button outline color="primary" disabled={updating}>
                                                {updating ? (
                                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                                ) : (
                                                    'Update'
                                                )}
                                            </Button>
                                            <Button outline color="danger" className="ms-2" type="reset" onClick={resetData} disabled={updating}>
                                                Reset
                                            </Button>
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
                    {loading ? (
                        <div style={{
                            backgroundImage: `url(${backgroundImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Spinner color="primary" />
                        </div>
                    ) : (
                        <div>{data && updateHtml()}</div>
                    )}
                </Col>
            </Row>
        </Base>
    );
}

export default UpdatePassword;
