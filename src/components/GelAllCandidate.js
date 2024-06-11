import React, { useContext, useEffect, useState } from "react";
import { getAlluser } from "../services/user-service";
import { Col, Row, Container, Input, InputGroup, Form } from "reactstrap";
import GetAllCandidateBody from "./GetAllCandidateBody";
import userContext from "../context/userContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GetAllCandidate = () => {
    const object = useContext(userContext);
    const [users, setUsers] = useState(null);
    const [search, setSearch] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        if(object.user.data.role=="admin"){
        getAlluser(object.user.data.role)
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error(error);
            });
        }
        else{
            toast.error("you are not an admin")
            navigate("/")
        }
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
                    
                        <i style={{color:'white'}}>Total Registered Users {users?.length}</i>
                    
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
                                    width: '100%', // Adjust as needed
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
                                }}
                            />
                        </InputGroup>
                    </Form>
            <Container>
                <Row>
                    {users?.filter((user)=>{
                        return search.toLowerCase()==='' ? user: user.userName.toLowerCase().includes(search);
                    }).map((user) => (
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
