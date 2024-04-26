
import { useContext, useEffect, useState } from "react";
import Base from "../../components/Base";
import userContext from "../../context/userContext";
import { getUser } from "../../services/user-service";
import { useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, Col, Container, Row, Table } from "reactstrap";
import ViewUserdashBoard from "../../components/ViewUserdashBoard";



const UserDashboard = () => {

    const userView = () => {
        return (
            <Row className="text-center">
                <Col style={{ size: 6, offset: 2 }}>
                    <ViewUserdashBoard />
                </Col>
            </Row>
        )
    }
    return (
        <Base>
            <div>
                {userView()}

            </div>
        </Base>
    )
}

export default UserDashboard