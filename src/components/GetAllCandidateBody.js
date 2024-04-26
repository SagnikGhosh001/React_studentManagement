import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import { Divider } from '@mui/material';

function GetAllCandidateBody({ user }) {
    return (
        <>
            <Divider />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                    <Card className='border-0 shadow mt-3'>
                        <CardBody>
                            <Table bordered hover responsive>
                                <tbody>
                                    <tr>
                                        <td>
                                            USER NAME:-
                                        </td>
                                        <td>
                                            {user.userName}
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>
                                            NAME:-
                                        </td>
                                        <td>
                                            {user.name}
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>
                                            EMAIL:-
                                        </td>
                                        <td>
                                            {user.email}
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>
                                            GENDER:-
                                        </td>
                                        <td>
                                            {user.gender}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </li>
            </ul>
        </>
    );
}

export default GetAllCandidateBody;
