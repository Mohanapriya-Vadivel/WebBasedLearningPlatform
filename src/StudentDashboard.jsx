import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar';


const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Performance data
  const performanceData = [
    { subject: 'Math', score: 92, avg: 78 },
    { subject: 'Physics', score: 88, avg: 82 },
    { subject: 'CS', score: 95, avg: 85 },
    { subject: 'English', score: 85, avg: 80 },
    { subject: 'Chemistry', score: 90, avg: 76 }
  ];

  // Weekly study time
  const studyTimeData = [
    { day: 'Mon', hours: 4.5 },
    { day: 'Tue', hours: 5.2 },
    { day: 'Wed', hours: 3.8 },
    { day: 'Thu', hours: 6.1 },
    { day: 'Fri', hours: 4.9 },
    { day: 'Sat', hours: 7.3 },
    { day: 'Sun', hours: 5.5 }
  ];

  // Grade distribution
  const gradeDistribution = [
    { grade: 'A+', count: 8, percentage: 27.6, color: '#06b6d4' },
    { grade: 'A', count: 12, percentage: 41.4, color: '#14b8a6' },
    { grade: 'B+', count: 6, percentage: 20.7, color: '#f59e0b' },
    { grade: 'B', count: 3, percentage: 10.3, color: '#f97316' }
  ];

  // Stats cards
  const stats = [
    {
      icon: '📚',
      label: 'Enrolled Courses',
      value: '8',
      change: '+2 from last sem',
      color: '#06b6d4',
      bg: 'rgba(6, 182, 212, 0.1)'
    },
    {
      icon: '🎯',
      label: 'Overall GPA',
      value: '3.85',
      change: '+0.15 improvement',
      color: '#14b8a6',
      bg: 'rgba(20, 184, 166, 0.1)'
    },
    {
      icon: '✅',
      label: 'Assignments Done',
      value: '87/95',
      change: '91.5% completion',
      color: '#f59e0b',
      bg: 'rgba(245, 158, 11, 0.1)'
    },
    {
      icon: '🏆',
      label: 'Class Rank',
      value: '#7',
      change: 'Top 10%',
      color: '#ec4899',
      bg: 'rgba(236, 72, 153, 0.1)'
    }
  ];

  // Upcoming classes
  const upcomingClasses = [
    { subject: 'Data Structures', time: '09:00 AM', room: 'Room 301', prof: 'Dr. Smith', color: '#06b6d4' },
    { subject: 'Algorithms', time: '11:00 AM', room: 'Room 205', prof: 'Prof. Johnson', color: '#14b8a6' },
    { subject: 'Database Systems', time: '02:00 PM', room: 'Room 108', prof: 'Dr. Williams', color: '#f59e0b' },
    { subject: 'Web Development', time: '04:00 PM', room: 'Lab 3', prof: 'Prof. Brown', color: '#f97316' }
  ];

  // Recent activity
  const recentActivity = [
    { action: 'Submitted', item: 'Algorithm Assignment #3', time: '2 hours ago', icon: '✅', color: '#14b8a6' },
    { action: 'Scored', item: '95% in Data Structures Quiz', time: '5 hours ago', icon: '⭐', color: '#f59e0b' },
    { action: 'Joined', item: 'Study Group for Final Exams', time: '1 day ago', icon: '👥', color: '#06b6d4' },
    { action: 'Started', item: 'Machine Learning Course', time: '2 days ago', icon: '▶️', color: '#f97316' }
  ];

  // Custom Bar Chart Component
  const BarChart = ({ data }) => {
    const maxValue = Math.max(...data.map(d => Math.max(d.score, d.avg)));

    return (
      <div style={{ width: '100%', height: '280px', padding: '20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '100%', gap: '20px' }}>
          {data.map((item, idx) => (
            <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '4px', alignItems: 'flex-end', height: '220px' }}>
                <div
                  style={{
                    width: '40%',
                    height: `${(item.score / maxValue) * 100}%`,
                    background: 'linear-gradient(to top, #14b8a6, #06b6d4)',
                    borderRadius: '8px 8px 0 0',
                    position: 'relative',
                    animation: `slideUp 0.6s ease-out ${idx * 0.1}s forwards`,
                    opacity: 0
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#06b6d4'
                  }}>
                    {item.score}
                  </span>
                </div>
                <div
                  style={{
                    width: '40%',
                    height: `${(item.avg / maxValue) * 100}%`,
                    background: '#475569',
                    borderRadius: '8px 8px 0 0',
                    opacity: 0.6,
                    animation: `slideUp 0.6s ease-out ${idx * 0.1 + 0.1}s forwards`
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    top: '-20px',
                    fontSize: '11px',
                    color: '#94a3b8'
                  }}>
                    {item.avg}
                  </span>
                </div>
              </div>
              <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500' }}>{item.subject}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Custom Line Chart Component
  const LineChart = ({ data }) => {
    const maxValue = Math.max(...data.map(d => d.hours));
    const points = data.map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - (d.hours / maxValue) * 80;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div style={{ width: '100%', height: '240px', position: 'relative' }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[0, 25, 50, 75, 100].map(y => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="rgba(148, 163, 184, 0.1)"
              strokeDasharray="2,2"
            />
          ))}
          <polygon
            points={`0,100 ${points} 100,100`}
            fill="url(#areaGradient)"
            style={{ animation: 'fadeIn 0.8s ease-out' }}
          />
          <polyline
            points={points}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: 'fadeIn 0.8s ease-out' }}
          />
          {data.map((d, i) => {
            const x = (i / (data.length - 1)) * 100;
            const y = 100 - (d.hours / maxValue) * 80;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="0.8"
                fill="#f59e0b"
                style={{ animation: `fadeIn 0.8s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
              />
            );
          })}
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          {data.map((d, i) => (
            <span key={i} style={{ fontSize: '11px', color: '#94a3b8' }}>{d.day}</span>
          ))}
        </div>
      </div>
    );
  };

  // Custom Donut Chart Component
  const DonutChart = ({ data }) => {
    let currentAngle = 0;
    const total = data.reduce((sum, item) => sum + item.count, 0);
    const radius = 40;
    const centerX = 50;
    const centerY = 50;
    const innerRadius = 25;

    const createArc = (startAngle, endAngle, color) => {
      const start = polarToCartesian(centerX, centerY, radius, endAngle);
      const end = polarToCartesian(centerX, centerY, radius, startAngle);
      const innerStart = polarToCartesian(centerX, centerY, innerRadius, endAngle);
      const innerEnd = polarToCartesian(centerX, centerY, innerRadius, startAngle);

      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      const d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        "L", innerEnd.x, innerEnd.y,
        "A", innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
        "Z"
      ].join(" ");

      return d;
    };

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    };

    return (
      <div style={{ width: '100%', height: '200px' }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          {data.map((item, idx) => {
            const angle = (item.count / total) * 360;
            const path = createArc(currentAngle, currentAngle + angle, item.color);
            currentAngle += angle;

            return (
              <path
                key={idx}
                d={path}
                fill={item.color}
                style={{
                  animation: `fadeIn 0.5s ease-out ${idx * 0.1}s forwards`,
                  opacity: 0
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Outfit', sans-serif;
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .stat-card {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .chart-container {
          animation: fadeIn 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .activity-item {
          animation: slideUp 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
          /* =======================
   RESPONSIVE STYLES
======================= */

/* Tablets (<= 1024px) */
@media (max-width: 1024px) {
  .charts-row,
  .bottom-row {
    grid-template-columns: 1fr !important;
  }

  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

/* Mobile (<= 768px) */
@media (max-width: 768px) {
  .main-padding {
    padding: 16px !important;
  }

  .stats-grid {
    grid-template-columns: 1fr !important;
  }

  .charts-row,
  .bottom-row {
    grid-template-columns: 1fr !important;
  }

  .schedule-grid {
    grid-template-columns: 1fr !important;
  }

  .header-title {
    font-size: 18px !important;
  }

  .stat-value {
    font-size: 28px !important;
  }
}

/* Small Mobile (<= 480px) */
@media (max-width: 480px) {
  .header-content {
    padding: 12px !important;
  }

  .chart-card,
  .study-card,
  .activity-card,
  .schedule-card {
    padding: 16px !important;
  }

  .menu-btn {
    font-size: 20px !important;
  }
}

      `}</style>

      {/* Sidebar */}
      <StudentSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerContent} className="header-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => setSidebarOpen(true)}
                style={styles.menuButton} className="menu-btn"
              >
                ☰
              </button>
              <div>
                <h1 style={styles.headerTitle} className="header-title">Welcome back, Mohanapriya! 👋</h1>
                <p style={styles.headerSubtitle}>Here's your learning overview for today</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button style={styles.iconButton}>🔍</button>
              <button style={styles.iconButton}>
                🔔
                <span style={styles.notificationDot}></span>
              </button>
              <button style={styles.iconButton}>⚙️</button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main style={styles.main} className="main-padding">
          {/* Stats Grid */}
          <div style={styles.statsGrid} className="stats-grid">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card hover-lift"
                style={{
                  ...styles.statCard,
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ ...styles.iconBox, background: stat.bg }}>
                    <span style={{ fontSize: '24px' }}>{stat.icon}</span>
                  </div>
                </div>
                <h3 style={styles.statLabel}>{stat.label}</h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
                  <p style={styles.statValue}  className="stat-value">{stat.value}</p>
                </div>
                <p style={{ ...styles.statChange, color: stat.color }}>{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div style={styles.chartsRow} className="charts-row">
            {/* Performance Chart */}
            <div className="chart-container" style={styles.chartCard}>
              <div style={styles.chartHeader}>
                <div>
                  <h3 style={styles.chartTitle}>Subject Performance</h3>
                  <p style={styles.chartSubtitle}>Your scores vs class average</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', fontSize: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#06b6d4' }}></div>
                    <span style={{ color: '#94a3b8' }}>Your Score</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#475569' }}></div>
                    <span style={{ color: '#94a3b8' }}>Class Avg</span>
                  </div>
                </div>
              </div>
              <BarChart data={performanceData} />
            </div>

            {/* Grade Distribution */}
            <div className="chart-container" style={styles.gradeCard}>
              <h3 style={styles.chartTitle}>Grade Distribution</h3>
              <DonutChart data={gradeDistribution} />
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {gradeDistribution.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: item.color }}></div>
                      <span style={{ fontSize: '14px', color: '#94a3b8' }}>Grade {item.grade}</span>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>{item.count} courses</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div style={styles.bottomRow} className="bottom-row">
            {/* Study Time */}
            <div className="chart-container" style={styles.studyCard}>
              <h3 style={styles.chartTitle}>Weekly Study Hours</h3>
              <LineChart data={studyTimeData} />
            </div>

            {/* Recent Activity */}
            <div className="chart-container" style={styles.activityCard}>
              <h3 style={styles.chartTitle}>Recent Activity</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {recentActivity.map((activity, idx) => (
                  <div
                    key={idx}
                    className="activity-item"
                    style={{
                      ...styles.activityItem,
                      animationDelay: `${idx * 0.08 + 0.4}s`
                    }}
                  >
                    <div style={{ ...styles.activityIcon, background: `${activity.color}33` }}>
                      <span style={{ fontSize: '18px' }}>{activity.icon}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={styles.activityText}>
                        <span style={{ color: '#94a3b8' }}>{activity.action}</span> {activity.item}
                      </p>
                      <p style={styles.activityTime}>{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="chart-container" style={styles.scheduleCard}>
            <h3 style={styles.chartTitle}>Today's Schedule</h3>
            <div style={styles.scheduleGrid} className="schedule-grid">
              {upcomingClasses.map((cls, idx) => (
                <div
                  key={idx}
                  className="hover-lift"
                  style={{
                    ...styles.classCard,
                    borderLeft: `4px solid ${cls.color}`,
                    animation: `slideUp 0.5s ease-out ${0.5 + idx * 0.1}s forwards`,
                    opacity: 0
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div>
                      <h4 style={styles.className}>{cls.subject}</h4>
                      <p style={styles.classTime}>{cls.time}</p>
                    </div>
                    <span style={{ fontSize: '18px' }}>🕐</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <p style={styles.classRoom}>{cls.room}</p>
                    <p style={styles.classProf}>{cls.prof}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    color: '#f3f4f6',
    fontFamily: "'Outfit', sans-serif"
  },
  mainContent: {
    minHeight: '100vh'
  },
  header: {
    position: 'sticky',
    top: 0,
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
    zIndex: 50
  },
  headerContent: {
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuButton: {
    padding: '8px',
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    fontSize: '24px',
    cursor: 'pointer',
    borderRadius: '12px',
    transition: 'all 0.2s'
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  headerSubtitle: {
    fontSize: '14px',
    color: '#94a3b8',
    marginTop: '4px'
  },
  iconButton: {
    padding: '10px',
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '12px',
    transition: 'all 0.2s',
    position: 'relative'
  },
  notificationDot: {
    position: 'absolute',
    top: '6px',
    right: '6px',
    width: '8px',
    height: '8px',
    background: '#ef4444',
    borderRadius: '50%',
    animation: 'pulse 2s infinite'
  },
  main: {
    padding: '24px'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '24px'
  },
  statCard: {
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    borderRadius: '16px',
    padding: '24px',
    cursor: 'pointer'
  },
  iconBox: {
    padding: '12px',
    borderRadius: '12px'
  },
  statLabel: {
    color: '#94a3b8',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px'
  },
  statValue: {
    fontSize: '36px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #06b6d4, #14b8a6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  statChange: {
    fontSize: '12px',
    fontWeight: '500',
    marginTop: '8px'
  },
  chartsRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px',
    marginBottom: '24px'
  },
  chartCard: {
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    borderRadius: '16px',
    padding: '24px'
  },
  gradeCard: {
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    borderRadius: '16px',
    padding: '24px'
  },
  chartHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px'
  },
  chartTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '24px'
  },
  chartSubtitle: {
    fontSize: '14px',
    color: '#94a3b8',
    marginTop: '4px'
  },
  bottomRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px',
    marginBottom: '24px'
  },
  studyCard: {
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    borderRadius: '16px',
    padding: '24px'
  },
  activityCard: {
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    borderRadius: '16px',
    padding: '24px'
  },
  activityItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '12px',
    borderRadius: '12px',
    transition: 'all 0.3s',
    cursor: 'pointer'
  },
  activityIcon: {
    padding: '8px',
    borderRadius: '8px',
    marginTop: '2px'
  },
  activityText: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'white'
  },
  activityTime: {
    fontSize: '12px',
    color: '#64748b',
    marginTop: '4px'
  },
  scheduleCard: {
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    borderRadius: '16px',
    padding: '24px'
  },
  scheduleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px'
  },
  classCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '16px',
    cursor: 'pointer'
  },
  className: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '14px'
  },
  classTime: {
    fontSize: '11px',
    color: '#94a3b8',
    fontFamily: 'monospace',
    marginTop: '4px'
  },
  classRoom: {
    fontSize: '12px',
    color: '#94a3b8'
  },
  classProf: {
    fontSize: '12px',
    color: '#64748b'
  }
};

export default StudentDashboard;