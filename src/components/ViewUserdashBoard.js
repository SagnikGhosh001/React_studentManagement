import { Card, CardBody, Container, DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from "reactstrap";
import React, { useContext, useEffect } from 'react'
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import backgroundImg from "../resource/userDashboard.jpg";
function ViewUserdashBoard({ user }) {
    useEffect(() => {
        if (object.user.data.id !== user[0].id) {
            navigate("/")
            toast.error("Use 'Register Candidates' for checking other details")
        }
    })
    const object = useContext(userContext)

    let navigate = useNavigate()
    console.log(user);
    return (
        // <Card>
        //     <CardBody>

        //         <h3 className="text-uppercase">User details:-</h3>
        //         <Container className="text-center">
        //             <image style={{ maxWidth: '150px', maxHeight: '150px' }} src="https://www.redditstatic.com/avatars/avatar_default_07_4856A3.png" alt="user profile picture" className="img-fluid rounded-circle" />
        //             <Table bordered hover responsive >

        //                 <tbody>
        //                     <tr>
        //                         <td>
        //                             USER NAME:-
        //                         </td>
        //                         <td>
        //                             {user[0].userName}
        //                         </td>
        //                     </tr>
        //                 </tbody>

        //                 <tbody>
        //                     <tr>
        //                         <td>
        //                             ROLE:-
        //                         </td>
        //                         <td>
        //                             {user[0].role}
        //                         </td>
        //                     </tr>
        //                 </tbody>
        //                 <tbody>
        //                     <tr>
        //                         <td>
        //                             NAME:-
        //                         </td>
        //                         <td>
        //                             {user[0].name}
        //                         </td>
        //                     </tr>
        //                 </tbody>
        //                 <tbody>
        //                     <tr>
        //                         <td>
        //                             EMAIL:-
        //                         </td>
        //                         <td>
        //                             {user[0].email}
        //                         </td>
        //                     </tr>
        //                 </tbody>
        //                 <tbody>
        //                     <tr>
        //                         <td>
        //                             PHONE NUMBER:-
        //                         </td>
        //                         <td>
        //                             {user[0].phoneNo}
        //                         </td>
        //                     </tr>
        //                 </tbody>
        //                 <tbody>
        //                     <tr>
        //                         <td>
        //                             GENDER:-
        //                         </td>
        //                         <td>
        //                             {user[0].gender}
        //                         </td>
        //                     </tr>
        //                 </tbody>
        //             </Table>
        // {/* object.user.data.role=="student" ?(<NavLink to={`/user/updatestudent/${object.user.data.id}`}><Button color="warning" outline>Update Profile</Button></NavLink>):'' */}
        // {
        //     object.user.data.role === "student" ? (
        //         <UncontrolledDropdown
        //             className="me-2"
        //             direction="end"
        //         >
        //             <DropdownToggle
        //                 caret
        //                 color="primary"
        //                 outline
        //             >
        //                 Update Profile
        //             </DropdownToggle>
        //             <DropdownMenu>
        //                 <DropdownItem header>
        //                     Header
        //                 </DropdownItem>
        //                 <DropdownItem
        //                     style={{ border: 'none', backgroundColor: 'transparent' }}
        //                 >


        //                     <NavLink style={{
        //                         cursor: 'pointer',
        //                         display: 'inline-block',
        //                         padding: '10px 20px',
        //                         borderRadius: '20px',
        //                         backgroundColor: '#007bff', // You can change the color as needed
        //                         color: '#fff',
        //                         textDecoration: 'none',
        //                     }}
        //                         to={`/user/updatestudent/${object.user.data.id}`}
        //                     >
        //                         Personal Details
        //                     </NavLink>

        //                 </DropdownItem>
        //                 <DropdownItem
        //                     style={{ border: 'none', backgroundColor: 'transparent' }}
        //                 >

        //                     <NavLink style={{
        //                         cursor: 'pointer',
        //                         display: 'inline-block',
        //                         padding: '10px 20px',
        //                         borderRadius: '20px',
        //                         backgroundColor: '#007bff', // You can change the color as needed
        //                         color: '#fff',
        //                         textDecoration: 'none',
        //                     }}
        //                         to={`/user/updateusername/${object.user.data.id}`}>
        //                         Username
        //                     </NavLink>



        //                 </DropdownItem>
        //                 <DropdownItem
        //                     style={{ border: 'none', backgroundColor: 'transparent' }}
        //                 >


        //                     <NavLink style={{
        //                         cursor: 'pointer',
        //                         display: 'inline-block',
        //                         padding: '10px 20px',
        //                         borderRadius: '20px',
        //                         backgroundColor: '#007bff', // You can change the color as needed
        //                         color: '#fff',
        //                         textDecoration: 'none',
        //                     }}
        //                         to={`/user/updatepassword/${object.user.data.id}`}>
        //                         Password</NavLink>
        //                 </DropdownItem>

        //             </DropdownMenu>
        //         </UncontrolledDropdown>) : ''}



        //         </Container>

        //     </CardBody>

        // </Card>

        <section className="vh-100" style={{
            backgroundColor: '#f4f5f7', backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
        }}>
            <MDBContainer className="py-5 h-100" >
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0" >
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }} >
                            <MDBRow className="g-0" >

                                <MDBCol md="4" className="gradient-custom text-center text-black"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: 'limegreen' }}>
                                    <MDBCardImage
                                        src={user[0].gender === "female" ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" : "https://cdn.iconscout.com/icon/premium/png-256-thumb/black-man-2888342-2399431.png?f=webp"}
                                        alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
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
                                                    direction="end"
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
                                                                backgroundColor: '#007bff', // You can change the color as needed
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
                                                                backgroundColor: '#007bff', // You can change the color as needed
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
                                                                backgroundColor: '#007bff', // You can change the color as needed
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
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default ViewUserdashBoard