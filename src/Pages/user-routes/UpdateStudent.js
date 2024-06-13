import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Base from '../../components/Base';
import { getUser, updateUser } from '../../services/user-service';
import userContext from '../../context/userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImg from "../user-routes/resource1/updateprofile3.jpg";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Spinner from 'react-bootstrap/Spinner';

const UpdateStudent = () => {
  const { id } = useParams();
  const object = useContext(userContext);
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [updating, setUpdating] = useState(false); // State to manage update loading state
  const [error, setError] = useState({
    errors: {},
    isError: false
  });

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
      toast.error("You are not authorized to update this information");
      navigate("/");
    }
  }, [data, navigate, object]);

  // Handle input changes
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  // Handle radio button changes for gender
  const handleRoleGenderChange = (event, property) => {
    const value = event.target.value;
    setData({ ...data, [property]: value });
  };

  // Reset form data
  const resetData = () => {
    setData({
      name: '',
      gender: '',
    });
  };

  // Submit form data
  const update = (event) => {
    event.preventDefault();
    setUpdating(true); // Set updating state to true while sending request

    if (error.isError) {
      toast.error("Already data exist in server...");
      setError({ ...error, isError: false });
      setUpdating(false); // Reset updating state
      return;
    }

    updateUser(id, { ...data })
      .then((resp) => {
        toast.success("Details updated!!");
        resetData();
        navigate(`/user/dashboard/${id}`);
      })
      .catch((error) => {
        setError({
          errors: error,
          isError: true
        });
        console.error(error);
      })
      .finally(() => {
        setUpdating(false); // Reset updating state after request completes
      });
  };

  // Render HTML form
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
        <Container>
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', fontWeight: 'bold' }}>
                <CardHeader>
                  <h3><u><i><center>Update Information</center></i></u></h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={update}>
                    {/* Name field */}
                    <FormGroup>
                      <Label for="name" style={{ fontSize: '1.25rem' }}>Name:</Label>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Enter your Name"
                        required
                        onChange={(e) => handleChange(e, 'name')}
                        value={data.name || ''}
                        invalid={error.errors?.response?.data?.name ? true : false}
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                      />
                      <FormFeedback>{error.errors?.response?.data?.name}</FormFeedback>
                    </FormGroup>
                    {/* Gender field */}
                    <FormGroup style={{ paddingTop: '10px' }}>
                      <Label style={{ fontSize: '1.25rem', marginBottom: '10px', display: 'block' }}>Gender:</Label>
                      <FormGroup check style={{ marginBottom: '10px' }}>
                        <Label check>
                          <Input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            checked={data.gender === 'male'}
                            onChange={(e) => handleRoleGenderChange(e, 'gender')}
                            invalid={error.errors?.response?.data?.gender ? true : false}
                          />
                          {' '}
                          Male
                        </Label>
                      </FormGroup>
                      <FormGroup check style={{ marginBottom: '10px' }}>
                        <Label check>
                          <Input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={data.gender === 'female'}
                            onChange={(e) => handleRoleGenderChange(e, 'gender')}
                          />
                          {' '}
                          Female
                        </Label>
                      </FormGroup>
                      <FormFeedback>{error.errors?.response?.data?.gender}</FormFeedback>
                    </FormGroup>
                    <Container className="text-center">
                      <Button outline color="primary" disabled={updating}>{updating ? <Spinner size="sm" color="primary" /> : "Update"}</Button>
                      <Button outline color="danger" className="ms-2" type="reset" onClick={resetData} disabled={updating}>Reset</Button>
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
};

export default UpdateStudent;
