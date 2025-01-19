import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Vyplňte a stane se překvapení.</h1>
      {}
      <Form />
    </div>
  );
};

export default Home;
