
import React, { useContext, useEffect, useState } from "react";
import { getAlluser } from "../services/user-service";
import { Col, Row, Container, Input, InputGroup, Form, Spinner } from "reactstrap";
import GetAllCandidateBody from "./GetAllCandidateBody";
import userContext from "../context/userContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GetAllCandidate = () => {
    const object = useContext(userContext);
    const [users, setUsers] = useState(null);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true); 
        if(object.user.data.role === "student") {
            toast.error("You are not an admin");
            navigate("/");   
        } else if(object.user.data.role === "admin"){
            getAlluser(object.user.data.role)
            .then((data) => {
                setUsers(data);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false); 
            });
        }
    }, [object.user.data.role, navigate]);

    const handleDeleteUser = (userId) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId)); // Update users state after deletion
    };

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
                    <i style={{ color: 'white' }}>Total Registered Users {users?.length}</i>
                </h1>
            </Container>
            <Form>
                <InputGroup className='my-3'>
                    <Input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search here"
                        style={{
                            borderRadius: '20px',
                            padding: '10px',
                            width: '100%', 
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </InputGroup>
            </Form>
            {loading ? ( 
                <div className="text-center my-5">
                    <Spinner color="primary" />
                    <p>Loading...</p>
                </div>
            ) : (
                <Container>
                    <Row>
                        {users?.filter((user) =>
                            search.toLowerCase() === '' ? true : user.userName.toLowerCase().includes(search)
                        ).map((user) => (
                            <Col key={user.id} md={4} className="mb-4">
                                <GetAllCandidateBody user={user} onDeleteUser={handleDeleteUser} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default GetAllCandidate;
