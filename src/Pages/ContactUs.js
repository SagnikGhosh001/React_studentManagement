import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Base from '../components/Base';

function ContactUs() {
    const pageStyle = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: '2rem',
        textAlign: 'center',
        color: 'black',
    };
    const headingStyle = {
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
    };

    const paragraphStyle = {
        fontSize: '1.5rem',
        marginBottom: '2rem',
    };
    const contactInfoStyle = {
        fontSize: '1.2rem',
        marginBottom: '1rem',
        marginTop: '1rem',
    };
    return (
        <Base>
            <div style={pageStyle}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6" className="text-center">
                        <h1 style={headingStyle}>Contact Us</h1>
                        <p style={paragraphStyle}>Connect with us on social media:</p>
                            <Button color="primary" className="rounded-pill mx-1">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Button>
                            <Button color="primary" className="rounded-pill mx-1">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Button>
                            <Button color="primary" className="rounded-pill mx-1">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Button>
                            <Button color="primary" className="rounded-pill mx-1">Gmail</Button>
                            <Button color="primary" className="rounded-pill mx-1">
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                            <p style={contactInfoStyle}>Phone: +1234567890</p>
                            <p style={contactInfoStyle}>Email: example@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Base>
    );
}

export default ContactUs;
