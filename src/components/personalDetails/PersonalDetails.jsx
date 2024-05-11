import React, { useState } from 'react';
import { useFormContext } from '../../context/FormContext';
import "./PersonalDetails.css"

const PersonalDetails = () => {
  const { updateFormData } = useFormContext();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = () => {
    updateFormData(formData);
  };

  return (
    <div className="form-container">
      <h3>Personal details:</h3>
      <div className="input-group">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} onBlur={handleBlur} />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
      </div>
      <div className="input-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} onBlur={handleBlur} />
      </div>
      <div className="input-group">
        <label htmlFor="contactNumber">Contact Number:</label>
        <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} onBlur={handleBlur} />
      </div>
    </div>
  );
};

export default PersonalDetails;
