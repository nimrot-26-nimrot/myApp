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

  // State to store errors
  const [errors, setErrors] = useState({});

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required.";
    }

    if (!formData.from.trim()) {
      newErrors.from = "From location is required.";
    }

    if (!formData.date) {
      newErrors.date = "Travel date is required.";
    } else if (new Date(formData.date) < new Date()) {
      newErrors.date = "Travel date cannot be in the past.";
    }

    if (!formData.days || formData.days < 1) {
      newErrors.days = "Number of days must be at least 1.";
    }

    if (!formData.people || formData.people < 1) {
      newErrors.people = "Number of people must be at least 1.";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required.";
    } else if (!/^\d{10}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "WhatsApp number must be 10 digits.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.details.trim()) {
      newErrors.details = "Details are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
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
          />
          {errors.destination && <p className="error">{errors.destination}</p>}
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
          {errors.from && <p className="error">{errors.from}</p>}
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
          {errors.date && <p className="error">{errors.date}</p>}
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
          {errors.days && <p className="error">{errors.days}</p>}
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
          {errors.people && <p className="error">{errors.people}</p>}
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
          {errors.whatsapp && <p className="error">{errors.whatsapp}</p>}
        </div>
        {/* Submit Button */}
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
          {errors.details && <p className="error">{errors.details}</p>}
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
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        
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
