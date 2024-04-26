import React, { useContext, useEffect, useState } from 'react'
import Base from '../components/Base'
import { courseById, updateCourseService } from '../services/CourseService'
import { useParams } from 'react-router-dom'
import userContext from '../context/userContext'
import { toast } from 'react-toastify'
import { Card, CardHeader, Col, Container, Form, FormGroup, Label, Row, CardBody ,Input,Button } from 'reactstrap'

function UpdateCourse() {
    const object = useContext(userContext)
    const { id } = useParams()
    const [data, setData] = useState(null)
    useEffect(() => {
        courseById(id).then(data => {
            console.log(data);
            setData({ ...data })
        }).catch(error => {
            console.error(error);
        })
    }, [])
    const handleChange = (event, propertie) => {
        //dynamic setting value
        setData({ ...data, [propertie]: event.target.value })
    }

    //reset form
    const resetData = () => {
        setData(
            {
                title: '',

                link: "",


            }
        )
    }

    //submit form
    const update = (event) => {
        event.preventDefault()

        console.log(data);
        //data validate

        //call server api for sending data
        updateCourseService(id, object.user.data.role, { ...data }).then((resp) => {
            console.log(resp);
            console.log("sucsess log");
            toast.success("course updated!!")
            setData(
                {
                    title: '',

                    link: "",

                }
            )
        }).catch((error) => {
            console.log(error);
            console.log("Error log");
        })
            ;
    }
    const updateHtml = () => {
        return (
            <Container >
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
                            <CardHeader>

                                <h3><u><i>Fill Information to Update !!</i></u></h3>
                            </CardHeader>
                            <CardBody>

                                <Form onSubmit={update}>
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
        )
    }
    return (
        <Base>
      <Row>
        <Col>
          <div>{data && updateHtml()}</div>
        </Col>
      </Row>
    </Base>
    )
}

export default UpdateCourse