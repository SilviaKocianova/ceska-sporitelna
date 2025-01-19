import React from 'react';
import useStore from '../store/store';
import '../styles/page-styles/Summary.css';

const Summary = () => {
  const companyData = useStore(state => state.companyData);

  return (
    <div>
      <h2>Thank you for contacting us!</h2>
      <h3>Submitted data for your review:</h3>
      <div class="submitted-information">
      <p><strong>Name:</strong> {companyData.name}</p>
      <p><strong>ICO:</strong> {companyData.ico}</p>
      <p><strong>Address:</strong> {companyData.address}</p>
      <p><strong>Contact:</strong> {companyData.contact}</p>
      <p><strong>Director:</strong> {companyData.director}</p>
      </div>
    </div>
  );
};

export default Summary;
