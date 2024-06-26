import React, { useContext, useEffect, useState } from 'react';
import userContext from "../context/userContext";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import backgroundImg from "../resource/userDashboard3.jpg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tilt } from 'react-tilt'
import { useNavigate } from 'react-router-dom';

function ViewAdminDashBoard({ admin }) {
    const [isHovered, setIsHovered] = useState(false);
    const object = useContext(userContext);
    let navigate = useNavigate();

    useEffect(() => {
        if (object.user.data.id !== admin[0].id) {
            navigate("/");
            toast.error("Use 'Register Candidates' for checking other details");
        }
    }, [admin, object.user.data.id, navigate]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        
            <section className="vh-100" style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
            }}>
                
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <Tilt options={defaultOptions}>
                            <MDBCard
                                className="mb-3"
                                style={{
                                    borderRadius: '.5rem',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    transform: isHovered ? 'translateY(-10px)' : 'none',
                                    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <MDBRow className="g-0">
                                    <MDBCol md="4" className="gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: 'darkblue' }}>
                                        <MDBCardImage
                                            src={admin[0].gender === "female" ? "https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg" : "https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg"}
                                            alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                                        <MDBTypography tag="h5">{admin[0].userName}</MDBTypography>
                                        <MDBCardText>{admin[0].role}</MDBCardText>
                                    </MDBCol>

                                    <MDBCol md="8" style={{ backgroundColor: 'rgba(240, 240, 240, 0.3)' }}>
                                        <MDBCardBody className="p-4" style={{ backgroundColor: 'transparent', fontWeight: 'bold' }}>
                                            <MDBTypography tag="h6">Information</MDBTypography>
                                            <hr className="mt-0 mb-4" />
                                            <MDBRow className="pt-1">
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Name</MDBTypography>
                                                    <MDBCardText className="text-muted">{admin[0].name}</MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Gender</MDBTypography>
                                                    <MDBCardText className="text-muted"> {admin[0].gender}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBTypography tag="h6">Contact Details</MDBTypography>
                                            <hr className="mt-0 mb-4" />
                                            <MDBRow className="pt-1">
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Email</MDBTypography>
                                                    <MDBCardText className="text-muted"> {admin[0].email}</MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Phone</MDBTypography>
                                                    <MDBCardText className="text-muted">{admin[0].phoneNo}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                            </Tilt>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
            </section>
        
    );
}

export default ViewAdminDashBoard;
