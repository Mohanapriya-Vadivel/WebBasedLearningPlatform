import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


const StudentSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastLoginTime] = useState(
    new Date(localStorage.getItem("lastLoginTime")) || new Date()
  );

  const studentInfo = {
    name: "Mohanapriya Vadivel",
    id: "STU-2024-089",
    program: "Computer Science",
    semester: "5th Semester",
    avatar: "https://i.pravatar.cc/100?img=45"
  };

  const menuItems = [
    { icon: '🏠', label: 'Dashboard', path: '/student_profile' },
    { icon: '📖', label: 'My Courses', path: '/student_profile/student_courses' },
    { icon: '📊', label: 'Progress ', path: '/student_profile/student_progress' },
    { icon: '📝', label: 'Assignments', path: '/student_profile/student_assignments' },
    { icon: '📅', label: 'Schedule', path: '/student_profile/student_schedule' },
    { icon: '👤', label: 'Leaderboard', path: '/student_profile/student_leaderboard' },
    { icon: '💬', label: 'Bookmarks', path: '/student_profile/student_bookmarks' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    localStorage.setItem("lastLoginTime", new Date().toISOString());
  }, []);


  return (
    <>
      {/* Sidebar */}
      <div style={{
        ...styles.sidebar,
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
      }}>
        {/* Profile Section */}
        <div style={styles.sidebarHeader}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h2 style={styles.portalTitle}>STUDENT PORTAL</h2>
            <button onClick={onClose} style={styles.closeButton}>
              ✕
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={studentInfo.avatar}
              alt={studentInfo.name}
              style={styles.avatar}
            />
            <div style={{ flex: 1 }}>
              <h3 style={styles.studentName}>{studentInfo.name}</h3>
              <p style={styles.studentId}>{studentInfo.id}</p>
              <p style={styles.studentProgram}>{studentInfo.program}</p>
              <p className="profile-time">
                🕒 <strong>Last Login:</strong>{" "}
                {lastLoginTime.toLocaleString()}
              </p>

              <p className="profile-time">
                ⏰ <strong>Current Time:</strong>{" "}
                {currentTime.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                className={`menu-item ${isActive(item.path) ? 'active' : ''}`}
                style={{
                  ...styles.menuItem,
                  ...(isActive(item.path) ? styles.menuItemActive : {})
                }}
                onClick={() => handleNavigation(item.path)}
              >
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <span style={{ fontWeight: '500' }}>{item.label}</span>
                {isActive(item.path) && <span style={{ marginLeft: 'auto', fontSize: '18px' }}>›</span>}
              </button>
            ))}
          </div>

          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <button className="menu-item" style={styles.logoutButton}>
              <span style={{ fontSize: '20px' }}>🚪</span>
              <span style={{ fontWeight: '500' }}>Logout</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div style={styles.overlay} onClick={onClose} />
      )}

      {/* Global Styles */}
      <style>{`
        .menu-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .menu-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 0;
          background: linear-gradient(to bottom, #06b6d4, #14b8a6);
          border-radius: 0 4px 4px 0;
          transition: height 0.3s ease;
        }
        
        .menu-item.active::before,
        .menu-item:hover::before {
          height: 70%;
        }

        .menu-item:hover {
          background: rgba(6, 182, 212, 0.05);
          color: #06b6d4;
        }

        .closeButton:hover {
          color: #06b6d4;
          background: rgba(6, 182, 212, 0.1);
        }
      `}</style>
    </>
  );
};

const styles = {
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '280px',
    background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
    backdropFilter: 'blur(20px)',
    borderRight: '1px solid rgba(148, 163, 184, 0.1)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1000,
    overflowY: 'auto'
  },
  sidebarHeader: {
    padding: '24px',
    borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
  },
  portalTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #06b6d4, #14b8a6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  closeButton: {
    padding: '8px',
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'all 0.2s'
  },
  avatar: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    border: '2px solid rgba(6, 182, 212, 0.5)',
    boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)'
  },
  studentName: {
    fontWeight: '600',
    color: 'white',
    fontSize: '14px'
  },
  studentId: {
    fontSize: '11px',
    color: '#94a3b8',
    fontFamily: 'monospace'
  },
  studentProgram: {
    fontSize: '11px',
    color: '#06b6d4',
    marginTop: '2px'
  },
  nav: {
    padding: '16px'
  },
  menuItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '14px',
    textAlign: 'left'
  },
  menuItemActive: {
    background: 'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(20, 184, 166, 0.2))',
    color: '#06b6d4'
  },
  logoutButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '14px'
  },
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)',
    zIndex: 999,
    animation: 'fadeIn 0.3s ease-out'
  }
};

export default StudentSidebar;