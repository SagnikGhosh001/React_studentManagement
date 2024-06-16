import React, { useEffect, useState } from 'react';
import Base from '../../components/Base';
import { useParams } from 'react-router-dom';
import { getAdmin } from '../../services/admin-service';
import ViewAdminDashboard from '../../components/ViewAdminDashboard';
import { Col, Row, Spinner } from 'reactstrap'; 

function AdminDashboard() {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true); 
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getAdmin(id)
                .then(data => {
                   // console.log("Admin data:", data);
                    setAdmin(data); 
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                })
                .finally(() => {
                    setLoading(false); 
                });
        }
    }, [id]);

    return (
        <Base>
            <div>
                {loading ? (
                    <div className="text-center mt-5">
                        <Spinner color="primary" /> 
                        <p>Loading...</p>
                    </div>
                ) : admin ? (
                    <Row className="text-center">
                        <Col style={{ size: 6, offset: 2 }}>
                            <ViewAdminDashboard admin={admin} />
                        </Col>
                    </Row>
                ) : (
                    <p>No admin data found.</p> 
                )}
            </div>
        </Base>
    );
}

export default AdminDashboard;
