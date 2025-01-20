import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';
import '../styles/page-styles/Summary.css';

const Summary = () => {
  const companyData = useStore(state => state.companyData);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!companyData.name) {
      navigate('/');
    }
  }, [companyData, navigate]);

  return (
    <div>
      <h2>Thank you, {companyData.name}!</h2>
      <h3>Submitted data for your review:</h3>
      <div className="submitted-information">
        <p><strong>Name:</strong> {companyData.name}</p>
        <p><strong>IČO:</strong> {companyData.ico}</p>
        <p><strong>Address:</strong> {companyData.address}</p>
        <p><strong>Contact:</strong> {companyData.contact}</p>
        <p><strong>Director:</strong> {companyData.director}</p>
      </div>
    </div>
  );
};

export default Summary;
