import React, { useEffect, useState } from 'react'
import Base from '../../components/Base'
import { useParams } from 'react-router-dom'
import { getAdmin } from '../../services/admin-service'
import ViewAdminDashBoard from '../../components/ViewAdminDashboard'
import { Col, Row } from 'reactstrap'

function AdminDashboard() {
    const [admin, setAdmin] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        if (id) {
            getAdmin(id)
                .then(data => {
                    console.log("Admin data:", data);
                    setAdmin({ ...data });
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
                    <ViewAdminDashBoard admin={admin} />
                </Col>
            </Row>
        )
    }
    return (

        <Base>
            <div>
                {admin ? userView() : "loading user data..."}

            </div>
        </Base>

    )
}

export default AdminDashboard