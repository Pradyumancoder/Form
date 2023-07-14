import React, { useState } from 'react';
import './RegistrationForm.css';
import statesAndCities from '../statesAndCities.json';

function RegistrationForm() {
// const sendMail = require('./sendMail');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const cities = selectedState ? statesAndCities[selectedState] : [];
  const [subject, setSubject] = useState('');
  const [testDate, setTestDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and API requests here
    // Example: Send registration data to the backend server
    const registrationData = {
      name,
      email,
      state: selectedState,
      city: selectedCity,
      subject,
      testDate,
      timeSlot,
    };
    console.log(registrationData);
  };

  return (
    <div className="registration-form-container">
      <div className="background"></div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            required
          >
            <option value="">Select a state</option>
            {Object.keys(statesAndCities).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            required
            disabled={!selectedState}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="testDate">Test Date:</label>
          <input
            type="date"
            id="testDate"
            value={testDate}
            onChange={(e) => setTestDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Time Slot:</label>
          <select
            id="timeSlot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          >
            <option value="">Select a time slot</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
