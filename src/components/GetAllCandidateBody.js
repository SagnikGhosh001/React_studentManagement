
import React, { useContext, useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import backgroundImg from "../resource/background.png";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUserService } from '../services/user-service';
import userContext from "../context/userContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CandidateBodySkeleton from './CandidateBodySkeleton';
import { Tilt } from 'react-tilt'
import { PopconfirmProps } from 'antd';
import { message, Popconfirm } from 'antd';
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
        
        
    }
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    const confirm: PopconfirmProps['onConfirm'] = (e) => {
        deleteUserService(user.id, object.user.data.role)
            .then(data => {
                message.success("User deleted");
                onDeleteUser(user.id); 
            })
            .catch(error => {
                console.error(error);
                toast.error("Error deleting user");
            });
    }
    const cancel: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
        message.error('selected no');
    };
    return (
        <Tilt options={defaultOptions}>
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
                                <Popconfirm
                                    title="Delete the course"
                                    description="Are you sure to delete this course?"
                                    onConfirm={confirm}
                                    onCancel={cancel}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <button style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                    >
                                        <DeleteIcon style={{ color: 'rgba(255, 0, 0, 0.8)' }} />
                                    </button>
                                </Popconfirm>
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
        </Tilt>
    );
}

export default GetAllCandidateBody;
