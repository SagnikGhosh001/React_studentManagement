import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Base from '../components/Base';
import backgroundImg from "../resource/features.jpg";

function ContactUs() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500); 
    }, []);

    const skeletonStyle = {
        backgroundColor: '#ddd',
        minHeight: '50px',
        marginBottom: '10px',
    };

    const skeletonButtonStyle = {
        backgroundColor: '#ddd',
        width: '100px',
        height: '40px',
        marginBottom: '10px',
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
            {loading ? (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f0f0f0',
                    padding: '2rem',
                }}>
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                        <div style={skeletonStyle}></div>
                        <div style={skeletonStyle}></div>
                        <div style={skeletonStyle}></div>
                        <div style={skeletonButtonStyle}></div>
                        <div style={skeletonButtonStyle}></div>
                        <div style={skeletonButtonStyle}></div>
                        <div style={skeletonButtonStyle}></div>
                        <div style={skeletonStyle}></div>
                        <div style={skeletonStyle}></div>
                        <div style={skeletonStyle}></div>
                        <div style={skeletonStyle}></div>
                    </div>
                </div>
            ) : (
                <div style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    padding: '2rem',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f0f0f0',
                    textAlign: 'center',
                    color: 'black',
                }}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="6" className="text-center">
                                <h1 style={headingStyle}>Contact Us</h1>
                                <p style={paragraphStyle}>Connect with us on social media:</p>
                                <a href="https://www.facebook.com/sagnik.ghosh.31337" target="_blank" rel="noopener noreferrer">
                                    <Button color="primary" className="rounded-pill mx-1">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </Button>
                                </a>
                                <a href="https://www.instagram.com/sagnik_ghosh_01?igsh=MWk4NGdnOGl3YmxpeQ==" target="_blank" rel="noopener noreferrer">
                                    <Button color="primary" className="rounded-pill mx-1">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Button>
                                </a>
                                <a href="https://www.linkedin.com/in/sagnik-ghosh-445b86303/" target="_blank" rel="noopener noreferrer">
                                    <Button color="primary" className="rounded-pill mx-1">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </Button>
                                </a>
                                <a href="mailto:sagnikghosh904@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Button color="primary" className="rounded-pill mx-1">
                                        Gmail
                                    </Button>
                                </a>
                                <a href="https://github.com/SagnikGhosh001" target="_blank" rel="noopener noreferrer">
                                    <Button color="primary" className="rounded-pill mx-1">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </Button>
                                </a>
                                <p style={contactInfoStyle}>Phone: +1234567890</p>
                                <p style={contactInfoStyle}>Email: hau-hau-hau@gmail.com</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </Base>
    );
}

export default ContactUs;
