import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';
import { validateForm } from '../utils/validation';
import '../styles/component-styles/Form.css';

const API_URL = "http://localhost:5000/api/companies";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    ico: '',
    address: '',
    contact: '',
    director: '',
  });
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();
  const setCompanyData = useStore((state) => state.setCompanyData);

  // Načtení dat z localStorage při prvním načtení
  useEffect(() => {
    const storedData = localStorage.getItem('companyData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // Uložení do localStorage při každé změně vstupu
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    localStorage.setItem('companyData', JSON.stringify(newData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Odeslání dat na backend
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Chyba při odesílání dat na server");
        }

        const data = await response.json();
        console.log("Data uložena do DB:", data);

        // Uložení do store a localStorage
        setCompanyData(formData);
        localStorage.setItem('companyData', JSON.stringify(formData));

        // Přesměrování na Summary
        navigate('/summary');
      } catch (error) {
        console.error("Chyba při odesílání dat:", error);
      }
    } else {
      setErrors(validationErrors);
      setShake(true);
      setTimeout(() => setShake(false), 1000); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`form-container ${shake ? 'shake' : ''}`}>
      <div className="form-group">
        <label className="label">Company Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="input" />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label className="label">IČO</label>
        <input type="text" name="ico" value={formData.ico} onChange={handleChange} className="input" />
        {errors.ico && <span className="error">{errors.ico}</span>}
      </div>

      <div className="form-group">
        <label className="label">Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} className="input" />
        {errors.address && <span className="error">{errors.address}</span>}
      </div>

      <div className="form-group">
        <label className="label">Contact</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="input" />
        {errors.contact && <span className="error">{errors.contact}</span>}
      </div>

      <div className="form-group">
        <label className="label">Director</label>
        <input type="text" name="director" value={formData.director} onChange={handleChange} className="input" />
        {errors.director && <span className="error">{errors.director}</span>}
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Form;
