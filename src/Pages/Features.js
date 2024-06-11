import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText,NavLink } from 'reactstrap';
import Base from '../components/Base';
import { Link, NavLink as ReactLink, useNavigate } from 'react-router-dom';
import userContext from '../context/userContext';
function Features() {
    const object = useContext(userContext);
    // Inline styles
    const containerStyle = {
        marginTop: '40px',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px'
    };

    const headingStyle = {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 700,
        color: '#343a40',
    };

    const paragraphStyle = {
        fontFamily: "'Roboto', sans-serif",
        color: '#6c757d',
    };

    const cardStyle = {
        marginBottom: '20px',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        backgroundColor: '#ffffff', 
    };

    const cardHoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
    };

    const cardTitleStyle = {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 600,
        color: '#495057',
    };

    const cardTextStyle = {
        fontFamily: "'Roboto', sans-serif",
        color: '#6c757d',
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

    return (
        <Base>
            <div style={{
                backgroundColor: '#f8f9fa',
                minHeight: '100vh', 
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center', 
            }}>
                <Container style={containerStyle}>
                    <header>
                        <h1 style={headingStyle}>Welcome to our website! Thank you for registering. We hope you enjoy our services</h1>
                        <h2 style={paragraphStyle}>Here are some of the services we offer:</h2>
                    </header>
                    <Row>
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
                                       <NavLink tag={ReactLink} to="/user/feedback"> Provide Feedback</NavLink> 
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
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
                                       <NavLink tag={ReactLink} to={`/user/dashboard/${object.user.data.id}`}>Your Profile</NavLink> 
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Base>
    );
}

export default Features;
