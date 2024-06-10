import React, { useContext, useEffect, useState } from 'react';
import userContext from "../context/userContext";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import backgroundImg from "../resource/userDashboard3.jpg";
import { toast } from "react-toastify";
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
                                        src={admin[0].gender === "female" ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" : "https://cdn.iconscout.com/icon/premium/png-256-thumb/black-man-2888342-2399431.png?f=webp"}
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
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default ViewAdminDashBoard;
