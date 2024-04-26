import React, { useContext, useState } from 'react'
import Base from '../components/Base'
import { addCourseService } from '../services/CourseService'
import userContext from '../context/userContext'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from 'react-toastify';
function AddCourse() {
    const object=useContext(userContext)
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
        }).catch((error) => {
            console.log(error);
            console.log("Error log");
            //error handle
            
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

                                <h3><u><i>Fill Information to Update !!</i></u></h3>
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

                                        />
                                    </FormGroup>

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
        </Base>
    )
}

export default AddCourse