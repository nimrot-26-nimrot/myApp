import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store form data
  const [formData, setFormData] = useState({
    destination: "Patna",
    from: "Noida",
    date: "2024-12-21",
    days: 15,
    mode: "Train",
    people: 4,
    whatsapp: "",
    purpose: "Vacation",
    details: "We are on winter vacation and we may attend a wedding. My son's 9th birthday is also on 24th December.",
    email: "zubair.saddam@gmail.com",
  });

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Travel Itinerary Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Destination */}
        <div className="form-group">
          <label>I Want to Go to *</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Enter Destination"
            required
          />
        </div>

        {/* From */}
        <div className="form-group">
          <label>From</label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="Enter From Location"
          />
        </div>

        {/* Date */}
        <div className="form-group">
          <label>On Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        {/* Days */}
        <div className="form-group">
          <label>For Number of Days</label>
          <input
            type="number"
            name="days"
            value={formData.days}
            onChange={handleChange}
            min="1"
          />
        </div>

        {/* Travel Mode */}
        <div className="form-group">
          <label>My Preferred Mode of Travel</label>
          <select name="mode" value={formData.mode} onChange={handleChange}>
            <option value="Train">Train</option>
            <option value="Flight">Flight</option>
            <option value="Bus">Bus</option>
            <option value="Car">Car</option>
          </select>
        </div>

        {/* People Count */}
        <div className="form-group">
          <label>Number of People Who are Travelling</label>
          <input
            type="number"
            name="people"
            value={formData.people}
            onChange={handleChange}
            min="1"
          />
        </div>

        {/* WhatsApp Number */}
        <div className="form-group">
          <label>WhatsApp Number</label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Enter WhatsApp Number"
          />
        </div>

        <button type="submit">Tell Us More</button>

        {/* Purpose */}
        <div className="form-group">
          <label>Purpose</label>
          <select name="purpose" value={formData.purpose} onChange={handleChange}>
            <option value="Vacation">Vacation</option>
            <option value="Wedding">Wedding</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Details */}
        <div className="form-group">
          <label>Other Details</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email ID"
          />
        </div>

        {/* Submit Button */}
        
      </form>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${formData.whatsapp}?text=I want to go to ${formData.destination} for ${formData.days} days.`}
        className="whatsapp-button"
        target="_blank"
        rel="noreferrer"
      >
        Get a Personal Itinerary on WhatsApp
      </a>
    </div>
  );
}

export default App;
