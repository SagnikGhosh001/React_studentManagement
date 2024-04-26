import { Button, Card, CardBody, CardFooter, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, Table, UncontrolledDropdown } from "reactstrap";
import React, { useContext, useEffect, useState } from 'react'
import userContext from "../context/userContext";
import { getUser } from "../services/user-service";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
function ViewUserdashBoard() {
    const object = useContext(userContext)
    let navigate = useNavigate()

    return (
        <Card>
            <CardBody>

                <h3 className="text-uppercase">User details:-</h3>
                <Container className="text-center">
                    <img style={{ maxWidth: '150px', maxHeight: '150px' }} src="https://www.redditstatic.com/avatars/avatar_default_07_4856A3.png" alt="user profile picture" className="img-fluid rounded-circle" />
                    <Table bordered hover responsive >
                        <tbody>
                            <tr>
                                <td>
                                    USERID:-
                                </td>
                                <td>
                                    {object.user.data.id}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    USER NAME:-
                                </td>
                                <td>
                                    {object.user.data.userName}
                                </td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>
                                    ROLE:-
                                </td>
                                <td>
                                    {object.user.data.role}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    NAME:-
                                </td>
                                <td>
                                    {object.user.data.name}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    EMAIL:-
                                </td>
                                <td>
                                    {object.user.data.email}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    PHONE NUMBER:-
                                </td>
                                <td>
                                    {object.user.data.phoneNo}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    GENDER:-
                                </td>
                                <td>
                                    {object.user.data.gender}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    {/* object.user.data.role=="student" ?(<NavLink to={`/user/updatestudent/${object.user.data.id}`}><Button color="warning" outline>Update Profile</Button></NavLink>):'' */}
                    {
                        object.user.data.role == "student" ? (
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
                                    <DropdownItem header>
                                        Header
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



                </Container>

            </CardBody>

        </Card>
    )
}

export default ViewUserdashBoard