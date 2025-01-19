import React from 'react';
import useStore from '../store/store';

const Summary = () => {
  const companyData = useStore(state => state.companyData);

  return (
    <div>
      <h2>Company Summary</h2>
      <p><strong>Name:</strong> {companyData.name}</p>
      <p><strong>ICO:</strong> {companyData.ico}</p>
      <p><strong>Address:</strong> {companyData.address}</p>
      <p><strong>Contact:</strong> {companyData.contact}</p>
      <p><strong>Director:</strong> {companyData.director}</p>
    </div>
  );
};

export default Summary;
