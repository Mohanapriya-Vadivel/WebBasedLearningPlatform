import React, { useState } from "react";
import "./StudentRegistration.css"; // 

function TeacherRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    experience: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("teacherData", JSON.stringify(formData));
    localStorage.setItem("role", "teacher");
    localStorage.setItem("isRegistered", "true");

    alert("Teacher Registered Successfully ✅");

    window.location.href = "/";
  };

  return (
    <div className="page">
      <div className="form-card">
        <h2>Teacher Registration</h2>
        <p className="subtitle">Fill teacher details carefully</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
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

          <div className="row">
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

            <div className="input-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Subject --</option>
                <option value="Maths">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Computer">Computer Science</option>
                <option value="English">English</option>
              </select>
            </div>

            <div className="input-group">
              <label>Experience (Years)</label>
              <input
                type="number"
                name="experience"
                placeholder="Eg: 5"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Register Teacher
          </button>
        </form>
      </div>
    </div>
  );
}

export default TeacherRegistration;
