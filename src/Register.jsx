import React from 'react'
import "./Register.css"
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate=useNavigate();
  const learnerReg=()=>{
    navigate("/student_registration")
  }
  const mentorReg=()=>{
    navigate("/teacher_registration")
  }
  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h1 className="title">Register As</h1>

        <div className="btn-group" >
          <button className="role-btn learner" onClick={learnerReg}>
            Learner
            <span>Join to learn & grow</span>
          </button>

          <button className="role-btn mentor" onClick={mentorReg}>
            Mentor
            <span>Guide & inspire others</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
