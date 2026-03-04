import React, { useState, useEffect } from 'react';

function MentorProfile() {
  const [showProfile, setShowProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  const switchStudent = () => {
    window.location.href = "/student_profile";
  };

  const mentorData = {
    name: "Mohanapriya Vadivel",
    title: "Senior Software Engineering Mentor",
    id: "MNT-2024-042",
    email: "mohanapriya@eduhub.com",
    joinDate: "Jan 2022",
    stats: {
      totalStudents: 247,
      activeCourses: 8,
      rating: 4.9,
      totalReviews: 156,
      completionRate: 94,
      responseTime: "< 2 hours"
    },
    expertise: [
      { name: "Full Stack Development", level: 95 },
      { name: "System Design", level: 88 },
      { name: "DevOps & Cloud", level: 92 },
      { name: "Python & JavaScript", level: 98 },
      { name: "Data Structures & Algorithms", level: 90 },
    ],
    courses: [
      {
        id: 1,
        title: "Advanced Full Stack Web Development",
        students: 89,
        rating: 4.9,
        status: "active",
        progress: 75,
        color: "#3b82f6"
      },
      {
        id: 2,
        title: "System Design Masterclass",
        students: 62,
        rating: 4.8,
        status: "active",
        progress: 45,
        color: "#8b5cf6"
      },
      {
        id: 3,
        title: "Python for Data Science",
        students: 54,
        rating: 5.0,
        status: "active",
        progress: 90,
        color: "#10b981"
      },
      {
        id: 4,
        title: "DevOps Engineering Bootcamp",
        students: 42,
        rating: 4.7,
        status: "active",
        progress: 60,
        color: "#f59e0b"
      },
    ],
    recentActivity: [
      { action: "Graded", item: "Final Project - Web App Development", time: "2 hours ago", type: "grade" },
      { action: "Responded to", item: "Student Query: API Authentication", time: "5 hours ago", type: "response" },
      { action: "Published", item: "New Module: Microservices Architecture", time: "1 day ago", type: "publish" },
      { action: "Live Session", item: "System Design Interview Prep", time: "2 days ago", type: "session" },
    ],
    achievements: [
      { title: "Top Rated Mentor", icon: "⭐", earned: true },
      { title: "100+ Students", icon: "👥", earned: true },
      { title: "Expert Educator", icon: "🎓", earned: true },
      { title: "Fast Responder", icon: "⚡", earned: true },
    ],
    upcomingSessions: [
      { title: "Advanced React Patterns", date: "Feb 12, 2026", time: "2:00 PM", students: 24 },
      { title: "System Design Workshop", date: "Feb 14, 2026", time: "4:00 PM", students: 18 },
      { title: "Career Guidance Session", date: "Feb 16, 2026", time: "3:00 PM", students: 12 },
    ],
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
          font-family: 'Rajdhani', sans-serif;
        }
        
        .terminal-font {
          font-family: 'Orbitron', monospace;
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes progressGrow {
          from { width: 0; }
          to { width: var(--target-width); }
        }
        
        .scanline {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(transparent, #00f5ff, transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 10000;
          opacity: 0.1;
        }
        
        .grid-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }
        
        .card-animate {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .neon-border {
          box-shadow: 
            0 0 5px rgba(0, 245, 255, 0.5),
            inset 0 0 5px rgba(0, 245, 255, 0.2),
            0 0 20px rgba(0, 245, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .neon-border:hover {
          box-shadow: 
            0 0 10px rgba(0, 245, 255, 0.8),
            inset 0 0 10px rgba(0, 245, 255, 0.3),
            0 0 30px rgba(0, 245, 255, 0.4);
          transform: translateY(-2px);
        }
        
        .glow-text {
          text-shadow: 
            0 0 10px currentColor,
            0 0 20px currentColor;
        }
        
        .progress-bar-animated {
          animation: progressGrow 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div style={styles.page}>
        {/* Visual Effects */}
        <div className="scanline" />
        <div className="grid-bg" />
        
        {/* Gradient Orbs */}
        <div style={{
          position: 'fixed',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'float 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'fixed',
          bottom: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,0,110,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '-5s',
        }} />

        {/* HEADER */}
        <header style={{...styles.header, ...(scrolled ? styles.headerScrolled : {})}}>
          <div style={styles.headerContainer}>
            <div style={styles.logoWrapper}>
              <div style={styles.logoIcon} className="terminal-font">🎓</div>
              <div style={styles.logoText}>
                <span style={styles.logoTitle} className="terminal-font glow-text">EDUHUB</span>
                <span style={styles.logoSubtitle}>MENTOR PORTAL</span>
              </div>
            </div>

            <div style={styles.headerRight}>
              <button style={styles.iconBtn}>
                🔔
                <span style={styles.notificationBadge} className="terminal-font">5</span>
              </button>
              <div style={styles.profileTrigger} onClick={handleProfileClick}>
                <div style={styles.profileImgPlaceholder} className="terminal-font">JA</div>
                <div style={styles.profileStatus}></div>
              </div>
            </div>
          </div>
        </header>

        {/* PROFILE SIDEBAR */}
        {showProfile && (
          <>
            <div style={styles.profileOverlay} onClick={closeProfile}></div>
            <div style={styles.profileSidebar}>
              <button style={styles.closeBtn} onClick={closeProfile} className="terminal-font">
                ✕
              </button>

              <div style={styles.profileCardHeader}>
                <div style={styles.profileAvatarWrapper}>
                  <div style={styles.profileAvatar} className="terminal-font">JA</div>
                  <div style={styles.avatarStatus}></div>
                </div>
                <div style={styles.profileInfo}>
                  <h3 style={styles.profileName} className="terminal-font glow-text">{mentorData.name}</h3>
                  <p style={styles.profileEmail}>{mentorData.email}</p>
                  <div style={styles.profileBadges}>
                    <span style={styles.mentorBadge} className="terminal-font">MENTOR</span>
                    <button onClick={switchStudent} style={styles.switchBadge} className="terminal-font">
                      SWITCH TO STUDENT
                    </button>
                  </div>
                </div>
              </div>

              <div style={styles.profileStats}>
                <div style={styles.statItem}>
                  <div style={styles.statIcon}>👥</div>
                  <div style={styles.statDetails}>
                    <span style={styles.statValue} className="terminal-font glow-text">{mentorData.stats.totalStudents}</span>
                    <span style={styles.statLabel}>Students</span>
                  </div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statIcon}>📚</div>
                  <div style={styles.statDetails}>
                    <span style={styles.statValue} className="terminal-font glow-text">{mentorData.stats.activeCourses}</span>
                    <span style={styles.statLabel}>Courses</span>
                  </div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statIcon}>⭐</div>
                  <div style={styles.statDetails}>
                    <span style={styles.statValue} className="terminal-font glow-text">{mentorData.stats.rating}</span>
                    <span style={styles.statLabel}>Rating</span>
                  </div>
                </div>
              </div>

              <button style={styles.editProfileBtn} className="terminal-font">
                EDIT PROFILE
              </button>

              <nav style={styles.profileNav}>
                <a href="/mentor_profile/dashboard" style={{...styles.profileNavItem, ...styles.profileNavItemActive}}>
                  <span style={styles.navItemIcon}>📊</span>
                  <span>Dashboard</span>
                  <span style={styles.navArrow}>›</span>
                </a>
                <a href="/mentor_profile/courses" style={styles.profileNavItem}>
                  <span style={styles.navItemIcon}>📖</span>
                  <span>My Courses</span>
                  <span style={styles.navArrow}>›</span>
                </a>
                <a href="/mentor_profile/students" style={styles.profileNavItem}>
                  <span style={styles.navItemIcon}>👥</span>
                  <span>Students</span>
                  <span style={styles.navArrow}>›</span>
                </a>
                <a href="/mentor_profile/analytics" style={styles.profileNavItem}>
                  <span style={styles.navItemIcon}>📈</span>
                  <span>Analytics</span>
                  <span style={styles.navArrow}>›</span>
                </a>
                <a href="/mentor_profile/schedule" style={styles.profileNavItem}>
                  <span style={styles.navItemIcon}>📅</span>
                  <span>Schedule</span>
                  <span style={styles.navArrow}>›</span>
                </a>

                <div style={styles.navDivider}></div>

                <a href="/" style={{...styles.profileNavItem, ...styles.logoutItem}}>
                  <span style={styles.navItemIcon}>🚪</span>
                  <span>Log Out</span>
                </a>
              </nav>
            </div>
          </>
        )}

        {/* MAIN CONTENT */}
        <div style={styles.content}>
          {/* Hero Section */}
          <div 
            style={styles.heroSection} 
            className={`neon-border ${mounted ? 'card-animate' : ''}`}
            style={{...styles.heroSection, animationDelay: '0.1s'}}
          >
            <div style={styles.heroLeft}>
              <div style={styles.heroAvatar} className="terminal-font">JA</div>
              <div style={styles.heroInfo}>
                <h1 style={styles.heroName} className="terminal-font">
                  {mentorData.name}
                </h1>
                <p style={styles.heroTitle}>{mentorData.title}</p>
                <div style={styles.heroMeta}>
                  <span style={styles.heroMetaItem} className="terminal-font">
                    <span style={styles.metaIcon}>🆔</span>
                    {mentorData.id}
                  </span>
                  <span style={styles.heroMetaItem}>
                    <span style={styles.metaIcon}>📅</span>
                    Joined {mentorData.joinDate}
                  </span>
                </div>
              </div>
            </div>

            <div style={styles.heroStats}>
              <div style={styles.heroStatItem}>
                <div style={styles.heroStatValue} className="terminal-font glow-text">
                  {mentorData.stats.rating}⭐
                </div>
                <div style={styles.heroStatLabel}>Rating</div>
              </div>
              <div style={styles.heroStatDivider}></div>
              <div style={styles.heroStatItem}>
                <div style={styles.heroStatValue} className="terminal-font glow-text">
                  {mentorData.stats.completionRate}%
                </div>
                <div style={styles.heroStatLabel}>Completion</div>
              </div>
              <div style={styles.heroStatDivider}></div>
              <div style={styles.heroStatItem}>
                <div style={styles.heroStatValue} className="terminal-font glow-text">
                  {mentorData.stats.responseTime}
                </div>
                <div style={styles.heroStatLabel}>Response</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div 
            style={styles.tabs} 
            className={mounted ? 'card-animate' : ''}
            style={{...styles.tabs, animationDelay: '0.2s'}}
          >
            {['overview', 'courses', 'students', 'schedule'].map(tab => (
              <button
                key={tab}
                style={{
                  ...styles.tab,
                  ...(activeTab === tab ? styles.tabActive : {})
                }}
                onClick={() => setActiveTab(tab)}
                className="terminal-font"
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Stats Grid */}
          <div style={styles.statsGrid}>
            <div 
              style={{...styles.statCard, animationDelay: '0.3s'}} 
              className={`neon-border ${mounted ? 'card-animate' : ''}`}
            >
              <div style={styles.statCardHeader}>
                <span style={styles.statCardIcon}>👥</span>
                <span style={styles.statCardTitle} className="terminal-font">TOTAL STUDENTS</span>
              </div>
              <div style={styles.statCardValue} className="terminal-font glow-text">
                {mentorData.stats.totalStudents}
              </div>
              <div style={styles.statCardFooter}>
                <span style={styles.statCardTrend}>↗ +23 this month</span>
              </div>
            </div>

            <div 
              style={{...styles.statCard, animationDelay: '0.4s'}} 
              className={`neon-border ${mounted ? 'card-animate' : ''}`}
            >
              <div style={styles.statCardHeader}>
                <span style={styles.statCardIcon}>📚</span>
                <span style={styles.statCardTitle} className="terminal-font">ACTIVE COURSES</span>
              </div>
              <div style={styles.statCardValue} className="terminal-font glow-text">
                {mentorData.stats.activeCourses}
              </div>
              <div style={styles.statCardFooter}>
                <span style={styles.statCardTrend}>→ Stable</span>
              </div>
            </div>

            <div 
              style={{...styles.statCard, animationDelay: '0.5s'}} 
              className={`neon-border ${mounted ? 'card-animate' : ''}`}
            >
              <div style={styles.statCardHeader}>
                <span style={styles.statCardIcon}>⭐</span>
                <span style={styles.statCardTitle} className="terminal-font">AVG RATING</span>
              </div>
              <div style={styles.statCardValue} className="terminal-font glow-text">
                {mentorData.stats.rating}
              </div>
              <div style={styles.statCardFooter}>
                <span style={styles.statCardTrend}>{mentorData.stats.totalReviews} reviews</span>
              </div>
            </div>

            <div 
              style={{...styles.statCard, animationDelay: '0.6s'}} 
              className={`neon-border ${mounted ? 'card-animate' : ''}`}
            >
              <div style={styles.statCardHeader}>
                <span style={styles.statCardIcon}>✓</span>
                <span style={styles.statCardTitle} className="terminal-font">COMPLETION</span>
              </div>
              <div style={styles.statCardValue} className="terminal-font glow-text">
                {mentorData.stats.completionRate}%
              </div>
              <div style={styles.statCardFooter}>
                <span style={styles.statCardTrend}>↗ +2% vs last month</span>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div style={styles.twoColumn}>
            {/* Left Column */}
            <div style={styles.leftColumn}>
              {/* Expertise */}
              <div 
                style={{...styles.card, animationDelay: '0.7s'}} 
                className={`neon-border ${mounted ? 'card-animate' : ''}`}
              >
                <h3 style={styles.cardTitle} className="terminal-font">
                  <span style={{color: '#00f5ff'}}>▸</span> EXPERTISE
                </h3>
                {mentorData.expertise.map((skill, idx) => (
                  <div key={idx} style={{ marginBottom: 20 }}>
                    <div style={styles.expertiseRow}>
                      <span style={styles.expertiseName}>{skill.name}</span>
                      <span style={styles.expertiseValue} className="terminal-font glow-text">
                        {skill.level}%
                      </span>
                    </div>
                    <div style={styles.progressBg}>
                      <div
                        className={mounted ? "progress-bar-animated" : ""}
                        style={{
                          ...styles.progressFill,
                          '--target-width': `${skill.level}%`,
                          width: mounted ? `${skill.level}%` : 0,
                          animationDelay: `${0.8 + idx * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div 
                style={{...styles.card, animationDelay: '0.8s'}} 
                className={`neon-border ${mounted ? 'card-animate' : ''}`}
              >
                <h3 style={styles.cardTitle} className="terminal-font">
                  <span style={{color: '#fb5607'}}>▸</span> ACHIEVEMENTS
                </h3>
                <div style={styles.achievementsGrid}>
                  {mentorData.achievements.map((achievement, i) => (
                    <div key={i} style={styles.achievementCard}>
                      <div style={styles.achievementIcon}>{achievement.icon}</div>
                      <div style={styles.achievementTitle}>{achievement.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={styles.rightColumn}>
              {/* Active Courses */}
              <div 
                style={{...styles.card, animationDelay: '0.9s'}} 
                className={`neon-border ${mounted ? 'card-animate' : ''}`}
              >
                <h3 style={styles.cardTitle} className="terminal-font">
                  <span style={{color: '#8338ec'}}>▸</span> ACTIVE COURSES
                </h3>
                {mentorData.courses.map((course, idx) => (
                  <div key={course.id} style={styles.courseCard}>
                    <div style={styles.courseHeader}>
                      <div>
                        <h4 style={styles.courseTitle}>{course.title}</h4>
                        <div style={styles.courseMeta}>
                          <span style={styles.courseMetaItem}>
                            <span style={styles.courseIcon}>👥</span>
                            {course.students} students
                          </span>
                          <span style={styles.courseMetaItem}>
                            <span style={styles.courseIcon}>⭐</span>
                            {course.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={styles.courseProgress}>
                      <div style={styles.courseProgressInfo}>
                        <span style={styles.courseProgressLabel}>Progress</span>
                        <span style={styles.courseProgressValue} className="terminal-font">
                          {course.progress}%
                        </span>
                      </div>
                      <div style={styles.progressBg}>
                        <div
                          style={{
                            ...styles.progressFill,
                            width: mounted ? `${course.progress}%` : 0,
                            background: course.color,
                            boxShadow: `0 0 10px ${course.color}99`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Upcoming Sessions */}
              <div 
                style={{...styles.card, animationDelay: '1.0s'}} 
                className={`neon-border ${mounted ? 'card-animate' : ''}`}
              >
                <h3 style={styles.cardTitle} className="terminal-font">
                  <span style={{color: '#4ade80'}}>▸</span> UPCOMING SESSIONS
                </h3>
                {mentorData.upcomingSessions.map((session, idx) => (
                  <div key={idx} style={styles.sessionCard}>
                    <div style={styles.sessionIcon}>📅</div>
                    <div style={styles.sessionInfo}>
                      <div style={styles.sessionTitle}>{session.title}</div>
                      <div style={styles.sessionMeta}>
                        <span style={styles.sessionDate}>{session.date}</span>
                        <span style={styles.sessionTime}>{session.time}</span>
                      </div>
                      <div style={styles.sessionStudents}>
                        {session.students} students enrolled
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div 
                style={{...styles.card, animationDelay: '1.1s'}} 
                className={`neon-border ${mounted ? 'card-animate' : ''}`}
              >
                <h3 style={styles.cardTitle} className="terminal-font">
                  <span style={{color: '#ff006e'}}>▸</span> RECENT ACTIVITY
                </h3>
                {mentorData.recentActivity.map((activity, idx) => (
                  <div key={idx} style={styles.activityItem}>
                    <div style={styles.activityDot}></div>
                    <div style={styles.activityContent}>
                      <div style={styles.activityText}>
                        <span style={styles.activityAction}>{activity.action}</span>
                        {' '}{activity.item}
                      </div>
                      <div style={styles.activityTime}>{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0e27 0%, #16213e 50%, #0a0e27 100%)',
    color: '#e2e8f0',
    position: 'relative',
    paddingTop: 80,
  },
  
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(10, 14, 39, 0.8)',
    backdropFilter: 'blur(20px)',
    borderBottom: '2px solid rgba(0, 245, 255, 0.3)',
    padding: '15px 0',
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  
  headerScrolled: {
    background: 'rgba(10, 14, 39, 0.95)',
    borderBottom: '2px solid rgba(0, 245, 255, 0.5)',
    boxShadow: '0 0 30px rgba(0, 245, 255, 0.2)',
  },
  
  headerContainer: {
    maxWidth: 1600,
    margin: '0 auto',
    padding: '0 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  
  logoIcon: {
    fontSize: 32,
  },
  
  logoText: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  logoTitle: {
    fontSize: 20,
    fontWeight: 900,
    color: '#00f5ff',
    letterSpacing: 2,
  },
  
  logoSubtitle: {
    fontSize: 9,
    color: '#64748b',
    letterSpacing: 2,
  },
  
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  
  iconBtn: {
    background: 'rgba(0, 245, 255, 0.1)',
    border: '1px solid rgba(0, 245, 255, 0.3)',
    color: '#00f5ff',
    width: 45,
    height: 45,
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    background: '#ff006e',
    color: '#fff',
    width: 20,
    height: 20,
    borderRadius: '50%',
    fontSize: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #0a0e27',
  },
  
  profileTrigger: {
    position: 'relative',
    cursor: 'pointer',
  },
  
  profileImgPlaceholder: {
    width: 45,
    height: 45,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00f5ff, #ff006e)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 900,
    color: '#0a0e27',
    border: '2px solid rgba(0, 245, 255, 0.5)',
  },
  
  profileStatus: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    background: '#4ade80',
    borderRadius: '50%',
    border: '2px solid #0a0e27',
  },
  
  profileOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(4px)',
    zIndex: 1999,
  },
  
  profileSidebar: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: 360,
    height: '100%',
    background: 'linear-gradient(180deg, #0a0e27 0%, #16213e 100%)',
    borderLeft: '2px solid rgba(0, 245, 255, 0.3)',
    padding: 30,
    zIndex: 2000,
    overflowY: 'auto',
    boxShadow: '0 0 50px rgba(0, 245, 255, 0.2)',
  },
  
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    background: 'rgba(255, 0, 110, 0.2)',
    border: '1px solid rgba(255, 0, 110, 0.5)',
    color: '#ff006e',
    width: 40,
    height: 40,
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  
  profileCardHeader: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottom: '1px solid rgba(0, 245, 255, 0.2)',
  },
  
  profileAvatarWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00f5ff, #ff006e)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    fontWeight: 900,
    color: '#0a0e27',
    boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)',
  },
  
  avatarStatus: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    background: '#4ade80',
    borderRadius: '50%',
    border: '3px solid #0a0e27',
  },
  
  profileInfo: {
    textAlign: 'left',
  },
  
  profileName: {
    fontSize: 20,
    fontWeight: 900,
    color: '#00f5ff',
    marginBottom: 5,
  },
  
  profileEmail: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 15,
  },
  
  profileBadges: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
  },
  
  mentorBadge: {
    background: 'rgba(0, 245, 255, 0.2)',
    color: '#00f5ff',
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 10,
    fontWeight: 700,
    border: '1px solid rgba(0, 245, 255, 0.5)',
    letterSpacing: 1,
  },
  
  switchBadge: {
    background: 'transparent',
    color: '#ff006e',
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 10,
    fontWeight: 700,
    border: '1px solid rgba(255, 0, 110, 0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: 1,
  },
  
  profileStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 15,
    marginBottom: 25,
  },
  
  statItem: {
    background: 'rgba(0, 245, 255, 0.05)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 8,
    padding: 15,
    textAlign: 'center',
  },
  
  statIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  
  statDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  statValue: {
    fontSize: 20,
    fontWeight: 900,
    color: '#00f5ff',
    marginBottom: 3,
  },
  
  statLabel: {
    fontSize: 10,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  
  editProfileBtn: {
    width: '100%',
    background: 'rgba(0, 245, 255, 0.1)',
    border: '2px solid rgba(0, 245, 255, 0.5)',
    color: '#00f5ff',
    padding: '12px',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 25,
    transition: 'all 0.3s ease',
    letterSpacing: 1,
  },
  
  profileNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  
  profileNavItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 15px',
    borderRadius: 8,
    color: '#cbd5e1',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontSize: 14,
  },
  
  profileNavItemActive: {
    background: 'rgba(0, 245, 255, 0.1)',
    borderLeft: '3px solid #00f5ff',
    color: '#00f5ff',
  },
  
  navItemIcon: {
    fontSize: 18,
  },
  
  navArrow: {
    marginLeft: 'auto',
    fontSize: 18,
    color: '#64748b',
  },
  
  navDivider: {
    height: 1,
    background: 'rgba(0, 245, 255, 0.2)',
    margin: '15px 0',
  },
  
  logoutItem: {
    color: '#ff006e',
  },
  
  content: {
    padding: '30px',
    maxWidth: 1600,
    margin: '0 auto',
  },
  
  heroSection: {
    background: 'rgba(22, 33, 62, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 12,
    padding: 30,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 30,
  },
  
  heroLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 25,
  },
  
  heroAvatar: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00f5ff, #ff006e)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 36,
    fontWeight: 900,
    color: '#0a0e27',
    boxShadow: '0 0 40px rgba(0, 245, 255, 0.5)',
  },
  
  heroInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  
  heroName: {
    fontSize: 36,
    fontWeight: 900,
    color: '#00f5ff',
    letterSpacing: 1,
    textShadow: '0 0 20px #00f5ff',
  },
  
  heroTitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 5,
  },
  
  heroMeta: {
    display: 'flex',
    gap: 20,
    fontSize: 12,
  },
  
  heroMetaItem: {
    color: '#64748b',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  
  metaIcon: {
    fontSize: 14,
  },
  
  heroStats: {
    display: 'flex',
    gap: 30,
    alignItems: 'center',
  },
  
  heroStatItem: {
    textAlign: 'center',
  },
  
  heroStatValue: {
    fontSize: 28,
    fontWeight: 900,
    color: '#00f5ff',
    marginBottom: 5,
  },
  
  heroStatLabel: {
    fontSize: 11,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  
  heroStatDivider: {
    width: 1,
    height: 40,
    background: 'rgba(0, 245, 255, 0.3)',
  },
  
  tabs: {
    display: 'flex',
    gap: 10,
    marginBottom: 30,
    flexWrap: 'wrap',
  },
  
  tab: {
    background: 'rgba(22, 33, 62, 0.6)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    color: '#cbd5e1',
    padding: '12px 24px',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    transition: 'all 0.3s ease',
  },
  
  tabActive: {
    background: 'rgba(0, 245, 255, 0.2)',
    border: '1px solid rgba(0, 245, 255, 0.5)',
    color: '#00f5ff',
    boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
  },
  
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 20,
    marginBottom: 30,
  },
  
  statCard: {
    background: 'rgba(22, 33, 62, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 12,
    padding: 25,
  },
  
  statCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  
  statCardIcon: {
    fontSize: 24,
  },
  
  statCardTitle: {
    fontSize: 11,
    color: '#64748b',
    letterSpacing: 1,
  },
  
  statCardValue: {
    fontSize: 42,
    fontWeight: 900,
    color: '#00f5ff',
    marginBottom: 10,
  },
  
  statCardFooter: {
    fontSize: 12,
    color: '#94a3b8',
  },
  
  statCardTrend: {
    color: '#4ade80',
  },
  
  twoColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
  },
  
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  
  card: {
    background: 'rgba(22, 33, 62, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 12,
    padding: 25,
  },
  
  cardTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: '#e2e8f0',
    marginBottom: 20,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  
  expertiseRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14,
    marginBottom: 8,
  },
  
  expertiseName: {
    color: '#cbd5e1',
    fontWeight: 500,
  },
  
  expertiseValue: {
    color: '#00f5ff',
    fontWeight: 700,
  },
  
  progressBg: {
    height: 10,
    background: 'rgba(15, 23, 42, 0.8)',
    borderRadius: 10,
    overflow: 'hidden',
    border: '1px solid rgba(0, 245, 255, 0.2)',
  },
  
  progressFill: {
    height: '100%',
    background: 'linear-gradient(to right, #00f5ff, #8338ec)',
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0, 245, 255, 0.5)',
  },
  
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 15,
  },
  
  achievementCard: {
    background: 'rgba(0, 245, 255, 0.05)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 8,
    padding: 20,
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  
  achievementIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  
  achievementTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: '#e2e8f0',
  },
  
  courseCard: {
    background: 'rgba(0, 245, 255, 0.05)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
  },
  
  courseHeader: {
    marginBottom: 15,
  },
  
  courseTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: '#e2e8f0',
    marginBottom: 8,
  },
  
  courseMeta: {
    display: 'flex',
    gap: 15,
    fontSize: 12,
  },
  
  courseMetaItem: {
    color: '#94a3b8',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },
  
  courseIcon: {
    fontSize: 14,
  },
  
  courseProgress: {
    marginTop: 15,
  },
  
  courseProgressInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 6,
    fontSize: 11,
  },
  
  courseProgressLabel: {
    color: '#64748b',
    fontWeight: 600,
    letterSpacing: 1,
  },
  
  courseProgressValue: {
    color: '#00f5ff',
    fontWeight: 700,
  },
  
  sessionCard: {
    display: 'flex',
    gap: 15,
    padding: 15,
    background: 'rgba(0, 245, 255, 0.05)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 8,
    marginBottom: 12,
  },
  
  sessionIcon: {
    fontSize: 28,
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 245, 255, 0.1)',
    borderRadius: 8,
    border: '1px solid rgba(0, 245, 255, 0.3)',
  },
  
  sessionInfo: {
    flex: 1,
  },
  
  sessionTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: '#e2e8f0',
    marginBottom: 5,
  },
  
  sessionMeta: {
    display: 'flex',
    gap: 15,
    fontSize: 12,
    marginBottom: 5,
  },
  
  sessionDate: {
    color: '#00f5ff',
  },
  
  sessionTime: {
    color: '#94a3b8',
  },
  
  sessionStudents: {
    fontSize: 11,
    color: '#64748b',
  },
  
  activityItem: {
    display: 'flex',
    gap: 15,
    marginBottom: 15,
  },
  
  activityDot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: '#00f5ff',
    marginTop: 5,
    boxShadow: '0 0 10px rgba(0, 245, 255, 0.5)',
  },
  
  activityContent: {
    flex: 1,
  },
  
  activityText: {
    fontSize: 14,
    color: '#cbd5e1',
    marginBottom: 3,
  },
  
  activityAction: {
    color: '#00f5ff',
    fontWeight: 600,
  },
  
  activityTime: {
    fontSize: 11,
    color: '#64748b',
  },
};

export default MentorProfile;