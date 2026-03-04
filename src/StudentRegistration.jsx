
import React, { useState } from "react";
import "./StudentRegistration.css";

function StudentRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("studentData", JSON.stringify(formData));
    localStorage.setItem("role", "student");
    localStorage.setItem("isRegistered", "true");

    alert("Student Registered Successfully ✅");

    window.location.href = "/";
  };

  return (
    <div className="page">
      <div className="form-card">
        <h2>Student Registration</h2>
        <p className="subtitle">Fill the details carefully</p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="input-group">
              <label>Department</label>
              <select name="department" value={formData.department} onChange={handleChange} required>
                <option value="">-- Select Department --</option>
                <option value="CSE">Computer Science</option>
                <option value="ECE">Electronics</option>
                <option value="MECH">Mechanical</option>
                <option value="CIVIL">Civil</option>
              </select>
            </div>

            <div className="input-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegistration;

