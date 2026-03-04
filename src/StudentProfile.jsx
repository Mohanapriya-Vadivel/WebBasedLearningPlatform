import React, { useState, useEffect } from 'react';
import "./StudentProfile.css";
import {
  FaSearch,
  FaUserCircle,
  FaEllipsisV,
  FaGraduationCap,
  FaCalendarAlt,
  FaRocket,
  FaStar,
  FaTasks,
  FaTrophy,
  FaBookOpen,
  FaChartLine,
  FaSignOutAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function StudentProfile() {
  const [showProfile, setShowProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastLoginTime] = useState(
    new Date(localStorage.getItem("lastLoginTime")) || new Date()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    localStorage.setItem("lastLoginTime", new Date().toISOString());
  }, []);


  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStudentProfileClick = () => {
    setShowProfile(true);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  const switchMentor = () => {
    navigate("/teacher_profile");
  };

  // Featured categories
  const featuredCategories = [
    { name: "Computer Science", icon: "💻", color: "#3b82f6" },
    { name: "AI & Data Science", icon: "🤖", color: "#8b5cf6" },
    { name: "Electronics", icon: "⚡", color: "#f59e0b" },
    { name: "Mathematics", icon: "📐", color: "#10b981" },
    { name: "Physics", icon: "🔬", color: "#ef4444" },
    { name: "Design", icon: "🎨", color: "#ec4899" },
  ];

  // All categories
  const categories = [
    "Computer Science & IT",
    "Artificial Intelligence & Data Science",
    "Electronics & Communication",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Information Technology",
    "Cyber Security",
    "Robotics & Automation",
    "Internet of Things (IoT)",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Management Studies",
    "Commerce & Accounting",
    "Economics",
    "Life Sciences",
    "Biotechnology",
    "Environmental Science",
    "Humanities",
    "Psychology",
    "Sociology",
    "Political Science",
    "Law",
    "Education",
    "Media & Journalism",
    "Design & Animation",
    "Architecture",
    "Fine Arts",
    "Agriculture",
    "Food Technology",
    "Healthcare & Nursing",
    "Pharmacy",
    "Skill Development",
    "Competitive Exams",
    "Research & Innovation"
  ];

  return (
    <>
      {/* HEADER */}
      <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* LEFT */}
          <div className="header-left">
            <div className="logo-wrapper">
              <img src="/images/logo.png" alt="Logo" className="logo-img" />
              <div className="logo-text">
                <span className="logo-title">OpenEdu</span>
                <span className="logo-subtitle">Learn Smarter</span>
              </div>
            </div>

            <nav className="nav-links desktop-only">
              <a href="#" className="nav-link">
                <span>Tutorials</span>
                <span className="nav-arrow">▾</span>
              </a>
              <a href="#" className="nav-link">
                <span>Mentors</span>
                <span className="nav-arrow">▾</span>
              </a>
              <a href="#" className="nav-link">
                <span>Exercises</span>
                <span className="nav-arrow">▾</span>
              </a>
              <a href="#" className="nav-link">
                <span>Certificates</span>
                <span className="nav-arrow">▾</span>
              </a>
            </nav>
          </div>

          {/* CENTER SEARCH */}
          <div className={`header-search ${searchFocused ? 'focused' : ''}`}>
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search courses, tutorials..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {/* RIGHT */}
          <div className="header-right">
            <nav className="nav-links desktop-only">
              <a href="#" className="nav-link highlight">Upgrade</a>
              <a href="#" className="nav-link">Get Certified</a>
            </nav>

            <div className="header-actions">
              <button className="icon-btn">
                <FaSearch className="mobile-only" />
              </button>
              <button className="icon-btn notification-btn">
                🔔
                <span className="notification-badge">3</span>
              </button>
              <div className="profile-trigger" onClick={handleStudentProfileClick}>
                <img
                  src="https://i.pravatar.cc/40"
                  alt="Profile"
                  className="profile-img"
                />
                <div className="profile-status"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PROFILE SIDEBAR */}
      {showProfile && (
        <>
          <div className="profile-overlay" onClick={closeProfile}></div>
          <div className="modern-profile-sidebar">
            <button className="close-btn-modern" onClick={closeProfile}>
              ✕
            </button>

            <div className="profile-card-header">
              <div className="profile-avatar-wrapper">
                <img
                  src="https://i.pravatar.cc/80"
                  alt="Profile"
                  className="profile-avatar"
                />
                <div className="avatar-status"></div>
              </div>
              <div className="profile-info">
                <h3 className="profile-name">Mohanapriya Vadivel</h3>

                <p className="profile-time">
                  🕒 <strong>Last Login:</strong>{" "}
                  {lastLoginTime.toLocaleString()}
                </p>

                <p className="profile-time">
                  ⏰ <strong>Current Time:</strong>{" "}
                  {currentTime.toLocaleString()}
                </p>

                <p className="profile-email">mohana@example.com</p>

                <div className="profile-badges">
                  <span className="badge student-badge">Student</span>
                  <button onClick={switchMentor} className="badge mentor-badge">
                    Switch to Mentor
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="profile-stats">
              <div className="stat-item">
                <div className="stat-icon">📚</div>
                <div className="stat-details">
                  <span className="stat-value">12</span>
                  <span className="stat-label">Courses</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🏆</div>
                <div className="stat-details">
                  <span className="stat-value">8</span>
                  <span className="stat-label">Certificates</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">⭐</div>
                <div className="stat-details">
                  <span className="stat-value">1250</span>
                  <span className="stat-label">Points</span>
                </div>
              </div>
            </div>

            <button className="edit-profile-btn">
              Edit Profile
            </button>

            {/* Menu */}
            <nav className="profile-nav">
              <Link to="/student_profile/student_dashboard" className="profile-nav-item">
                <FaChartLine className="nav-item-icon" />
                <span>Dashboard</span>
                <span className="nav-arrow">›</span>
              </Link>
              <Link to="/student_profile/student_courses" className="profile-nav-item">
                <FaBookOpen className="nav-item-icon" />
                <span>My Courses</span>
                <span className="nav-arrow">›</span>
              </Link>
              <Link to="/student_profile/student_progress" className="profile-nav-item">
                <FaRocket className="nav-item-icon" />
                <span>Progress</span>
                <span className="nav-arrow">›</span>
              </Link>
              <Link to="/student_profile/student_assignments" className="profile-nav-item">
                <FaTasks className="nav-item-icon" />
                <span>Assignments</span>
                <span className="nav-arrow">›</span>
              </Link>
              <Link to="/student_profile/student_schedule" className="profile-nav-item">
                <FaCalendarAlt className="nav-item-icon" />
                <span>Schedule</span>
                <span className="nav-arrow">›</span>
              </Link>
              <Link to="/student_profile/student_leaderboard" className="profile-nav-item">
                <FaTrophy className="nav-item-icon" />
                <span>Leaderboard</span>
                <span className="nav-arrow">›</span>
              </Link>
              <Link to="/student_profile/student_bookmarks" className="profile-nav-item">
                <FaStar className="nav-item-icon" />
                <span>Bookmarks</span>
                <span className="nav-arrow">›</span>
              </Link>

              <div className="nav-divider"></div>

              <Link to="/" className="profile-nav-item logout-item">
                <FaSignOutAlt className="nav-item-icon" />
                <span>Log Out</span>
              </Link>
            </nav>
          </div>
        </>
      )}

      {/* CATEGORIES BAR */}
      <div className="categories-bar">
        <div className="categories-scroll">
          {categories.map((item, idx) => (
            <a key={idx} href="#" className="category-chip">
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="modern-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>Welcome to the Future of Learning</span>
          </div>

          <h1 className="hero-title">
            Learn Without
            <span className="gradient-text"> Limits</span>
          </h1>

          <p className="hero-description">
            Master new skills with our interactive tutorials, real-world projects,
            and expert-led courses. Start your journey today.
          </p>

          <div className="hero-search-wrapper">
            <div className="hero-search-box">
              <FaSearch className="hero-search-icon" />
              <input
                type="text"
                placeholder="What do you want to learn today?"
              />
              <button className="hero-search-btn">
                <span>Search</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
            <p className="search-suggestions">
              Popular: <a href="#">Python</a>, <a href="#">Web Development</a>,
              <a href="#">Data Science</a>, <a href="#">Machine Learning</a>
            </p>
          </div>

          {/* Featured Categories */}
          <div className="featured-categories">
            <p className="featured-title">Explore Top Categories</p>
            <div className="category-grid">
              {featuredCategories.map((cat, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="featured-card"
                  style={{ '--cat-color': cat.color }}
                >
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-name">{cat.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">10K+</span>
              <span className="stat-text">Active Students</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">500+</span>
              <span className="stat-text">Courses Available</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-text">Expert Instructors</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">95%</span>
              <span className="stat-text">Success Rate</span>
            </div>
          </div>

          <div className="cta-section">
            <a href="#" className="cta-link">
              Not sure where to begin?
              <span className="link-arrow">→</span>
            </a>
            <span className="cta-divider">|</span>
            <a href="#" className="cta-link">
              Take our skill assessment
              <span className="link-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default StudentProfile;