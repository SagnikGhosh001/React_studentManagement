import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Base from '../../components/Base'
import { getUser, updateUser } from '../../services/user-service'
import userContext from '../../context/userContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImg from "../user-routes/resource1/updateprofile3.jpg";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
const UpdateStudent = () => {

  const { id } = useParams()

  const object = useContext(userContext)
  const navigate = useNavigate()
  // console.log(object.user.data.id);
  const [data, setData] = useState(null)
  useEffect(() => {
    getUser(id).then(data => {
      console.log(data);

      setData({ ...data })
    }).catch(error => {
      console.error(error);
    })
  }, [])
  useEffect(() => {
    if (data?.id == object?.user?.data?.id) {
      toast.error("this is not you")
      navigate("/")
    }
  }, [data])

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

        gender: "",


      }
    )
  }


  //submit form
  const update = (event) => {
    event.preventDefault()

    if (error.isError) {
      toast.error("Already data exist in server...");
      setError({ ...error, isError: false })
      return;
    }
    console.log(data);
    //data validate

    //call server api for sending data
    updateUser(id, { ...data }).then((resp) => {
      console.log(resp);
      console.log("sucsess log");
      toast.success("Details updated!!")
      
      setData(
        {
          name: '',

          gender: '',

        }
      )
      navigate(`/user/dashboard/${id}`)
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

              <h3><u><i><center>Update Information</center></i></u></h3>
              </CardHeader>
              <CardBody>

                <Form onSubmit={update}>
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
                      
                      invalid={error.errors?.response?.data?.name ? true : false}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    />
                  </FormGroup>
                  <FormFeedback>{error.errors?.response?.data?.name}</FormFeedback>
                  {/*gender field */}
                  <FormGroup>
                    <Label for="gender" style={{ fontSize: '1.25rem' }}>Gender:</Label>
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
    <div>
      <Row>
        <Col>
          <div >{data && updateHtml()}</div>
        </Col>
      </Row>
      </div>
    </Base>
  )
}

export default UpdateStudent