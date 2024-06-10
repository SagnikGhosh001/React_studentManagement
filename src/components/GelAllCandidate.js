import React, { useEffect, useState } from "react";
import { getAlluser } from "../services/user-service";
import { Col, Row, Container } from "reactstrap";
import GetAllCandidateBody from "./GetAllCandidateBody";

const GetAllCandidate = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getAlluser()
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div style={{
            backgroundColor: 'skyblue',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            
            alignItems: 'center',
            padding: '20px'
        }}>
            <Container className="text-center">
                <h1>
                    <u>
                        <i>Total Registered Users {users?.length}</i>
                    </u>
                </h1>
            </Container>
            <Container>
                <Row>
                    {users?.map((user) => (
                        <Col key={user.id} md={4} className="mb-4">
                            <GetAllCandidateBody user={user} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default GetAllCandidate;
