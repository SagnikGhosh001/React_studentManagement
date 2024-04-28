import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useContext, useState, useEffect } from "react"; // Import useEffect
import { loginUser } from "../services/user-service";
import { toast } from "react-toastify";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const Login = () => {
    const userContextData = useContext(userContext);
    const navigate = useNavigate();
    const [loginDetail, setLoginDetail] = useState({
        userName: '',
        password: '',
        role: '',
    });

    //handle Change
    const handleChange = (event, property) => {
        //dynamic setting value
        let actualValue = event.target.value;
        setLoginDetail({ ...loginDetail, [property]: actualValue });
    };

    //handle gender and role
    const handleRoleGenderChange = (event, property) => {
        // For role and gender, we need to access event.target.value directly
        const value = event.target.value;

        // dynamic setting value
        setLoginDetail({ ...loginDetail, [property]: value });
    };

    // Effect to log whenever loginDetail changes
    useEffect(() => {
        console.log("Login details changed:", loginDetail);
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
        console.log(loginDetail);
        //server submit for token
        loginUser(loginDetail).then((data) => {
            console.log(data);

            //save the data to localStorage
            doLogin(data, () => {
                console.log("log in detail is saved to local storage")
                userContextData.setUser({
                    data: data.user,
                    login: true,
                });
                //redirect to course
                navigate("/user/courses");
            });
            toast.success("Login Success");
        }).catch(error => {
            console.error(error);
            toast.error("Something went wrong please check your details!!");
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
            <Container>
                <Row className="mt-4">
                    <div style={{ margin: "auto", width: "50%" }} sm={{ size: 6, offset: 3 }}>
                        <Card style={{ backgroundColor: '#f5fffa', fontWeight: 'bold' }}>
                            <CardHeader>
                                <h3><u><i>Fill Information to Login !!</i></u></h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={submitForm}>
                                    {/* User Name field */}
                                    <FormGroup>
                                        <Label for="userName">User Name:</Label>
                                        <Input
                                            type="text"
                                            id="userName"
                                            placeholder="Enter your User Name"
                                            required="required"
                                            onChange={(e) => handleChange(e, 'userName')}
                                            value={loginDetail.userName}
                                            style={inputStyle} // Add inline style for hover effect
                                            onFocus={() => setInputFocus(true)} // Focus effect
                                            onBlur={() => setInputFocus(false)} // Focus effect
                                        />
                                    </FormGroup>
                                    {/* Password field */}
                                    <FormGroup>
                                        <Label for="password">Password:</Label>
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            required="required"
                                            id="password"
                                            onChange={(e) => handleChange(e, 'password')}
                                            value={loginDetail.password}
                                            style={inputStyle} // Add inline style for hover effect
                                            onFocus={() => setInputFocus(true)} // Focus effect
                                            onBlur={() => setInputFocus(false)} // Focus effect
                                        />
                                    </FormGroup>
                                    {/* Role field */}
                                    <FormGroup>
                                        <Label for="role">Role:</Label>
                                        <Input
                                            type="radio"
                                            name="role"
                                            required="required"
                                            id="student"
                                            className="ms-2"
                                            value="student"
                                            checked={loginDetail.role === 'student'}
                                            onChange={(e) => handleRoleGenderChange(e, 'role')}
                                            style={inputStyle} // Add inline style for hover effect
                                        />
                                        <Label for="student" className="ms-1">Student</Label>
                                        <Input
                                            type="radio"
                                            name="role"
                                            required="required"
                                            id="admin"
                                            className="ms-2"
                                            value="admin"
                                            checked={loginDetail.role === 'admin'}
                                            onChange={(e) => handleRoleGenderChange(e, 'role')}
                                            style={inputStyle} // Add inline style for hover effect
                                        />
                                        <Label for="admin" className="ms-1">Admin</Label>
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button 
                                            outline 
                                            color="primary" 
                                            style={submitButtonStyle} // Add inline style for submit button hover effect
                                        >
                                            Log in
                                        </Button>
                                        <Button 
                                            outline 
                                            onClick={handleReset} 
                                            color="danger" 
                                            className="ms-2" 
                                            type="reset"
                                            style={resetButtonStyle} // Add inline style for reset button hover effect
                                        >
                                            Reset
                                        </Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>
        </Base>
    );
};

// Define inline style for hover effect on input fields
const inputStyle = {
    transition: "border-color 0.3s ease",
    borderColor: "#ced4da",
    ':hover': {
        borderColor: "#007bff",
    },
};

export default Login;
