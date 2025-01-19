import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';
import { validateForm } from '../utils/validation';
import '../styles/Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    ico: '',
    address: '',
    contact: '',
    director: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const setCompanyData = useStore((state) => state.setCompanyData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setCompanyData(formData);
      navigate('/summary');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="label">Company Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label className="label">IČO</label>
        <input
          type="text"
          name="ico"
          value={formData.ico}
          onChange={handleChange}
          className="input"
        />
        {errors.ico && <span className="error">{errors.ico}</span>}
      </div>

      <div className="form-group">
        <label className="label">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="input"
        />
        {errors.address && <span className="error">{errors.address}</span>}
      </div>

      <div className="form-group">
        <label className="label">Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="input"
        />
        {errors.contact && <span className="error">{errors.contact}</span>}
      </div>

      <div className="form-group">
        <label className="label">Director</label>
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
          className="input"
        />
        {errors.director && <span className="error">{errors.director}</span>}
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Form;
