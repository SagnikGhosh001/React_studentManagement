
import {  useEffect, useState } from "react";
import Base from "../../components/Base";
import { getUser } from "../../services/user-service";
import { useParams } from "react-router-dom";
import {  Col, Row } from "reactstrap";
import ViewUserdashBoard from "../../components/ViewUserdashBoard";



const UserDashboard = () => {
    const [user, setUser] = useState(null)
    const { id } = useParams()

    
    useEffect(() => {
        if (id) {
            getUser(id)
                .then(data => {
                    console.log("User data:", data);
                    setUser({ ...data });
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, [id]);
    
    const userView = () => {
        return (
            <Row className="text-center">
                <Col style={{ size: 6, offset: 2 }}>
                    <ViewUserdashBoard user={user}/>
                </Col>
            </Row>
        )
    }
    return (
        <Base>
            <div>
                {user ? userView():"loading user data..."}

            </div>
        </Base>
    )
}

export default UserDashboard