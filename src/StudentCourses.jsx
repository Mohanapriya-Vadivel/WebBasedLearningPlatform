import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar';

const StudentCourses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Courses');
  const [searchTerm, setSearchTerm] = useState('');
  const [animateProgress, setAnimateProgress] = useState(false);

  React.useEffect(() => {
    setAnimateProgress(true);
  }, []);

  const courses = [
    {
      id: 1,
      title: 'Data Structures & Algorithms',
      category: 'Programming',
      instructor: 'Dr. Sarah Mitchell',
      progress: 75,
      timeLeft: '12 hrs left',
      icon: '💻',
      gradient: 'linear-gradient(135deg, #00d4ff, #ff3366)',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      category: 'Design',
      instructor: 'Prof. James Chen',
      progress: 92,
      timeLeft: '2 hrs left',
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #ff3366, #ff9500)',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      category: 'Web Development',
      instructor: 'Dr. Emily Rodriguez',
      progress: 45,
      timeLeft: '28 hrs left',
      icon: '🌐',
      gradient: 'linear-gradient(135deg, #00ff88, #00d4ff)',
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'Machine Learning Basics',
      category: 'AI & ML',
      instructor: 'Prof. David Kumar',
      progress: 100,
      timeLeft: 'Completed',
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #ffb800, #ff3366)',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Data Analysis with Python',
      category: 'Data Science',
      instructor: 'Dr. Lisa Thompson',
      progress: 60,
      timeLeft: '16 hrs left',
      icon: '📊',
      gradient: 'linear-gradient(135deg, #9945ff, #ff3366)',
      status: 'in-progress'
    },
    {
      id: 6,
      title: 'Network Security Essentials',
      category: 'Cybersecurity',
      instructor: 'Prof. Michael Zhang',
      progress: 100,
      timeLeft: 'Completed',
      icon: '🔒',
      gradient: 'linear-gradient(135deg, #00d4ff, #9945ff)',
      status: 'completed'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      activeFilter === 'All Courses' ||
      (activeFilter === 'In Progress' && course.status === 'in-progress') ||
      (activeFilter === 'Completed' && course.status === 'completed');
    
    return matchesSearch && matchesFilter;
  });

  const stats = {
    enrolled: courses.length,
    inProgress: courses.filter(c => c.status === 'in-progress').length,
    completed: courses.filter(c => c.status === 'completed').length,
    certificates: courses.filter(c => c.status === 'completed').length
  };

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        
        @keyframes bgShift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 50px) scale(1.1); }
          66% { transform: translate(50px, -50px) scale(0.9); }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .hamburger:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: #00d4ff;
        }

        .hamburger:hover .hamburgerLine {
          background: #00d4ff;
        }

        @media (max-width: 768px) {
          .pageTitle {
            font-size: 2rem !important;
          }
          .coursesGrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div style={styles.bgAnimation}></div>
      
      {/* Sidebar */}
      <StudentSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.content}>
          {/* Header with Hamburger */}
          <header style={styles.header}>
            <div style={styles.headerLeft}>
              <button 
                className="hamburger"
                style={styles.hamburger}
                onClick={() => setSidebarOpen(true)}
              >
                <div className="hamburgerLine" style={styles.hamburgerLine}></div>
                <div className="hamburgerLine" style={styles.hamburgerLine}></div>
                <div className="hamburgerLine" style={styles.hamburgerLine}></div>
              </button>
              <div>
                <h1 className="pageTitle" style={styles.pageTitle}>My Courses</h1>
                <p style={styles.subtitle}>Continue your learning journey</p>
              </div>
            </div>
            <div style={styles.studentInfo}>
              <img 
                src="https://i.pravatar.cc/100?img=45" 
                alt="Student Avatar" 
                style={styles.studentAvatar}
              />
              <div>
                <div style={styles.studentName}>Mohanapriya Vadivel</div>
                <div style={styles.studentId}>STU-2024-089</div>
              </div>
            </div>
          </header>

          {/* Stats Bar */}
          <div style={styles.statsBar}>
            <div style={{...styles.statCard, ...styles.statCard1}}>
              <div style={styles.statLabel}>Enrolled Courses</div>
              <div style={styles.statValue}>{stats.enrolled}</div>
            </div>
            <div style={{...styles.statCard, ...styles.statCard2}}>
              <div style={styles.statLabel}>In Progress</div>
              <div style={styles.statValue}>{stats.inProgress}</div>
            </div>
            <div style={{...styles.statCard, ...styles.statCard3}}>
              <div style={styles.statLabel}>Completed</div>
              <div style={styles.statValue}>{stats.completed}</div>
            </div>
            <div style={{...styles.statCard, ...styles.statCard4}}>
              <div style={styles.statLabel}>Certificates</div>
              <div style={styles.statValue}>{stats.certificates}</div>
            </div>
          </div>

          {/* Filter Section */}
          <div style={styles.filterSection}>
            <div style={styles.filterTabs}>
              {['All Courses', 'In Progress', 'Completed', 'Upcoming'].map(filter => (
                <button
                  key={filter}
                  style={{
                    ...styles.filterTab,
                    ...(activeFilter === filter ? styles.filterTabActive : {})
                  }}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div style={styles.searchBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input 
                type="text" 
                placeholder="Search courses..."
                style={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Courses Grid */}
          <div className="coursesGrid" style={styles.coursesGrid}>
            {filteredCourses.map((course, index) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                animateProgress={animateProgress}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ course, animateProgress, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.courseCard,
        ...(isHovered ? styles.courseCardHover : {}),
        animation: `fadeIn 0.8s ease-out ${0.4 + index * 0.1}s both`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{...styles.courseHeader, background: course.gradient}}>
        <div style={styles.courseHeaderOverlay}></div>
        <div style={styles.courseIcon}>{course.icon}</div>
      </div>
      
      <div style={styles.courseBody}>
        <span style={styles.courseCategory}>{course.category}</span>
        <h3 style={styles.courseTitle}>{course.title}</h3>
        <div style={styles.courseInstructor}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M12 14c-6 0-8 4-8 4v2h16v-2s-2-4-8-4z"></path>
          </svg>
          {course.instructor}
        </div>
        
        <div style={styles.courseProgressSection}>
          <div style={styles.progressHeader}>
            <span style={styles.progressLabel}>Course Progress</span>
            <span style={styles.progressPercentage}>{course.progress}%</span>
          </div>
          <div style={styles.progressBar}>
            <div 
              style={{
                ...styles.progressFill,
                width: animateProgress ? `${course.progress}%` : '0%'
              }}
            >
              <div style={styles.progressShimmer}></div>
            </div>
          </div>
        </div>
        
        <div style={styles.courseFooter}>
          <div style={styles.courseInfoItem}>
            {course.status === 'completed' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            )}
            {course.timeLeft}
          </div>
          <button style={styles.btnContinue}>
            {course.status === 'completed' ? 'Review' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'DM Sans', sans-serif",
    background: '#050b14',
    color: '#ffffff',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden'
  },
  bgAnimation: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    opacity: 0.4,
    background: `
      radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 51, 102, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 184, 0, 0.1) 0%, transparent 50%)
    `,
    animation: 'bgShift 20s ease infinite'
  },
  mainContent: {
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh'
  },
  content: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3rem',
    animation: 'slideDown 0.6s ease-out',
    flexWrap: 'wrap',
    gap: '1.5rem'
  },
  headerLeft: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  },
  hamburger: {
    background: 'rgba(15, 27, 46, 0.8)',
    border: '1px solid rgba(0, 212, 255, 0.3)',
    borderRadius: '12px',
    padding: '0.75rem',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },
  hamburgerLine: {
    width: '24px',
    height: '2px',
    background: '#00d4ff',
    borderRadius: '2px',
    transition: 'all 0.3s ease'
  },
  pageTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '3.5rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #00d4ff, #ff3366)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
    letterSpacing: '-0.03em'
  },
  subtitle: {
    color: '#8b9bb0',
    fontSize: '1.1rem'
  },
  studentInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 1.5rem',
    background: 'rgba(15, 27, 46, 0.6)',
    borderRadius: '50px',
    border: '1px solid rgba(0, 212, 255, 0.2)',
    backdropFilter: 'blur(10px)'
  },
  studentAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '2px solid #00d4ff',
    objectFit: 'cover'
  },
  studentName: {
    fontWeight: 600,
    fontSize: '1.1rem'
  },
  studentId: {
    color: '#8b9bb0',
    fontSize: '0.9rem'
  },
  statsBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
    animation: 'fadeIn 0.8s ease-out 0.2s both'
  },
  statCard: {
    padding: '1.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(0, 212, 255, 0.3)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  statCard1: {
    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 212, 255, 0.05))'
  },
  statCard2: {
    background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.1), rgba(255, 51, 102, 0.05))',
    borderColor: 'rgba(255, 51, 102, 0.3)'
  },
  statCard3: {
    background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.1), rgba(255, 184, 0, 0.05))',
    borderColor: 'rgba(255, 184, 0, 0.3)'
  },
  statCard4: {
    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 255, 136, 0.05))',
    borderColor: 'rgba(0, 255, 136, 0.3)'
  },
  statLabel: {
    color: '#8b9bb0',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  statValue: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '2rem',
    fontWeight: 700,
    color: '#ffffff'
  },
  filterSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem',
    animation: 'fadeIn 0.8s ease-out 0.3s both'
  },
  filterTabs: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  filterTab: {
    padding: '0.75rem 1.5rem',
    background: 'rgba(15, 27, 46, 0.6)',
    border: '1px solid rgba(139, 155, 176, 0.2)',
    borderRadius: '50px',
    color: '#8b9bb0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: 500,
    fontSize: '0.95rem'
  },
  filterTabActive: {
    background: 'linear-gradient(135deg, #00d4ff, rgba(0, 212, 255, 0.8))',
    borderColor: '#00d4ff',
    color: '#0a1628',
    fontWeight: 600
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(15, 27, 46, 0.6)',
    border: '1px solid rgba(139, 155, 176, 0.2)',
    borderRadius: '50px',
    padding: '0.75rem 1.5rem',
    gap: '0.75rem',
    width: '300px',
    maxWidth: '100%'
  },
  searchInput: {
    background: 'none',
    border: 'none',
    outline: 'none',
    color: '#ffffff',
    width: '100%',
    fontSize: '0.95rem'
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
    gap: '2rem'
  },
  courseCard: {
    background: '#0f1b2e',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(139, 155, 176, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative'
  },
  courseCardHover: {
    transform: 'translateY(-10px) scale(1.02)',
    borderColor: '#00d4ff',
    boxShadow: '0 20px 60px rgba(0, 212, 255, 0.3)'
  },
  courseHeader: {
    height: '180px',
    position: 'relative',
    overflow: 'hidden'
  },
  courseHeaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
    `
  },
  courseIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '4rem',
    opacity: 0.3
  },
  courseBody: {
    padding: '1.5rem',
    position: 'relative',
    zIndex: 1
  },
  courseCategory: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    background: 'rgba(0, 212, 255, 0.15)',
    color: '#00d4ff',
    borderRadius: '50px',
    fontSize: '0.8rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '1rem'
  },
  courseTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
    color: '#ffffff'
  },
  courseInstructor: {
    color: '#8b9bb0',
    fontSize: '0.95rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  courseProgressSection: {
    margin: '1.5rem 0'
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem'
  },
  progressLabel: {
    color: '#8b9bb0',
    fontSize: '0.85rem'
  },
  progressPercentage: {
    fontWeight: 700,
    color: '#00d4ff',
    fontSize: '0.95rem'
  },
  progressBar: {
    height: '8px',
    background: 'rgba(139, 155, 176, 0.2)',
    borderRadius: '50px',
    overflow: 'hidden',
    position: 'relative'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #00d4ff, #ff3366)',
    borderRadius: '50px',
    transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden'
  },
  progressShimmer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    animation: 'shimmer 2s infinite'
  },
  courseFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(139, 155, 176, 0.15)'
  },
  courseInfoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#8b9bb0',
    fontSize: '0.85rem'
  },
  btnContinue: {
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, #00d4ff, rgba(0, 212, 255, 0.8))',
    color: '#0a1628',
    border: 'none',
    borderRadius: '50px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  }
};

export default StudentCourses;