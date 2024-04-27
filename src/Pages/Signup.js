import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";
import { Male } from "@mui/icons-material";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";

const Signup = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        gender: '',
        userName: '',
        password: '',
        role: '',
    })

    const [error, setError] = useState({
        errors: {},
        isError: false
    })


    //handle Change
    const handleChange = (event, propertie) => {
        //dynamic setting value
        setData({ ...data, [propertie]: event.target.value })
    }
    //handle gender and role
    const handleRoleGenderChange = (event, property) => {
        // For role and gender, we need to access event.target.value directly
        const value = event.target.value;

        // dynamic setting value
        setData({ ...data, [property]: value });
    };

    //reset form
    const resetData = () => {
        setData(
            {
                name: '',
                email: '',
                phoneNo: '',
                gender: '',
                userName: '',
                password: '',
                role: '',
            }
        )
    }


    //submit form
    const submitForm = (event) => {
        event.preventDefault()

        if (error.isError) {
            toast.error("Already data exist in server...");
            setError({ ...error, isError: false })
            return;
        }
        console.log(data);
        //data validate

        //call server api for sending data
        signUp(data).then((resp) => {
            console.log(resp);
            console.log("sucsess log");
            toast.success("user is registered successfully !!")
            setData(
                {
                    name: '',
                    email: '',
                    phoneNo: '',
                    gender: '',
                    userName: '',
                    password: '',
                    role: '',
                }
            )
        }).catch((error) => {
            console.log(error);
            console.log("Error log");
            //error handle
            setError({
                errors: error,
                isError: true
            })
        })
            ;
    }

    return (
        <Base>

            <Container >
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
                            <CardHeader>

                                <h3><u><i>Fill Information to Register !!</i></u></h3>
                            </CardHeader>
                            <CardBody>

                                <Form onSubmit={submitForm}>
                                    {/*Name field */}
                                    <FormGroup>
                                        <Label for="name">Name:</Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            placeholder="Enter your Name"
                                            required="required"
                                            onChange={(e) => handleChange(e, 'name')}
                                            value={data.name}
                                            invalid={error.errors?.response?.data?.name ? true : false}
                                        />
                                    </FormGroup>
                                    <FormFeedback>{error.errors?.response?.data?.name}</FormFeedback>
                                    {/*Email field */}
                                    <FormGroup>
                                        <Label for="email">Email:</Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your Email"
                                            required="required"
                                            onChange={(e) => handleChange(e, 'email')}
                                            value={data.email}
                                            invalid={error.errors?.response?.data?.email ? true : false}
                                        />
                                    </FormGroup>
                                    <FormFeedback>{error.errors?.response?.data?.email}</FormFeedback>
                                    {/*Phone field */}
                                    <FormGroup>
                                        <Label for="phoneNo">Phone No:</Label>
                                        <Input
                                            type="tel"
                                            id="phoneNo"
                                            placeholder="Enter your Phone Number"
                                            required="required"
                                            onChange={(e) => handleChange(e, 'phoneNo')}
                                            value={data.phoneNo}
                                            invalid={error.errors?.response?.data?.phoneNo ? true : false}
                                        />
                                    </FormGroup>
                                    <FormFeedback>{error.errors?.response?.data?.phoneNo}</FormFeedback>
                                    {/*gender field */}
                                    <FormGroup>
                                        <Label for="gender">Gender:</Label>
                                        <input type="radio"
                                            name="gender"
                                            required="required"
                                            id="male"
                                            className="ms-2"
                                            value="male"
                                            checked={data.gender === 'male'}
                                            onChange={(e) => handleRoleGenderChange(e, 'gender')}
                                            invalid={error.errors?.response?.data?.gender ? true : false}
                                        />

                                        <label for="male">Male</label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            required="required"
                                            id="female"
                                            className="ms-2"
                                            value="female" checked={data.gender === 'female'}
                                            onChange={(e) => handleRoleGenderChange(e, 'gender')}
                                        />
                                        <label for="female">Female</label>
                                    </FormGroup>
                                    <FormFeedback>{error.errors?.response?.data?.gender}</FormFeedback>
                                    {/* User Name field */}
                                    <FormGroup>
                                        <Label for="userName">User Name:</Label>
                                        <Input
                                            type="text"
                                            id="userName"
                                            placeholder="Enter your User Name"
                                            required="required"
                                            onChange={(e) => handleChange(e, 'userName')}
                                            value={data.userName}
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
                                            value={data.password}
                                            invalid={error.errors?.response?.data?.password ? true : false}
                                        />
                                    </FormGroup>
                                    <FormFeedback>{error.errors?.response?.data?.password}</FormFeedback>
                                    {/* Role field */}
                                    <FormGroup>
                                        <Label for="role">Role:</Label>
                                        <input
                                            type="radio"
                                            name="role"
                                            required="required"
                                            id="student"
                                            className="ms-2"
                                            value="student"
                                            checked={data.role === 'student'}
                                            onChange={(e) => handleRoleGenderChange(e, 'role')}
                                            invalid={error.errors?.response?.data?.role ? true : false}
                                        />
                                        <label for="student">Student</label>
                                        <FormFeedback>{error.errors?.response?.data?.role}</FormFeedback>
                                    </FormGroup>

                                    <Container className="text-center">
                                        <Button outline color="primary">Register</Button>
                                        <Button outline color="danger" className="ms-2" type="reset" onClick={resetData}>Reset</Button>
                                    </Container>
                                </Form>

                            </CardBody>
                        </Card>
                    </Col>


                </Row>

            </Container>

        </Base>
    );
};

export default Signup;