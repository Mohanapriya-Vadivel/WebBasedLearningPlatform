import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import StudentRegistration from './StudentRegistration';
import TeacherRegistrationForm from './TeacherRegistractionForm';
import StudentProfile from './StudentProfile';
import TeacherProfile from './TeacherProfile';
import StudentDashboard from './StudentDashboard';
import StudentCourses from './StudentCourses';
import StudentProgress from './StudentProgress';
import StudentLeaderboard from './StudentLeaderboard';
import StudentAchievements from './StudentAchievements';
import StudentSavedResources from './StudentSavedResources';
import StudentMessages from './StudentMessages';
import ProgressSummary from './ProgressSummary';
import StudentAssignments from './StudentAssignments';
import StudentBookmarks from './StudentBookmarks';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student_registration" element={<StudentRegistration />} />
          <Route path="/teacher_registration" element={<TeacherRegistrationForm />} />
          <Route path="/student_profile" element={<StudentProfile />} />
          <Route path="/teacher_profile" element={<TeacherProfile />} />
          <Route path="/student_profile/student_dashboard" element={<StudentDashboard/>}/>
          <Route path="/student_profile/student_courses" element={<StudentCourses/>}/>
          <Route path="/student_profile/student_progress" element={<StudentProgress/>}/>
          <Route path="/student_profile/student_leaderboard" element={<StudentLeaderboard/>}/>
          <Route path="/student_profile/student_assignments" element={<StudentAssignments/>}/> 
          <Route path="/student_profile/student_saved_resources" element={<StudentSavedResources/>}/>
          <Route path="/student_profile/student_messages" element={<StudentMessages/>}/>        
          <Route path="/student_profile/student_achievements" element={<StudentAchievements/>}/>
          <Route path="/student_profile/student_progress_summary" element={<ProgressSummary/>}/>
          <Route path="/student_profile/student_bookmarks" element={<StudentBookmarks/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
