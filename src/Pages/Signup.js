import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row, Spinner } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { signUp } from "../services/user-service";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImg from "../resource/reg.jpg";

const Signup = () => {
    const [loading, setLoading] = useState(true);
    const [clickloading, setClickloading] = useState(false); 
    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        gender: '',
        userName: '',
        password: '',
        role: '',
    });

    const [error, setError] = useState({
        errors: {},
        isError: false
    });
    
    //handle Change
    const handleChange = (event, property) => {
        //dynamic setting value
        setData({ ...data, [property]: event.target.value });
    };

    //handle gender and role
    const handleRoleGenderChange = (event, property) => {
        // For role and gender, we need to access event.target.value directly
        const value = event.target.value;

        // dynamic setting value
        setData({ ...data, [property]: value });
    };

    //reset form
    const resetData = () => {
        setData({
            name: '',
            email: '',
            phoneNo: '',
            gender: '',
            userName: '',
            password: '',
            role: '',
        });
    };

    //submit form
    const submitForm = (event) => {
        event.preventDefault();
        setClickloading(true); 
        if (error.isError) {
            toast.error("Already data exist in server...");
            setError({ ...error, isError: false });
            setClickloading(false); 
            return;
        }
        console.log(data);

        //call server api for sending data
        signUp(data).then((resp) => {
            console.log(resp);
            console.log("success log");
            setLoading(false);
            setClickloading(false); 
            toast.success("User is registered successfully!!");
            setData({
                name: '',
                email: '',
                phoneNo: '',
                gender: '',
                userName: '',
                password: '',
                role: '',
            });
        }).catch((error) => {
            setClickloading(false); 
            console.log(error);
            console.log("Error log");
            //error handle
            setError({
                errors: error.response.data, // Update this line
                isError: true
            });
        });
    };

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
                            <Card style={{ backgroundColor: 'rgba(240, 240, 240, 0.3)', fontWeight: 'bold' }}>
                                <CardHeader>
                                    <h1><u><i><center>Register Here</center></i></u></h1>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={submitForm}>
                                        {/*Name field */}
                                        <FormGroup>
                                            <Label for="name" style={{ fontSize: '1.25rem' }}>Name:</Label>
                                            <Input
                                                type="text"
                                                id="name"
                                                placeholder="Enter your Name"
                                                required="required"
                                                onChange={(e) => handleChange(e, 'name')}
                                                value={data.name}
                                                invalid={error.errors?.name ? true : false}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                            />
                                            <FormFeedback>{error.errors?.name}</FormFeedback>
                                        </FormGroup>
                                        {/*Email field */}
                                        <FormGroup>
                                            <Label for="email" style={{ fontSize: '1.25rem' }}>Email:</Label>
                                            <Input
                                                type="email"
                                                id="email"
                                                placeholder="Enter your Email"
                                                required="required"
                                                onChange={(e) => handleChange(e, 'email')}
                                                value={data.email}
                                                invalid={error.errors?.email ? true : false}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                            />
                                            <FormFeedback>{error.errors?.email}</FormFeedback>
                                        </FormGroup>
                                        {/*Phone field */}
                                        <FormGroup>
                                            <Label for="phoneNo" style={{ fontSize: '1.25rem' }}>Phone No:</Label>
                                            <Input
                                                type="tel"
                                                id="phoneNo"
                                                placeholder="Enter your Phone Number"
                                                required="required"
                                                onChange={(e) => handleChange(e, 'phoneNo')}
                                                value={data.phoneNo}
                                                invalid={error.errors?.phoneNo ? true : false}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                            />
                                            <FormFeedback>{error.errors?.phoneNo}</FormFeedback>
                                        </FormGroup>
                                        {/*gender field */}
                                        <FormGroup>
                                            <Label for="gender" style={{ fontSize: '1.25rem' }}>Gender:</Label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                required="required"
                                                id="male"
                                                className="ms-2"
                                                value="male"
                                                checked={data.gender === 'male'}
                                                onChange={(e) => handleRoleGenderChange(e, 'gender')}
                                            />
                                            <label htmlFor="male">Male</label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                required="required"
                                                id="female"
                                                className="ms-2"
                                                value="female"
                                                checked={data.gender === 'female'}
                                                onChange={(e) => handleRoleGenderChange(e, 'gender')}
                                            />
                                            <label htmlFor="female">Female</label>
                                            <FormFeedback>{error.errors?.gender}</FormFeedback>
                                        </FormGroup>
                                        {/* User Name field */}
                                        <FormGroup>
                                            <Label for="userName" style={{ fontSize: '1.25rem' }}>User Name:</Label>
                                            <Input
                                                type="text"
                                                id="userName"
                                                placeholder="Enter your User Name"
                                                required="required"
                                                onChange={(e) => handleChange(e, 'userName')}
                                                value={data.userName}
                                                invalid={error.errors?.userName ? true : false}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                            />
                                            <FormFeedback>{error.errors?.userName}</FormFeedback>
                                        </FormGroup>
                                        {/* Password field */}
                                        <FormGroup>
                                            <Label for="password" style={{ fontSize: '1.25rem' }}>Password:</Label>
                                            <Input
                                                type="password"
                                                placeholder="Enter your password"
                                                required="required"
                                                id="password"
                                                onChange={(e) => handleChange(e, 'password')}
                                                value={data.password}
                                                invalid={error.errors?.password ? true : false}
                                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                            />
                                            <FormFeedback>{error.errors?.password}</FormFeedback>
                                        </FormGroup>
                                        {/* Role field */}
                                        <FormGroup>
                                            <Label for="role" style={{ fontSize: '1.25rem' }}>Role:</Label>
                                            <input
                                                type="radio"
                                                name="role"
                                                required="required"
                                                id="student"
                                                className="ms-2"
                                                value="student"
                                                checked={data.role === 'student'}
                                                onChange={(e) => handleRoleGenderChange(e, 'role')}
                                            />
                                            <label htmlFor="student">Student</label>
                                            <FormFeedback>{error.errors?.role}</FormFeedback>
                                        </FormGroup>
                                        <Container className="text-center">
                                            {clickloading ? (
                                                <Spinner color="primary" />
                                            ) : (
                                                <>
                                                    <Button outline color="dark" disabled={clickloading}>Register</Button>
                                                    <Button outline color="dark" className="ms-2" type="reset" onClick={resetData} disabled={clickloading}>Reset</Button>
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
};

export default Signup;

