import React, { useContext, useEffect, useState } from 'react';
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tilt } from 'react-tilt'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import backgroundImg from "../resource/userDashboard3.jpg";
import { Card, CardBody, Container, DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from "reactstrap";
import { NavLink } from "react-router-dom";
function ViewUserDashBoard({ user }) {
    const [isHovered, setIsHovered] = useState(false);
    const object = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (object.user.data.id !== user[0].id) {
            navigate("/");
            toast.error("Use 'Register Candidates' for checking other details");
        }
    }, [user, object.user.data.id, navigate]);

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

        <section
            className="vh-100"
            style={{
                backgroundColor: '#f4f5f7',
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
                                    boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.2)' : 'none',
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <MDBRow className="g-0">
                                    <MDBCol md="4" className="gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: 'darkblue' }}>
                                        <MDBCardImage
                                            src={user[0].gender === "female" ? "https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg" : "https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg"}
                                            alt="Avatar"
                                            className="my-5"
                                            style={{ width: '80px' }}
                                            fluid
                                        />
                                        <MDBTypography tag="h5">{user[0].userName}</MDBTypography>
                                        <MDBCardText>{user[0].role}</MDBCardText>
                                    </MDBCol>

                                    <MDBCol md="8" style={{ backgroundColor: 'rgba(240, 240, 240, 0.3)' }}>
                                        <MDBCardBody className="p-4" style={{ backgroundColor: 'transparent', fontWeight: 'bold' }}>
                                            <MDBTypography tag="h6">Information</MDBTypography>
                                            <hr className="mt-0 mb-4" />
                                            <MDBRow className="pt-1">
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Name</MDBTypography>
                                                    <MDBCardText className="text-muted">{user[0].name}</MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Gender</MDBTypography>
                                                    <MDBCardText className="text-muted"> {user[0].gender}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBTypography tag="h6">Contact Details</MDBTypography>
                                            <hr className="mt-0 mb-4" />
                                            <MDBRow className="pt-1">
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Email</MDBTypography>
                                                    <MDBCardText className="text-muted"> {user[0].email}</MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Phone</MDBTypography>
                                                    <MDBCardText className="text-muted">{user[0].phoneNo}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            {/* object.user.data.role=="student" ?(<NavLink to={`/user/updatestudent/${object.user.data.id}`}><Button color="warning" outline>Update Profile</Button></NavLink>):'' */}
                                            {
                                                object.user.data.role === "student" ? (
                                                    <UncontrolledDropdown
                                                        className="me-2"
                                                        direction="up"
                                                    >
                                                        <DropdownToggle
                                                            caret
                                                            color="primary"
                                                            outline
                                                        >
                                                            Update Profile
                                                        </DropdownToggle>
                                                        <DropdownMenu>

                                                            <DropdownItem
                                                                style={{ border: 'none', backgroundColor: 'transparent' }}
                                                            >


                                                                <NavLink style={{
                                                                    cursor: 'pointer',
                                                                    display: 'inline-block',
                                                                    padding: '10px 20px',
                                                                    borderRadius: '20px',
                                                                    backgroundColor: '#007bff',
                                                                    color: '#fff',
                                                                    textDecoration: 'none',
                                                                }}
                                                                    to={`/user/updatestudent/${object.user.data.id}`}
                                                                >
                                                                    Personal Details
                                                                </NavLink>

                                                            </DropdownItem>
                                                            <DropdownItem
                                                                style={{ border: 'none', backgroundColor: 'transparent' }}
                                                            >

                                                                <NavLink style={{
                                                                    cursor: 'pointer',
                                                                    display: 'inline-block',
                                                                    padding: '10px 20px',
                                                                    borderRadius: '20px',
                                                                    backgroundColor: '#007bff',
                                                                    color: '#fff',
                                                                    textDecoration: 'none',
                                                                }}
                                                                    to={`/user/updateusername/${object.user.data.id}`}>
                                                                    Username
                                                                </NavLink>



                                                            </DropdownItem>
                                                            <DropdownItem
                                                                style={{ border: 'none', backgroundColor: 'transparent' }}
                                                            >


                                                                <NavLink style={{
                                                                    cursor: 'pointer',
                                                                    display: 'inline-block',
                                                                    padding: '10px 20px',
                                                                    borderRadius: '20px',
                                                                    backgroundColor: '#007bff',
                                                                    color: '#fff',
                                                                    textDecoration: 'none',
                                                                }}
                                                                    to={`/user/updatepassword/${object.user.data.id}`}>
                                                                    Password</NavLink>
                                                            </DropdownItem>

                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>) : ''}
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

export default ViewUserDashBoard;
