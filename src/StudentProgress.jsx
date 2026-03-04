import React, { useState, useEffect } from "react";
import StudentSidebar from './StudentSidebar';

export default function StudentProgress() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const studentInfo = {
    name: "Mohanapriya Vadivel",
    id: "STU-2024-089",
    program: "Computer Science",
    gpa: 3.78,
    rank: "Top 15%",
    credits: 89,
  };

  const weeklyHours = [12, 15, 10, 18, 16, 14, 17, 13];

  const courses = [
    { name: "Maths", score: 92, color: "#f59e0b" },
    { name: "Physics", score: 88, color: "#3b82f6" },
    { name: "CS", score: 95, color: "#8b5cf6" },
    { name: "Chemistry", score: 90, color: "#10b981" },
  ];

  const skills = [
    { name: "Problem Solving", value: 88, color: "#6366f1" },
    { name: "Communication", value: 80, color: "#ec4899" },
    { name: "Creativity", value: 90, color: "#8b5cf6" },
    { name: "Time Management", value: 75, color: "#06b6d4" },
  ];

  const achievements = [
    { title: "Perfect Attendance", date: "Dec 2024", icon: "🎯", color: "#ef4444" },
    { title: "Top Performer", date: "Nov 2024", icon: "⭐", color: "#f59e0b" },
    { title: "Leadership Award", date: "Sep 2024", icon: "👑", color: "#8b5cf6" },
  ];

  const milestones = [
    { title: "Final Exams", progress: 65, color: "#f59e0b" },
    { title: "Project Submission", progress: 80, color: "#8b5cf6" },
    { title: "Presentation", progress: 90, color: "#10b981" },
  ];

  const maxWeek = Math.max(...weeklyHours);

  return (

    <div style={styles.page}>
      {/* Animated Background */}
      <style>
        {keyframes}

        {`
  /* =====================
     RESPONSIVE FIXES
  ====================== */

  @media (max-width: 1024px) {
    h1 {
      font-size: 38px !important;
    }
  }

  @media (max-width: 768px) {
    /* Page padding */
    div[style*="max-width: 1200px"] {
      padding: 80px 16px 32px !important;
    }

    /* Title */
    h1 {
      font-size: 32px !important;
    }

    /* Stats cards */
    div[style*="display: flex"][style*="gap: 16px"] {
      flex-direction: column !important;
    }

    /* Bar chart */
    div[style*="height: 240px"] {
      height: 200px !important;
    }

    /* Menu button */
    button {
      top: 16px !important;
      left: 16px !important;
    }
  }

  @media (max-width: 480px) {
    /* Title */
    h1 {
      font-size: 26px !important;
    }

    /* Card padding */
    div[style*="border-radius: 20px"] {
      padding: 20px !important;
    }

    /* Chart labels */
    span {
      font-size: 11px !important;
    }

    /* Bar chart layout */
    div[style*="justify-content: space-around"] {
      gap: 10px !important;
    }

    /* Achievement layout */
    div[style*="display: flex"][style*="gap: 16px"] {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
  }
  `}
      </style>

      <div style={styles.bgAnimation}>
        <div style={styles.bgCircle1}></div>
        <div style={styles.bgCircle2}></div>
        <div style={styles.bgCircle3}></div>
      </div>

      {/* Sidebar */}
      <StudentSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Menu Button */}
      <button style={styles.menuBtn} onClick={() => setSidebarOpen(true)}>
        <span style={styles.hamburger}>☰</span>
      </button>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Header */}
        <div style={{ ...styles.header, opacity: mounted ? 1 : 0 }}>
          <h1 style={styles.title}>
            Student Progress
            <span style={styles.titleGradient}> Dashboard</span>
          </h1>
          <p style={styles.subtitle}>Track your academic journey in real-time</p>
        </div>

        {/* Student Info Card */}
        <div style={{ ...styles.card, ...styles.fadeIn }}>
          <div style={styles.cardGlow}></div>
          <div style={styles.cardHeader}>
            <div>
              <h2 style={styles.studentName}>{studentInfo.name}</h2>
              <p style={styles.program}>
                <span style={styles.badge}>{studentInfo.program}</span>
              </p>
            </div>
          </div>

          <div style={styles.stats}>
            <Stat label="GPA" value={studentInfo.gpa} color="#6366f1" icon="📚" />
            <Stat label="Rank" value={studentInfo.rank} color="#8b5cf6" icon="🏆" />
            <Stat label="Credits" value={studentInfo.credits} color="#06b6d4" icon="⭐" />
          </div>
        </div>

        {/* Weekly Line Chart */}
        <div style={{ ...styles.card, ...styles.fadeIn, animationDelay: "0.1s" }}>
          <h3 style={styles.cardTitle}>
            <span style={styles.chartIcon}>📈</span>
            Weekly Study Hours
          </h3>
          <div style={styles.chartWrapper}>
            <svg viewBox="0 0 400 200" style={styles.svg}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="20"
                  y1={40 + i * 35}
                  x2="380"
                  y2={40 + i * 35}
                  stroke="#1e293b"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
              ))}

              {/* Area under line */}
              <polygon
                fill="url(#areaGradient)"
                points={`20,180 ${weeklyHours
                  .map((v, i) => {
                    const x = (i / (weeklyHours.length - 1)) * 360 + 20;
                    const y = 180 - (v / maxWeek) * 140;
                    return `${x},${y}`;
                  })
                  .join(" ")} 380,180`}
              />

              {/* Line */}
              <polyline
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={weeklyHours
                  .map((v, i) => {
                    const x = (i / (weeklyHours.length - 1)) * 360 + 20;
                    const y = 180 - (v / maxWeek) * 140;
                    return `${x},${y}`;
                  })
                  .join(" ")}
              />

              {/* Points */}
              {weeklyHours.map((v, i) => {
                const x = (i / (weeklyHours.length - 1)) * 360 + 20;
                const y = 180 - (v / maxWeek) * 140;
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="6" fill="#020617" stroke="#6366f1" strokeWidth="2" />
                    <circle cx={x} cy={y} r="3" fill="#6366f1" />
                  </g>
                );
              })}
            </svg>
            <div style={styles.chartLabels}>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"].map((day, i) => (
                <span key={i} style={styles.chartLabel}>{day}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Course Bar Chart */}
        <div style={{ ...styles.card, ...styles.fadeIn, animationDelay: "0.2s" }}>
          <h3 style={styles.cardTitle}>
            <span style={styles.chartIcon}>📊</span>
            Course Performance
          </h3>
          <div style={styles.barWrap}>
            {courses.map((c, idx) => (
              <div key={c.name} style={styles.barItem}>
                <div style={styles.barContainer}>
                  <div
                    style={{
                      ...styles.bar,
                      height: mounted ? c.score * 2 : 0,
                      background: `linear-gradient(to top, ${c.color}, ${c.color}dd)`,
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <span style={styles.barScore}>{c.score}%</span>
                  </div>
                </div>
                <span style={styles.barLabel}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div style={{ ...styles.card, ...styles.fadeIn, animationDelay: "0.3s" }}>
          <h3 style={styles.cardTitle}>
            <span style={styles.chartIcon}>🎯</span>
            Skills Development
          </h3>
          {skills.map((s, idx) => (
            <div key={s.name} style={{ marginBottom: 20 }}>
              <div style={styles.skillRow}>
                <span style={styles.skillName}>{s.name}</span>
                <span style={styles.skillValue}>{s.value}%</span>
              </div>
              <div style={styles.progressBg}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: mounted ? `${s.value}%` : "0%",
                    background: `linear-gradient(to right, ${s.color}, ${s.color}cc)`,
                    animationDelay: `${0.3 + idx * 0.1}s`,
                  }}
                >
                  <div style={styles.progressShine}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div style={{ ...styles.card, ...styles.fadeIn, animationDelay: "0.4s" }}>
          <h3 style={styles.cardTitle}>
            <span style={styles.chartIcon}>🏆</span>
            Recent Achievements
          </h3>
          <div style={styles.achievementGrid}>
            {achievements.map((a, i) => (
              <div key={i} style={styles.achievement}>
                <div style={{ ...styles.achievementIcon, background: a.color }}>
                  {a.icon}
                </div>
                <div style={styles.achievementContent}>
                  <p style={styles.achievementTitle}>{a.title}</p>
                  <small style={styles.achievementDate}>{a.date}</small>
                </div>
                <div style={styles.achievementBadge}>✓</div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div style={{ ...styles.card, ...styles.fadeIn, animationDelay: "0.5s" }}>
          <h3 style={styles.cardTitle}>
            <span style={styles.chartIcon}>🎓</span>
            Upcoming Milestones
          </h3>
          {milestones.map((m, i) => (
            <div key={i} style={styles.milestone}>
              <div style={styles.milestoneHeader}>
                <p style={styles.milestoneTitle}>{m.title}</p>
                <span style={styles.milestonePercent}>{m.progress}%</span>
              </div>
              <div style={styles.progressBg}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: mounted ? `${m.progress}%` : "0%",
                    background: `linear-gradient(to right, ${m.color}, ${m.color}cc)`,
                    animationDelay: `${0.5 + i * 0.1}s`,
                  }}
                >
                  <div style={styles.progressShine}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{keyframes}</style>
    </div>
  );
}

/* Reusable Stat Component */
function Stat({ label, value, color, icon }) {
  return (
    <div style={styles.stat}>
      <div style={{ ...styles.statIcon, background: `${color}22`, color }}>
        {icon}
      </div>
      <div>
        <p style={styles.statLabel}>{label}</p>
        <h3 style={{ ...styles.statValue, color }}>{value}</h3>
      </div>
    </div>
  );
}

/* Keyframe Animations */
const keyframes = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

/* Styles */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
    color: "#f1f5f9",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  bgAnimation: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
  },
  bgCircle1: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: "50%",
    background: "radial-gradient(circle, #6366f133 0%, transparent 70%)",
    top: "-10%",
    right: "-10%",
    animation: "float 20s ease-in-out infinite",
  },
  bgCircle2: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: "50%",
    background: "radial-gradient(circle, #8b5cf633 0%, transparent 70%)",
    bottom: "-10%",
    left: "-10%",
    animation: "float 15s ease-in-out infinite",
    animationDelay: "5s",
  },
  bgCircle3: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "radial-gradient(circle, #ec489933 0%, transparent 70%)",
    top: "50%",
    left: "50%",
    animation: "float 18s ease-in-out infinite",
    animationDelay: "10s",
  },
  menuBtn: {
    position: "fixed",
    top: 24,
    left: 24,
    width: 48,
    height: 48,
    fontSize: 24,
    background: "rgba(15, 23, 42, 0.8)",
    backdropFilter: "blur(10px)",
    color: "#fff",
    border: "1px solid #334155",
    borderRadius: 12,
    cursor: "pointer",
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  hamburger: {
    display: "block",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1200,
    margin: "0 auto",
    padding: "100px 20px 40px",
  },
  header: {
    textAlign: "center",
    marginBottom: 40,
    transition: "opacity 0.5s ease",
  },
  title: {
    fontSize: 48,
    fontWeight: 800,
    margin: "0 0 8px 0",
    letterSpacing: -1,
  },
  titleGradient: {
    background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 16,
    margin: 0,
  },
  card: {
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(10px)",
    border: "1px solid #1e293b",
    borderRadius: 20,
    padding: 28,
    marginBottom: 24,
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  fadeIn: {
    animation: "fadeIn 0.6s ease forwards",
    opacity: 0,
  },
  cardGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    background: "linear-gradient(90deg, transparent, #6366f1, transparent)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  studentName: {
    fontSize: 28,
    fontWeight: 700,
    margin: "0 0 8px 0",
  },
  program: {
    margin: 0,
  },
  badge: {
    display: "inline-block",
    padding: "6px 12px",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
  },
  stats: {
    display: "flex",
    gap: 16,
    marginTop: 24,
    flexWrap: "wrap",
  },
  stat: {
    flex: 1,
    minWidth: 140,
    display: "flex",
    gap: 12,
    alignItems: "center",
    padding: 16,
    background: "#1e293b",
    borderRadius: 12,
    border: "1px solid #334155",
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
  },
  statLabel: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: 600,
    margin: "0 0 4px 0",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 700,
    margin: 0,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  chartIcon: {
    fontSize: 24,
  },
  chartWrapper: {
    marginTop: 20,
  },
  svg: {
    width: "100%",
    filter: "drop-shadow(0 4px 12px rgba(99, 102, 241, 0.2))",
  },
  chartLabels: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
  chartLabel: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: 500,
  },
  barWrap: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    gap: 20,
    height: 240,
    marginTop: 20,
  },
  barItem: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  barContainer: {
    width: "100%",
    height: 200,
    display: "flex",
    alignItems: "flex-end",
  },
  bar: {
    width: "100%",
    borderRadius: "12px 12px 0 0",
    position: "relative",
    transition: "height 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 12,
    boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
  },
  barScore: {
    fontSize: 14,
    fontWeight: 700,
    color: "#fff",
  },
  barLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: "#94a3b8",
  },
  progressBg: {
    height: 10,
    background: "#1e293b",
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid #334155",
  },
  progressFill: {
    height: "100%",
    borderRadius: 10,
    transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
  },
  progressShine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "30%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
    animation: "shine 2s infinite",
  },
  skillRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 14,
    marginBottom: 8,
  },
  skillName: {
    fontWeight: 600,
  },
  skillValue: {
    fontWeight: 700,
    color: "#6366f1",
  },
  achievementGrid: {
    display: "grid",
    gap: 16,
  },
  achievement: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    padding: 16,
    background: "#1e293b",
    borderRadius: 12,
    border: "1px solid #334155",
    transition: "all 0.3s ease",
  },
  achievementIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    flexShrink: 0,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 15,
    fontWeight: 600,
    margin: "0 0 4px 0",
  },
  achievementDate: {
    color: "#64748b",
    fontSize: 12,
  },
  achievementBadge: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #10b981, #059669)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 700,
    flexShrink: 0,
  },
  milestone: {
    marginBottom: 20,
  },
  milestoneHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  milestoneTitle: {
    fontSize: 15,
    fontWeight: 600,
    margin: 0,
  },
  milestonePercent: {
    fontSize: 14,
    fontWeight: 700,
    color: "#6366f1",
  },
  muted: {
    color: "#64748b",
    fontSize: 12,
    margin: 0,
  },
};