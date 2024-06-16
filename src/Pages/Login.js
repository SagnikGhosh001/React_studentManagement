import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Row, Spinner } from "reactstrap";
import Base from "../components/Base";
import { useContext, useState, useEffect } from "react";
import { loginUser } from "../services/user-service";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import backgroundImg from "../resource/login.jpg";

const Login = () => {
    const userContextData = useContext(userContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [clickloading, setClickloading] = useState(false); 
    const [loginDetail, setLoginDetail] = useState({
        userName: '',
        password: '',
        role: '',
    });

    // Handle Change
    const handleChange = (event, property) => {
        let actualValue = event.target.value;
        setLoginDetail({ ...loginDetail, [property]: actualValue });
    };

    // Handle role
    const handleRoleGenderChange = (event, property) => {
        const value = event.target.value;
        setLoginDetail({ ...loginDetail, [property]: value });
    };

    // Effect to log whenever loginDetail changes
    useEffect(() => {
       // console.log("Login details changed:", loginDetail);
    }, [loginDetail]);

    // State for input focus
    const [inputFocus, setInputFocus] = useState(false);

    // Define inline style for submit button hover effect
    const submitButtonStyle = {
        transition: "background-color 0.3s ease",
        ':hover': {
            backgroundColor: "#007bff",
        },
    };

    // Define inline style for reset button hover effect
    const resetButtonStyle = {
        transition: "background-color 0.3s ease",
        ':hover': {
            backgroundColor: "#dc3545",
        },
    };

    const submitForm = (event) => {
        event.preventDefault();
       // console.log(loginDetail);
        setClickloading(true); 
        loginUser(loginDetail).then((data) => {
           // console.log(data);
            setLoading(false);
            setClickloading(false); 
            doLogin(data, () => {
               // console.log("Log in detail is saved to local storage");
                userContextData.setUser({
                    data: data.user,
                    login: true,
                });
                navigate("/user/features");
            });
            toast.success("Login Success");
        }).catch(error => {
            console.error(error);
            setClickloading(false); 
            toast.error("Something went wrong, please check your details!!");
        });
    };

    const handleReset = () => {
        setLoginDetail({
            userName: '',
            password: '',
            role: '',
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
                        <div style={{ margin: "auto", width: "50%" }} sm={{ size: 6, offset: 3 }}>
                            <Card style={{ backgroundColor: 'rgba(240, 240, 240, 0.3)', fontWeight: 'bold' }}>
                                <CardHeader>
                                    <h1><u><i><center>Login</center></i></u></h1>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={submitForm}>
                                        <FormGroup>
                                            <Label for="userName" style={{ fontSize: '1.25rem' }}>User Name:</Label>
                                            <Input
                                                type="text"
                                                id="userName"
                                                placeholder="Enter your User Name"
                                                required="required"
                                                onChange={(e) => handleChange(e, 'userName')}
                                                value={loginDetail.userName}
                                                style={inputStyle}
                                                onFocus={() => setInputFocus(true)}
                                                onBlur={() => setInputFocus(false)}
                                              
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password" style={{ fontSize: '1.25rem' }}>Password:</Label>
                                            <Input
                                                type="password"
                                                placeholder="Enter your password"
                                                required="required"
                                                id="password"
                                                onChange={(e) => handleChange(e, 'password')}
                                                value={loginDetail.password}
                                                style={inputStyle}
                                                onFocus={() => setInputFocus(true)}
                                                onBlur={() => setInputFocus(false)}
                                                
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="role" style={{ fontSize: '1.25rem' }}>Role:</Label>
                                            <Input
                                                type="radio"
                                                name="role"
                                                required="required"
                                                id="student"
                                                className="ms-2 mt-2"
                                                value="student"
                                                checked={loginDetail.role === 'student'}
                                                onChange={(e) => handleRoleGenderChange(e, 'role')}
                                                style={inputStyle}
                                            />
                                            <Label for="student" className="ms-1">Student</Label>
                                            <Input
                                                type="radio"
                                                name="role"
                                                required="required"
                                                id="admin"
                                                className="ms-2 mt-2"
                                                value="admin"
                                                checked={loginDetail.role === 'admin'}
                                                onChange={(e) => handleRoleGenderChange(e, 'role')}
                                                style={inputStyle}
                                            />
                                            <Label for="admin" className="ms-1">Admin</Label>
                                        </FormGroup>
                                        <Container className="text-center">
                                            {clickloading ? (
                                                <Spinner color="primary" />
                                            ) : (
                                                <>
                                                    <Button
                                                        outline
                                                        color="dark"
                                                        style={submitButtonStyle}
                                                        type="submit"
                                                    >
                                                        Log in
                                                    </Button>
                                                    <Button
                                                        outline
                                                        onClick={handleReset}
                                                        color="dark"
                                                        className="ms-2"
                                                        type="reset"
                                                        style={resetButtonStyle}
                                                    >
                                                        Reset
                                                    </Button>
                                                </>
                                            )}
                                        </Container>
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </div>
        </Base>
    );
};

const inputStyle = {
    transition: "border-color 0.3s ease",
    borderColor: "#ced4da",
    ':hover': {
        borderColor: "#007bff",
    },
     backgroundColor: 'rgba(255, 255, 255, 0.3)' 
};

export default Login;
