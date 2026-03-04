import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar';
export default function StudentLeaderboard() {
  const [timeFilter, setTimeFilter] = useState('all-time');
  const [categoryFilter, setCategoryFilter] = useState('overall');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Leaderboard data
  const leaderboardData = [
    {
      rank: 1,
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      score: 9847,
      level: 47,
      badge: "🏆",
      streak: 156,
      change: 0,
      completedCourses: 24,
      avgScore: 96.5
    },
    {
      rank: 2,
      name: "Mohanapriya Vadivel",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      score: 9721,
      level: 46,
      badge: "🥈",
      streak: 142,
      change: 1,
      completedCourses: 23,
      avgScore: 95.8
    },
    {
      rank: 3,
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      score: 9598,
      level: 45,
      badge: "🥉",
      streak: 138,
      change: -1,
      completedCourses: 22,
      avgScore: 94.2
    },
    {
      rank: 4,
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      score: 9234,
      level: 43,
      badge: "⭐",
      streak: 125,
      change: 2,
      completedCourses: 21,
      avgScore: 93.5
    },
    {
      rank: 5,
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      score: 8967,
      level: 42,
      badge: "⭐",
      streak: 118,
      change: -1,
      completedCourses: 20,
      avgScore: 92.8
    },
    {
      rank: 6,
      name: "Aisha Patel",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      score: 8845,
      level: 41,
      badge: "⭐",
      streak: 112,
      change: 1,
      completedCourses: 19,
      avgScore: 92.1
    },
    {
      rank: 7,
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      score: 8723,
      level: 40,
      badge: "✨",
      streak: 105,
      change: 0,
      completedCourses: 19,
      avgScore: 91.7
    },
    {
      rank: 8,
      name: "Sofia Martinez",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
      score: 8601,
      level: 39,
      badge: "✨",
      streak: 98,
      change: 3,
      completedCourses: 18,
      avgScore: 91.2
    },
    {
      rank: 9,
      name: "Ryan Thompson",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      score: 8478,
      level: 38,
      badge: "✨",
      streak: 92,
      change: -2,
      completedCourses: 18,
      avgScore: 90.8
    },
    {
      rank: 10,
      name: "Isabella Garcia",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      score: 8356,
      level: 37,
      badge: "✨",
      streak: 87,
      change: 1,
      completedCourses: 17,
      avgScore: 90.3
    }
  ];

  const categories = [
    { id: 'overall', label: 'Overall', icon: '🏅' },
    { id: 'assignments', label: 'Assignments', icon: '📝' },
    { id: 'quizzes', label: 'Quizzes', icon: '📊' },
    { id: 'projects', label: 'Projects', icon: '🚀' }
  ];

  const timeFilters = [
    { id: 'all-time', label: 'All Time' },
    { id: 'monthly', label: 'This Month' },
    { id: 'weekly', label: 'This Week' },
    { id: 'daily', label: 'Today' }
  ];

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(234, 179, 8, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(234, 179, 8, 0.6);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
        
        .stagger-1 { animation: slideInRight 0.6s ease-out 0.1s backwards; }
        .stagger-2 { animation: slideInRight 0.6s ease-out 0.2s backwards; }
        .stagger-3 { animation: slideInRight 0.6s ease-out 0.3s backwards; }
        .stagger-4 { animation: slideInRight 0.6s ease-out 0.4s backwards; }
        .stagger-5 { animation: slideInRight 0.6s ease-out 0.5s backwards; }
        .stagger-6 { animation: slideInRight 0.6s ease-out 0.6s backwards; }
        .stagger-7 { animation: slideInRight 0.6s ease-out 0.7s backwards; }
        .stagger-8 { animation: slideInRight 0.6s ease-out 0.8s backwards; }
        .stagger-9 { animation: slideInRight 0.6s ease-out 0.9s backwards; }
        .stagger-10 { animation: slideInRight 0.6s ease-out 1.0s backwards; }
        
        .rank-card:hover {
          transform: translateX(10px) scale(1.02);
          box-shadow: 0 10px 40px rgba(234, 179, 8, 0.3);
        }
        
        .top-three {
          position: relative;
          overflow: hidden;
        }
           .menu-btn {
    padding: '8px',
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    fontSize: '24px',
    cursor: 'pointer',
    borderRadius: '12px',
    transition: 'all 0.2s'
  }
        
        .top-three::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: shine 3s infinite;
        }
        
        @keyframes shine {
          0% {
            left: -100%;
          }
          50%, 100% {
            left: 100%;
          }
        }
        
        .category-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(234, 179, 8, 0.3);
        }
        
        .filter-btn:hover {
          background: linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(251, 191, 36, 0.2));
        }

        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        /* Mobile First - Base styles for mobile devices */
        @media screen and (max-width: 480px) {
          .title {
            font-size: 32px !important;
            letter-spacing: 4px !important;
          }
          
          .title-icon {
            font-size: 36px !important;
            display: block !important;
            margin: 0 auto 10px !important;
          }
          
          .subtitle {
            font-size: 14px !important;
            letter-spacing: 2px !important;
          }
          
          .stats-container {
            flex-direction: column;
            gap: 15px !important;
          }
          
          .stat-card {
            padding: 15px 25px !important;
            width: 100%;
          }
          
          .stat-value {
            font-size: 28px !important;
          }
          
          .category-container {
            flex-direction: column;
            gap: 10px !important;
          }
          
          .category-btn {
            width: 100%;
            justify-content: center;
            padding: 12px 20px !important;
          }
          
          .time-filter-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px !important;
          }
          
          .filter-btn {
            padding: 10px 15px !important;
            font-size: 12px !important;
          }
          
          .podium-wrapper {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .podium-card {
            padding: 20px !important;
          }
          
          .first-place {
            transform: scale(1) !important;
            order: 1 !important;
          }
          
          .second-place {
            order: 2 !important;
          }
          
          .third-place {
            order: 3 !important;
          }
          
          .podium-avatar {
            width: 100px !important;
            height: 100px !important;
          }
          
          .first-avatar {
            width: 120px !important;
            height: 120px !important;
          }
          
          .podium-name {
            font-size: 20px !important;
          }
          
          .podium-score {
            font-size: 28px !important;
          }
          
          .first-score {
            font-size: 32px !important;
          }
          
          .list-header {
            display: none !important;
          }
          
          .rank-card {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
            padding: 15px !important;
          }
          
          .rank-card:hover {
            transform: scale(1.02) !important;
          }
          
          .rank-number {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(148, 163, 184, 0.2);
          }
          
          .student-info {
            justify-content: flex-start !important;
            padding: 10px 0;
          }
          
          .mobile-stats-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 15px;
          }
          
          .mobile-stat-item {
            background: rgba(255, 255, 255, 0.03);
            padding: 10px;
            border-radius: 8px;
            text-align: center;
          }
          
          .mobile-stat-label {
            font-size: 11px;
            color: #94a3b8;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .mobile-stat-value {
            font-size: 16px;
            font-weight: 600;
            color: #eab308;
          }
        }
        
        /* Small Tablets and Large Phones (481px - 768px) */
        @media screen and (min-width: 481px) and (max-width: 768px) {
          .title {
            font-size: 42px !important;
            letter-spacing: 6px !important;
          }
          
          .title-icon {
            font-size: 48px !important;
          }
          
          .subtitle {
            font-size: 16px !important;
          }
          
          .stats-container {
            gap: 20px !important;
          }
          
          .stat-card {
            padding: 18px 30px !important;
          }
          
          .category-container {
            flex-wrap: wrap;
          }
          
          .category-btn {
            flex: 1;
            min-width: 150px;
          }
          
          .podium-wrapper {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: 25px !important;
          }
          
          .first-place {
            transform: scale(1.05) !important;
          }
          
          .list-header {
            grid-template-columns: 60px 2fr 100px 80px 80px 80px !important;
            font-size: 12px !important;
            gap: 10px !important;
          }
          
          .rank-card {
            grid-template-columns: 60px 2fr 100px 80px 80px 80px !important;
            gap: 10px !important;
            padding: 15px !important;
          }
          
          .hide-on-tablet {
            display: none !important;
          }
          
          .rank-text {
            font-size: 20px !important;
          }
          
          .avatar {
            width: 45px !important;
            height: 45px !important;
          }
          
          .student-name {
            font-size: 16px !important;
          }
        }
        
        /* Tablets (769px - 1024px) */
        @media screen and (min-width: 769px) and (max-width: 1024px) {
          .title {
            font-size: 48px !important;
          }
          
          .podium-wrapper {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 20px !important;
          }
          
          .first-place {
            transform: scale(1.08) !important;
          }
          
          .list-header {
            grid-template-columns: 70px 2fr 110px 90px 90px 90px 90px !important;
            gap: 15px !important;
          }
          
          .rank-card {
            grid-template-columns: 70px 2fr 110px 90px 90px 90px 90px !important;
            gap: 15px !important;
          }
          
          .hide-on-tablet {
            display: none !important;
          }
        }
        
        /* Laptops and Small Desktops (1025px - 1440px) */
        @media screen and (min-width: 1025px) and (max-width: 1440px) {
          .container {
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .main-content {
            max-width: 1200px;
          }
        }
        
        /* Large Desktops (1441px+) */
        @media screen and (min-width: 1441px) {
          .container {
            padding-left: 40px;
            padding-right: 40px;
          }
          
          .main-content {
            max-width: 1400px;
          }
          
          .title {
            font-size: 64px !important;
          }
        }
        
        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .category-btn,
          .filter-btn,
          .rank-card {
            cursor: default;
          }
          
          .category-btn:active {
            transform: scale(0.95);
          }
          
          .rank-card:active {
            transform: scale(0.98);
          }
        }
        
        /* Landscape Orientation for Mobile */
        @media screen and (max-height: 500px) and (orientation: landscape) {
          .header {
            padding: 20px 10px !important;
            margin-bottom: 20px !important;
          }
          
          .title {
            font-size: 28px !important;
          }
          
          .stats-container {
            display: none;
          }
          
          .podium-container {
            margin-bottom: 30px !important;
          }
        }
      `}</style>

      {/* Header */}
      <StudentSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div style={styles.header}>
        <div style={styles.headerContent}>
          <button
            onClick={() => setSidebarOpen(true)}
            style={styles.menuButton} className="menu-btn"
          >
            ☰
          </button>
          <div style={{ animation: 'slideDown 0.6s ease-out' }}>
            <h1 style={styles.title} className="title">
              <span style={styles.titleIcon} className="title-icon">🏆</span>
              LEADERBOARD
            </h1>
            <p style={styles.subtitle} className="subtitle">Compete. Excel. Dominate.</p>
          </div>

          <div style={styles.stats} className="stats-container">
            <div style={styles.statCard} className="stat-card">
              <div style={styles.statValue} className="stat-value">2,847</div>
              <div style={styles.statLabel}>Total Students</div>
            </div>
            <div style={styles.statCard} className="stat-card">
              <div style={styles.statValue} className="stat-value">156K</div>
              <div style={styles.statLabel}>Total Points</div>
            </div>
            <div style={styles.statCard} className="stat-card">
              <div style={styles.statValue} className="stat-value">847</div>
              <div style={styles.statLabel}>Active Today</div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.mainContent} className="main-content">
        {/* Filters */}
        <div style={styles.filters}>
          {/* Category Filter */}

          <div style={styles.categoryContainer} className="category-container">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                style={{
                  ...styles.categoryBtn,
                  ...(categoryFilter === cat.id ? styles.categoryBtnActive : {})
                }}
                className="category-btn"
              >
                <span style={styles.categoryIcon}>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Time Filter */}
          <div style={styles.timeFilterContainer} className="time-filter-container">
            {timeFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setTimeFilter(filter.id)}
                style={{
                  ...styles.filterBtn,
                  ...(timeFilter === filter.id ? styles.filterBtnActive : {})
                }}
                className="filter-btn"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <div style={styles.podiumContainer}>
          <div style={styles.podiumWrapper} className="podium-wrapper">
            {/* 2nd Place */}
            <div style={{ ...styles.podiumCard, ...styles.secondPlace }} className="stagger-1 second-place">
              <div style={styles.rankBadge2}>2nd</div>
              <img src={leaderboardData[1].avatar} alt={leaderboardData[1].name} style={styles.podiumAvatar} className="podium-avatar" />
              <div style={styles.badgeIcon}>{leaderboardData[1].badge}</div>
              <h3 style={styles.podiumName} className="podium-name">{leaderboardData[1].name}</h3>
              <div style={styles.podiumScore} className="podium-score">{leaderboardData[1].score.toLocaleString()}</div>
              <div style={styles.podiumLevel}>Level {leaderboardData[1].level}</div>
              <div style={styles.podiumStats}>
                <div style={styles.podiumStat}>
                  <span>🔥 {leaderboardData[1].streak}</span>
                </div>
                <div style={styles.podiumStat}>
                  <span>📚 {leaderboardData[1].completedCourses}</span>
                </div>
              </div>
            </div>

            {/* 1st Place */}
            <div style={{ ...styles.podiumCard, ...styles.firstPlace }} className="stagger-2 top-three first-place">
              <div style={styles.crownIcon}>👑</div>
              <div style={styles.rankBadge1}>1st</div>
              <img src={leaderboardData[0].avatar} alt={leaderboardData[0].name} style={{ ...styles.podiumAvatar, ...styles.firstAvatar }} className="podium-avatar first-avatar" />
              <div style={styles.badgeIcon}>{leaderboardData[0].badge}</div>
              <h3 style={styles.podiumName} className="podium-name">{leaderboardData[0].name}</h3>
              <div style={{ ...styles.podiumScore, ...styles.firstScore }} className="podium-score first-score">{leaderboardData[0].score.toLocaleString()}</div>
              <div style={styles.podiumLevel}>Level {leaderboardData[0].level}</div>
              <div style={styles.podiumStats}>
                <div style={styles.podiumStat}>
                  <span>🔥 {leaderboardData[0].streak}</span>
                </div>
                <div style={styles.podiumStat}>
                  <span>📚 {leaderboardData[0].completedCourses}</span>
                </div>
              </div>
            </div>

            {/* 3rd Place */}
            <div style={{ ...styles.podiumCard, ...styles.thirdPlace }} className="stagger-3 third-place">
              <div style={styles.rankBadge3}>3rd</div>
              <img src={leaderboardData[2].avatar} alt={leaderboardData[2].name} style={styles.podiumAvatar} className="podium-avatar" />
              <div style={styles.badgeIcon}>{leaderboardData[2].badge}</div>
              <h3 style={styles.podiumName} className="podium-name">{leaderboardData[2].name}</h3>
              <div style={styles.podiumScore} className="podium-score">{leaderboardData[2].score.toLocaleString()}</div>
              <div style={styles.podiumLevel}>Level {leaderboardData[2].level}</div>
              <div style={styles.podiumStats}>
                <div style={styles.podiumStat}>
                  <span>🔥 {leaderboardData[2].streak}</span>
                </div>
                <div style={styles.podiumStat}>
                  <span>📚 {leaderboardData[2].completedCourses}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rankings List */}
        <div style={styles.rankingsList}>
          <div style={styles.listHeader} className="list-header">
            <div style={styles.listHeaderItem}>Rank</div>
            <div style={{ ...styles.listHeaderItem, flex: 2 }}>Student</div>
            <div style={styles.listHeaderItem}>Score</div>
            <div style={styles.listHeaderItem}>Level</div>
            <div style={styles.listHeaderItem}>Streak</div>
            <div style={styles.listHeaderItem} className="hide-on-tablet">Courses</div>
            <div style={styles.listHeaderItem} className="hide-on-tablet">Avg %</div>
            <div style={styles.listHeaderItem} className="hide-on-tablet">Change</div>
          </div>

          {leaderboardData.slice(3).map((student, index) => (
            <div
              key={student.rank}
              style={styles.rankCard}
              className={`rank-card stagger-${index + 4}`}
            >
              <div style={styles.rankNumber}>
                <span style={styles.rankText} className="rank-text">#{student.rank}</span>
              </div>

              <div style={styles.studentInfo}>
                <img src={student.avatar} alt={student.name} style={styles.avatar} className="avatar" />
                <div>
                  <div style={styles.studentName} className="student-name">{student.name}</div>
                  <div style={styles.badgeSmall}>{student.badge}</div>
                </div>
              </div>

              <div style={styles.scoreValue}>{student.score.toLocaleString()}</div>

              <div style={styles.levelBadge}>
                <span>Lv {student.level}</span>
              </div>

              <div style={styles.streakInfo}>
                <span>🔥</span>
                <span style={styles.streakNumber}>{student.streak}</span>
              </div>

              <div style={styles.coursesInfo} className="hide-on-tablet">{student.completedCourses}</div>

              <div style={styles.avgScore} className="hide-on-tablet">{student.avgScore}%</div>

              <div style={styles.changeIndicator} className="hide-on-tablet">
                {student.change > 0 && (
                  <span style={styles.changeUp}>
                    ↑ {student.change}
                  </span>
                )}
                {student.change < 0 && (
                  <span style={styles.changeDown}>
                    ↓ {Math.abs(student.change)}
                  </span>
                )}
                {student.change === 0 && (
                  <span style={styles.changeNeutral}>-</span>
                )}
              </div>

              {/* Mobile Stats Grid - Only visible on mobile */}
              <div className="mobile-stats-grid" style={{ display: 'none', gridColumn: '1 / -1' }}>
                <div className="mobile-stat-item">
                  <div className="mobile-stat-label">Courses</div>
                  <div className="mobile-stat-value">{student.completedCourses}</div>
                </div>
                <div className="mobile-stat-item">
                  <div className="mobile-stat-label">Avg Score</div>
                  <div className="mobile-stat-value" style={{ color: '#a3e635' }}>{student.avgScore}%</div>
                </div>
                <div className="mobile-stat-item">
                  <div className="mobile-stat-label">Change</div>
                  <div className="mobile-stat-value">
                    {student.change > 0 && <span style={{ color: '#22c55e' }}>↑ {student.change}</span>}
                    {student.change < 0 && <span style={{ color: '#ef4444' }}>↓ {Math.abs(student.change)}</span>}
                    {student.change === 0 && <span style={{ color: '#64748b' }}>-</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
    color: '#fff',
    fontFamily: "'Rajdhani', sans-serif",
    paddingBottom: '60px'
  },
  header: {
    background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%)',
    borderBottom: '2px solid rgba(234, 179, 8, 0.3)',
    padding: '40px 20px',
    marginBottom: '40px'
  },
  headerContent: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  title: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '56px',
    fontWeight: 900,
    textAlign: 'center',
    margin: '0 0 10px 0',
    background: 'linear-gradient(135deg, #eab308 0%, #fbbf24 50%, #eab308 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textTransform: 'uppercase',
    letterSpacing: '8px',
    textShadow: '0 0 30px rgba(234, 179, 8, 0.5)'
  },
  titleIcon: {
    fontSize: '64px',
    marginRight: '20px',
    animation: 'pulse 2s infinite',
    display: 'inline-block'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#cbd5e1',
    letterSpacing: '4px',
    fontWeight: 300,
    marginBottom: '40px'
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap'
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(234, 179, 8, 0.3)',
    borderRadius: '15px',
    padding: '20px 40px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)'
  },
  statValue: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#eab308',
    fontFamily: "'Orbitron', sans-serif"
  },
  statLabel: {
    fontSize: '14px',
    color: '#94a3b8',
    marginTop: '5px',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  },
  mainContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px'
  },
  filters: {
    marginBottom: '40px'
  },
  categoryContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  categoryBtn: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(234, 179, 8, 0.3)',
    borderRadius: '15px',
    padding: '15px 30px',
    color: '#cbd5e1',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },
  categoryBtnActive: {
    background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.3), rgba(251, 191, 36, 0.3))',
    border: '2px solid #eab308',
    color: '#fff',
    boxShadow: '0 0 30px rgba(234, 179, 8, 0.4)'
  },
  categoryIcon: {
    fontSize: '24px'
  },
  timeFilterContainer: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  filterBtn: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(148, 163, 184, 0.3)',
    borderRadius: '10px',
    padding: '10px 25px',
    color: '#cbd5e1',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  filterBtnActive: {
    background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(251, 191, 36, 0.2))',
    border: '1px solid #eab308',
    color: '#eab308'
  },
  podiumContainer: {
    marginBottom: '60px'
  },
  podiumWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto',
    alignItems: 'end'
  },
  podiumCard: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    border: '2px solid rgba(148, 163, 184, 0.3)',
    borderRadius: '20px',
    padding: '30px',
    textAlign: 'center',
    position: 'relative',
    transition: 'all 0.4s ease',
    backdropFilter: 'blur(10px)'
  },
  firstPlace: {
    border: '3px solid #eab308',
    background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(251, 191, 36, 0.1) 100%)',
    transform: 'scale(1.1)',
    zIndex: 3,
    animation: 'glow 2s infinite',
    gridRow: '1',
    order: 2
  },
  secondPlace: {
    border: '2px solid #94a3b8',
    gridRow: '1',
    order: 1
  },
  thirdPlace: {
    border: '2px solid #cd7f32',
    gridRow: '1',
    order: 3
  },
  crownIcon: {
    fontSize: '48px',
    position: 'absolute',
    top: '-30px',
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'float 3s ease-in-out infinite'
  },
  rankBadge1: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'linear-gradient(135deg, #eab308, #fbbf24)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '16px',
    fontWeight: 700,
    fontFamily: "'Orbitron', sans-serif",
    boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)'
  },
  rankBadge2: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'linear-gradient(135deg, #94a3b8, #cbd5e1)',
    color: '#0f172a',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 700,
    fontFamily: "'Orbitron', sans-serif"
  },
  rankBadge3: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'linear-gradient(135deg, #cd7f32, #b8792e)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 700,
    fontFamily: "'Orbitron', sans-serif"
  },
  podiumAvatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '4px solid rgba(234, 179, 8, 0.5)',
    marginBottom: '15px',
    objectFit: 'cover'
  },
  firstAvatar: {
    width: '140px',
    height: '140px',
    border: '5px solid #eab308',
    boxShadow: '0 0 30px rgba(234, 179, 8, 0.6)'
  },
  badgeIcon: {
    fontSize: '48px',
    marginBottom: '10px'
  },
  podiumName: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '10px',
    color: '#fff'
  },
  podiumScore: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#eab308',
    fontFamily: "'Orbitron', sans-serif",
    marginBottom: '8px'
  },
  firstScore: {
    fontSize: '40px',
    background: 'linear-gradient(135deg, #eab308, #fbbf24)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  podiumLevel: {
    fontSize: '16px',
    color: '#94a3b8',
    marginBottom: '15px'
  },
  podiumStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  podiumStat: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '8px 16px',
    borderRadius: '10px',
    fontSize: '16px'
  },
  rankingsList: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '20px',
    padding: '20px',
    backdropFilter: 'blur(10px)'
  },
  listHeader: {
    display: 'grid',
    gridTemplateColumns: '80px 2fr 120px 100px 100px 100px 100px 100px',
    gap: '20px',
    padding: '15px 20px',
    borderBottom: '2px solid rgba(234, 179, 8, 0.3)',
    marginBottom: '10px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  listHeaderItem: {
    textAlign: 'center'
  },
  rankCard: {
    display: 'grid',
    gridTemplateColumns: '80px 2fr 120px 100px 100px 100px 100px 100px',
    gap: '20px',
    alignItems: 'center',
    padding: '20px',
    marginBottom: '10px',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '15px',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  rankNumber: {
    textAlign: 'center'
  },
  rankText: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#eab308',
    fontFamily: "'Orbitron', sans-serif"
  },
  studentInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '2px solid rgba(234, 179, 8, 0.5)',
    objectFit: 'cover'
  },
  studentName: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '5px'
  },
  badgeSmall: {
    fontSize: '16px'
  },
  scoreValue: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#eab308',
    fontFamily: "'Orbitron', sans-serif",
    textAlign: 'center'
  },
  levelBadge: {
    background: 'rgba(234, 179, 8, 0.2)',
    border: '1px solid rgba(234, 179, 8, 0.4)',
    padding: '8px 12px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 600,
    textAlign: 'center',
    color: '#eab308'
  },
  streakInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '16px'
  },
  streakNumber: {
    fontWeight: 600,
    color: '#f59e0b'
  },
  coursesInfo: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#cbd5e1',
    textAlign: 'center'
  },
  avgScore: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#a3e635',
    textAlign: 'center'
  },
  changeIndicator: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 700
  },
  changeUp: {
    color: '#22c55e'
  },
  changeDown: {
    color: '#ef4444'
  },
  changeNeutral: {
    color: '#64748b'
  }
};