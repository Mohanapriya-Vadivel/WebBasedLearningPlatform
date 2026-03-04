import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import StudentRegistration from './StudentRegistration.jsx'
import TeacherRegistrationForm from './TeacherRegistractionForm.jsx'
import Register from './Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Login/> */}
    {/* <StudentRegistration/> */}
    {/* <TeacherRegistrationForm/> */}
    {/* <Register/> */}
  </StrictMode>,
)
