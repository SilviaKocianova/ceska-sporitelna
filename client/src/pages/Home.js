import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import '../styles/page-styles/Home.css';

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleFadeOut = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      navigate('/summary');
    }, 1000);
  };

  return (
    <div className={`home-container ${isSubmitting ? 'fade-out' : ''}`}>
      <h1>Submit for <span className="color-text">a surprise!</span></h1>
      <Form onSubmit={handleFadeOut} />
    </div>
  );
};

export default Home;
