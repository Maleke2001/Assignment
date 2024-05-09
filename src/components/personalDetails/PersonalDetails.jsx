import React from 'react'
import "./PersonalDetails.css"
const PersonalDetails = () => {
    return (
        <div className="form-container">
          <h1>Personal details:</h1>
          <div className="input-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" />
          </div>
          <div className="input-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input type="tel" id="contactNumber" name="contactNumber" />
          </div>
        </div>
      );
}

export default PersonalDetails