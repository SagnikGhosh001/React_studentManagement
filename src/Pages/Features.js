import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText, NavLink, Spinner } from 'reactstrap';
import Base from '../components/Base';
import { NavLink as ReactLink } from 'react-router-dom';
import userContext from '../context/userContext';
import backgroundImg from "../resource/features6.jpg";

function Features() {
    const [loading, setLoading] = useState(true); // Initialize loading state to true
    const object = useContext(userContext); // Get the user context

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    // Inline styles
    const containerStyle = {
        marginTop: '40px',
        padding: '20px',
        borderRadius: '8px'
    };

    const headingStyle = {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 700,
        color: 'white',
    };

    const paragraphStyle = {
        fontFamily: "'Roboto', sans-serif",
        color: 'lightgray',
        fontWeight: 700,
    };

    const cardStyle = {
        marginBottom: '20px',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    };

    const cardHoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
    };

    const cardTitleStyle = {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 600,
        color: 'white',
    };

    const cardTextStyle = {
        fontFamily: "'Roboto', sans-serif",
        color: 'lightgray',
    };

    const buttonStyle = {
        fontFamily: "'Roboto', sans-serif",
        marginTop: '10px',
        transition: 'background-color 0.3s, transform 0.3s',
        borderRadius: '8px',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
        transform: 'scale(1.1)',
        borderRadius: '8px',
    };

    // State for hover effects
    const [hoveredCardCourse, setHoveredCardCourse] = useState(false);
    const [hoveredCardFeedback, setHoveredCardFeedback] = useState(false);
    const [hoveredCardProfile, setHoveredCardProfile] = useState(false);
    const [hoveredButtonCourse, setHoveredButtonCourse] = useState(false);
    const [hoveredButtonFeedback, setHoveredButtonFeedback] = useState(false);
    const [hoveredButtonProfile, setHoveredButtonProfile] = useState(false);

    if (loading) {
        return (
            <Base style={{ backgroundColor: 'transparent' }}>
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
            </Base>
        );
    }

    return (
        <Base style={{ backgroundColor: 'transparent' }}>
            <div style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                color: '#fff',
            }}>
                <header style={{ marginTop: '0.9%' }}>
                    <center>
                        <h1 style={headingStyle}>Welcome to our website! Thank you for registering.</h1>
                        <h1 style={headingStyle}> We hope you enjoy our services</h1>
                    </center>
                </header>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '5%',
                    backgroundColor: 'rgba(255, 255, 255, 0.0)',
                    borderRadius: '8px',
                }}>
                    <Container style={containerStyle}>
                        <header>
                            <h2 style={paragraphStyle}>Here are some of the services we offer:</h2>
                        </header>
                        <Row>
                            <Col md="4">
                                <Card
                                    style={hoveredCardProfile ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
                                    onMouseEnter={() => setHoveredCardProfile(true)}
                                    onMouseLeave={() => setHoveredCardProfile(false)}
                                >
                                    <CardBody>
                                        <CardTitle tag="h3" style={cardTitleStyle}>Profile</CardTitle>
                                        <CardText style={cardTextStyle}>View and update your profile information.</CardText>
                                        <Button
                                            color="secondary"
                                            style={hoveredButtonProfile ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
                                            onMouseEnter={() => setHoveredButtonProfile(true)}
                                            onMouseLeave={() => setHoveredButtonProfile(false)}
                                        >
                                            {object.user.data.role === "student" ? (
                                                <NavLink tag={ReactLink} to={`/user/dashboard/${object.user.data.id}`}>Your Profile</NavLink>
                                            ) : (
                                                <NavLink tag={ReactLink} to={`/user/admindashboard/${object.user.data.id}`}>Your Profile</NavLink>
                                            )}
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card
                                    style={hoveredCardCourse ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
                                    onMouseEnter={() => setHoveredCardCourse(true)}
                                    onMouseLeave={() => setHoveredCardCourse(false)}
                                >
                                    <CardBody>
                                        <CardTitle tag="h3" style={cardTitleStyle}>Courses</CardTitle>
                                        <CardText style={cardTextStyle}>Explore a variety of courses to enhance your skills.</CardText>
                                        <Button
                                            color="primary"
                                            style={hoveredButtonCourse ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
                                            onMouseEnter={() => setHoveredButtonCourse(true)}
                                            onMouseLeave={() => setHoveredButtonCourse(false)}
                                        >
                                            <NavLink tag={ReactLink} to="/user/courses">Browse Courses</NavLink>
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card
                                    style={hoveredCardFeedback ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
                                    onMouseEnter={() => setHoveredCardFeedback(true)}
                                    onMouseLeave={() => setHoveredCardFeedback(false)}
                                >
                                    <CardBody>
                                        <CardTitle tag="h3" style={cardTitleStyle}>Feedback</CardTitle>
                                        <CardText style={cardTextStyle}>We value your feedback to help us improve our services.</CardText>
                                        <Button
                                            color="secondary"
                                            style={hoveredButtonFeedback ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
                                            onMouseEnter={() => setHoveredButtonFeedback(true)}
                                            onMouseLeave={() => setHoveredButtonFeedback(false)}
                                        >
                                            <NavLink tag={ReactLink} to="/user/feedback">Provide Feedback</NavLink>
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Base>
    );
}

export default Features;
