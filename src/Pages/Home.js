
import React from 'react';
import Base from "../components/Base";
import backgroundImg from "../resource/Home.jpg";
import "../styles/home.css";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  
  return (
    <Base>
      <div 
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '600px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to our Course Download Platform</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Explore a vast collection of courses to enhance your skills and knowledge!</p>
          <p style={{ marginBottom: '2rem' }}>Our platform offers a wide range of courses across various categories, including:</p>
          <ul style={{ marginBottom: '2rem', textAlign: 'left' }}>
            <li>Programming and Development</li>
            <li>Design and Creativity</li>
            <li>Business and Entrepreneurship</li>
            <li>Language Learning</li>
            <li>Health and Fitness</li>
            <li>And much more...</li>
          </ul>
          <p style={{ marginBottom: '2rem' }}>Whether you're looking to advance your career, learn a new skill, or explore a hobby, we have something for everyone.</p>
          <p>Join our community today and start your learning journey!</p>
        </div>
      </div>
    </Base>
  );
};

export default Home;
