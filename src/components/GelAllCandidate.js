import React, { useEffect, useState } from "react";
import { getAlluser } from "../services/user-service";
import { Col, Row } from "reactstrap";
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
        <div style={{backgroundColor:'#1BFFFF'}}>
            
            <h1>
                <u>
                   <div className="container-fluid text-center"><i>Total Register Users {users?.length}</i></div> 
                </u>
            </h1>
            <container>
            <Row>
            
                {users?.map((user) => (
                    <Col key={user.id} md={4} className="mb-4">
                        <GetAllCandidateBody user={user} />
                    </Col>
                ))}
                
            </Row>
            </container>
        </div>
    );
};

export default GetAllCandidate;
