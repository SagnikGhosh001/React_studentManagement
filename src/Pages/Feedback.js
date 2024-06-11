// Your JSX code here
import React, { useContext, useRef, useState } from 'react';
import { Container, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Base from '../components/Base';
import backgroundImg from "../resource/feedback.jpg";
import Rating from 'react-rating-stars-component';
import userContext from '../context/userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Feedback() {
    const object = useContext(userContext);
    const [rating, setRating] = useState(0);
    const formRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        // Append the rating to the form data
        formData.append("access_key", "ceecc8fc-15b7-465a-bc0c-29424db43497");
        formData.append("rating", rating);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const res = await response.json();
    
            if (res.success) {
                formRef.current.reset(); // Reset the form fields
                setRating(0); // Reset the rating to 0
                toast.success('Form submitted successfully!'); 
                console.log("Success", res);
            } else {
                toast.error('Form submission failed!'); 
                console.error("Error", res);
            }
        } catch (error) {
            toast.error('Form submission failed!'); 
            console.error("Error", error);
        }
    
        console.log("Rating after submit:", rating); 
    };

    return (
        <Base>
            <div
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                }}
            >
                <Container>
                    <Card style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: 'transparent', border: '1px solid #ccc' }}>
                        <CardBody>
                            <CardTitle tag="h5" style={{ textAlign: 'center', color: '#333', fontWeight: 'bold' }}>Feedback Form</CardTitle>
                            <Form innerRef={formRef} onSubmit={onSubmit}>
                                <FormGroup>
                                    <Label for="userName" style={{ color: '#333', fontWeight: 'bold' }}>Your UserName:</Label>
                                    <Input type="text" id="userName" name="userName" placeholder="Your UserName" required defaultValue={object.user.data.userName} readOnly={true} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email" style={{ color: '#333', fontWeight: 'bold' }}>Your Email:</Label>
                                    <Input type="email" id="email" name="email" placeholder="Your Email" required defaultValue={object.user.data.email} readOnly={true} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message" style={{ color: '#333', fontWeight: 'bold' }}>Your Feedback:</Label>
                                    <Input type="textarea" id="message" name="message" placeholder="Your Message" required />
                                </FormGroup>
                                <FormGroup style={{ marginBottom: '10px' }}>
                                    <Label for="rating" style={{ color: '#333', fontWeight: 'bold', marginBottom: '5px' }}>Rating:</Label>
                                    <Rating
                                        id="rating"
                                        name="rating"
                                        count={5}
                                        value={rating}
                                        onChange={(newValue) => setRating(newValue)}
                                        size={40} 
                                        edit={true} 
                                        isHalf={false} 
                                        activeColor="#f0bb11"
                                        inactiveColor="#ccc" 
                                    />
                                </FormGroup>

                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                                    <Button type="submit" color="dark" outline style={{ marginRight: '10px' }}>Submit Form</Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                    <p style={{ textAlign: 'center', marginTop: '20px', color: '#333' }}>
                        <h3>Thank you for your feedback! We value your opinion.</h3>
                    </p>
                </Container>
            </div>
        </Base>
    );
}

export default Feedback;
