// GetAllCandidateBody.js
import React, { useContext, useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import backgroundImg from "../resource/background.png";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUserService } from '../services/user-service';
import userContext from "../context/userContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CandidateBodySkeleton from './CandidateBodySkeleton';

function GetAllCandidateBody({ user, onDeleteUser }) {
    const object = useContext(userContext);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    function handleDeleteUser() {
        console.log(user);
        deleteUserService(user.id, object.user.data.role)
            .then(data => {
                toast.success("User deleted");
                onDeleteUser(user.id); // Notify parent component to remove user from state
            })
            .catch(error => {
                console.error(error);
                toast.error("Error deleting user");
            });
    }

    return (
        <MDBContainer className="py-3">
            {isLoading ? (
                <CandidateBodySkeleton />
            ) : (
                <MDBCard
                    className="mb-3"
                    style={{
                        borderRadius: '.5rem',
                        transition: 'transform 0.3s',
                        transform: isHovered ? 'translateY(-5px)' : 'none',
                        boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
                        backgroundColor: '#f4f5f7',
                        backgroundImage: `url(${backgroundImg})`,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <MDBRow className="g-0">
                        <MDBCol md="4" className="gradient-custom text-center text-black"
                            style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: '#C71585' }}>
                            <MDBCardImage
                                src={user.gender === "female" ? "https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg" : "https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg"}
                                alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                            <MDBTypography tag="h5" className="mb-0">{user.userName}</MDBTypography>
                            <MDBCardText className="mb-5">{user.role}</MDBCardText>
                            <button style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                                onClick={handleDeleteUser}
                            >
                                <DeleteIcon style={{ color: 'rgba(255, 0, 0, 0.8)' }} />
                            </button>
                        </MDBCol>
                        <MDBCol md="8">
                            <MDBCardBody className="p-4">
                                <MDBTypography tag="h6" className="mb-3">Information</MDBTypography>
                                <MDBRow className="mb-3">
                                    <MDBCol xs="6">
                                        <MDBTypography tag="h6" className="mb-0">Name</MDBTypography>
                                        <MDBCardText className="text-muted">{user.name}</MDBCardText>
                                    </MDBCol>
                                    <MDBCol xs="6">
                                        <MDBTypography tag="h6" className="mb-0">Gender</MDBTypography>
                                        <MDBCardText className="text-muted">{user.gender}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            )}
        </MDBContainer>
    );
}

export default GetAllCandidateBody;
