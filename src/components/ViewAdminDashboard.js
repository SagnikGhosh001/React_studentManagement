import React, { useContext, useEffect } from 'react'
import userContext from "../context/userContext";


import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Container, Table } from 'reactstrap';
function ViewAdminDashBoard({ admin }) {
    useEffect(() => {
        if (object.user.data.id !== admin[0].id) {
            navigate("/")
            toast.error("Use 'Register Candidates' for checking other details")
        }
    })
    const object = useContext(userContext)
let navigate=useNavigate()

    console.log(admin);
    return (
        <Card>
            <CardBody>

                <h3 className="text-uppercase">User details:-</h3>
                <Container className="text-center">
                    <image style={{ maxWidth: '150px', maxHeight: '150px' }} src="https://www.redditstatic.com/avatars/avatar_default_07_4856A3.png" alt="user profile picture" className="img-fluid rounded-circle" />
                    <Table bordered hover responsive >
                        <tbody>
                            <tr>
                                <td>
                                    USERID:-
                                </td>
                                <td>
                                    {admin[0].id}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    USER NAME:-
                                </td>
                                <td>
                                    {admin[0].userName}
                                </td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>
                                    ROLE:-
                                </td>
                                <td>
                                    {admin[0].role}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    NAME:-
                                </td>
                                <td>
                                    {admin[0].name}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    EMAIL:-
                                </td>
                                <td>
                                    {admin[0].email}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    PHONE NUMBER:-
                                </td>
                                <td>
                                    {admin[0].phoneNo}
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    GENDER:-
                                </td>
                                <td>
                                    {admin[0].gender}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </CardBody>
        </Card>
    )
}

export default ViewAdminDashBoard