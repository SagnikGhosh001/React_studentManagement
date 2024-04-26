import { useEffect, useState } from "react"
import { getAlluser } from "../services/user-service";
import { Col, Row } from "reactstrap";
import GetAllCandidateBody from "./GetAllCandidateBody";
const GetAllCandidate=()=>{
    const[user,setUser]=useState(null);
    useEffect(()=>{
        getAlluser().then((data)=>{
            setUser(data);
        }).catch(error=>{
            console.error(error);
        })
    },[])
    return(
            <div className="container-fluid text-center">
                <Row >
                    <Col md={
                        {
                            size:10,
                            offset:1
                        }
                    }>
                        <h1><u><i>Total Register User {user?.length}</i></u></h1>
                        {
                            user?.map((user)=>(
                                <GetAllCandidateBody user={user}/>
                            ))
                        }
                    </Col>
                </Row>
            </div>
    )
}
export default GetAllCandidate