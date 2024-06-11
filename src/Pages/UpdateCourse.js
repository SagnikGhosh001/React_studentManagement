import React, { useContext, useEffect, useState } from 'react'
import Base from '../components/Base'
import { courseById, updateCourseService } from '../services/CourseService'
import { useNavigate, useParams } from 'react-router-dom'
import userContext from '../context/userContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardHeader, Col, Container, Form, FormGroup, Label, Row, CardBody ,Input,Button } from 'reactstrap'
import backgroundImg from "../resource/updateprofile1.jpg";
function UpdateCourse() {
    const object = useContext(userContext)
    const { id } = useParams()
    const [data, setData] = useState(null)
    const navigate=useNavigate()
    useEffect(() => {
        if(object.user.data.role=="admin"){
            courseById(id).then(data => {
                console.log(data);
                setData({ ...data })
            }).catch(error => {
                console.error(error);
            })
        }else{
            toast.error("you are not an admin")
            navigate("/")

        }
        
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
                link: '',
            }
        )
    }

    //submit form
    const update = (event) => {
        event.preventDefault()

        console.log(data);
        //data validate

        //call server api for sending data
        if(object.user.data.role=="admin"){
        updateCourseService(id, object.user.data.role, { ...data }).then((resp) => {
            console.log(resp);
            console.log("sucsess log");
            toast.success("course updated!!")
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
        })
    }else{
        toast.error("you are not an admin")
            navigate("/")
    }
            ;
    }
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
                        <Card style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', fontWeight: 'bold' }}>
                            <CardHeader>

                                <h1><u><i><center>Update</center></i></u></h1>
                            </CardHeader>
                            <CardBody>

                                <Form onSubmit={update}>
                                    {/*Name field */}
                                    <FormGroup>
                                        <Label for="name" style={{ fontSize: '1.25rem' }}>Title:</Label>
                                        <Input
                                            type="text"
                                            id="title"
                                            placeholder="Enter Title"
                                            required="required"
                                            onChange={(e) => handleChange(e, 'title')}
                                            value={data.title}
                                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="link" style={{ fontSize: '1.25rem' }}>Link:</Label>
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