import React, { useContext, useState } from 'react'
import Base from '../components/Base'
import { addCourseService } from '../services/CourseService'
import userContext from '../context/userContext'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import backgroundImg from "../resource/updateprofile1.jpg";
import { useNavigate } from 'react-router-dom';
function AddCourse() {
    const object=useContext(userContext)
    const navigate = useNavigate()
    const [data, setData] = useState({
        title: '',
        link: '',

    })
    //handle Change
    const handleChange = (event, propertie) => {
        //dynamic setting value
        setData({ ...data, [propertie]: event.target.value })
    }
    //reset form
    const resetData = () => {
        setData(
            {
                title: '',
                link: '',
            }
        )
    }
    //submit form
    const submitForm = (event) => {
        event.preventDefault()

        
        //data validate

        //call server api for sending data
        if(data,object.user.data.role=="admin"){
        addCourseService(data,object.user.data.role).then((resp) => {
            console.log(resp);
            console.log("sucsess log");
            toast.success("course is registered successfully !!")
            setData(
                {
                    title: '',
                    link: '',
                }
            )
            navigate("/user/courses")
        }).catch((error) => {
            console.log(error);
            console.log("Error log");
            //error handle
            
        })
    }
    else{
        toast.error("You are not an admin")
        navigate("/")
    }
            ;
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
            <Container >
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', fontWeight: 'bold' }}>
                            <CardHeader>

                                <h1><u><i><center>Add</center></i></u></h1>
                            </CardHeader>
                            <CardBody>

                                <Form onSubmit={submitForm}>
                                    {/*Name field */}
                                    <FormGroup>
                                        <Label for="name">Title:</Label>
                                        <Input
                                            type="text"
                                            id="title"
                                            placeholder="Enter title"
                                            required="required"
                                            onChange={(e) => handleChange(e, 'title')}
                                            value={data.title}
                                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="link">Link:</Label>
                                        <Input
                                            type="text"
                                            id="link"
                                            placeholder="Enter link"
                                            required="required"
                                            onChange={(e) => handleChange(e, 'link')}
                                            value={data.link}
                                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                        />
                                    </FormGroup>

                                    <Container className="text-center">
                                        <Button outline color="primary">ADD</Button>
                                        <Button outline color="danger" className="ms-2" type="reset" onClick={resetData}>Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
            </div>
        </Base>
    )
}

export default AddCourse