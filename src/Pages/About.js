import React from "react";
import Base from "../components/Base";
import "../styles/about.css"; // Import custom CSS for styling
import backgroundImg from "../resource/Home.jpg"; // Import background image

const About = () => {
    return (
        <Base>
            <div className="custom-about-container">
                <div className="custom-card" style={{ backgroundImage: `url(${backgroundImg})` }}>
                    <div className="custom-card-body">
                        <h1 className="custom-heading">Welcome to Our Student Management System</h1>
                        <p className="custom-paragraph">
                            Our platform offers a diverse range of high-quality courses available for download, curated to enhance your skills and knowledge in various fields.
                        </p>
                        <p className="custom-paragraph">
                            With easy access to our extensive collection of courses, you can enrich your learning experience and advance your career at your own pace.
                        </p>
                        <p className="custom-paragraph">
                            Whether you're an individual learner seeking to expand your skillset or an educational institution looking to supplement your curriculum, our platform provides a seamless solution.
                        </p>
                        <p className="custom-paragraph">
                            Join us in unlocking the world of knowledge and empowering yourself and your students with our downloadable courses.
                        </p>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default About;
