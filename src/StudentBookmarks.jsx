import React, { useState, useEffect } from 'react';

function StudentBookmarks() {
  const [showProfile, setShowProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredBookmark, setHoveredBookmark] = useState(null);
  const [selectedBookmarks, setSelectedBookmarks] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    window.location.href = "/teacher_profile";
  };

  // Bookmark categories
  const categories = [
    { id: "all", name: "All Bookmarks", icon: "📚", count: 24 },
    { id: "tutorials", name: "Tutorials", icon: "📖", count: 8 },
    { id: "courses", name: "Courses", icon: "🎓", count: 6 },
    { id: "articles", name: "Articles", icon: "📝", count: 5 },
    { id: "videos", name: "Videos", icon: "🎬", count: 3 },
    { id: "projects", name: "Projects", icon: "💼", count: 2 },
  ];

  // Sample bookmarks data
  const bookmarks = [
    {
      id: 1,
      title: "Complete Python Programming Bootcamp",
      description: "Master Python programming from basics to advanced concepts",
      category: "courses",
      type: "Course",
      url: "#",
      color: "#3b82f6",
      icon: "🐍",
      progress: 45,
      savedDate: "2 days ago",
      tags: ["Python", "Programming", "Backend"],
    },
    {
      id: 2,
      title: "React Hooks Deep Dive Tutorial",
      description: "Comprehensive guide to using React Hooks effectively",
      category: "tutorials",
      type: "Tutorial",
      url: "#",
      color: "#61dafb",
      icon: "⚛️",
      savedDate: "5 days ago",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 3,
      title: "Machine Learning Algorithms Explained",
      description: "Understanding core ML algorithms with practical examples",
      category: "articles",
      type: "Article",
      url: "#",
      color: "#f59e0b",
      icon: "🤖",
      savedDate: "1 week ago",
      tags: ["ML", "AI", "Data Science"],
    },
    {
      id: 4,
      title: "Full Stack Web Development Project",
      description: "Build a complete e-commerce application from scratch",
      category: "projects",
      type: "Project",
      url: "#",
      color: "#8b5cf6",
      icon: "💻",
      progress: 78,
      savedDate: "3 days ago",
      tags: ["Full Stack", "MERN", "Project"],
    },
    {
      id: 5,
      title: "CSS Grid Layout Masterclass",
      description: "Learn modern CSS Grid techniques for responsive design",
      category: "tutorials",
      type: "Tutorial",
      url: "#",
      color: "#ec4899",
      icon: "🎨",
      savedDate: "4 days ago",
      tags: ["CSS", "Design", "Frontend"],
    },
    {
      id: 6,
      title: "Data Structures & Algorithms Course",
      description: "Complete DSA preparation for coding interviews",
      category: "courses",
      type: "Course",
      url: "#",
      color: "#10b981",
      icon: "🌲",
      progress: 23,
      savedDate: "1 week ago",
      tags: ["DSA", "Algorithms", "Interview Prep"],
    },
    {
      id: 7,
      title: "Node.js Backend Development",
      description: "Building scalable backend applications with Node.js",
      category: "videos",
      type: "Video",
      url: "#",
      color: "#059669",
      icon: "📹",
      savedDate: "6 days ago",
      tags: ["Node.js", "Backend", "API"],
    },
    {
      id: 8,
      title: "UI/UX Design Principles",
      description: "Essential design principles for creating great user experiences",
      category: "articles",
      type: "Article",
      url: "#",
      color: "#f43f5e",
      icon: "✨",
      savedDate: "2 weeks ago",
      tags: ["UI/UX", "Design", "User Experience"],
    },
    {
      id: 9,
      title: "Docker & Kubernetes Tutorial",
      description: "Container orchestration and deployment strategies",
      category: "tutorials",
      type: "Tutorial",
      url: "#",
      color: "#06b6d4",
      icon: "🐳",
      savedDate: "1 week ago",
      tags: ["Docker", "DevOps", "Kubernetes"],
    },
    {
      id: 10,
      title: "TypeScript for Beginners",
      description: "Learn TypeScript fundamentals and best practices",
      category: "courses",
      type: "Course",
      url: "#",
      color: "#3178c6",
      icon: "📘",
      progress: 12,
      savedDate: "3 days ago",
      tags: ["TypeScript", "JavaScript", "Programming"],
    },
    {
      id: 11,
      title: "Portfolio Website Project",
      description: "Create a stunning personal portfolio to showcase your work",
      category: "projects",
      type: "Project",
      url: "#",
      color: "#a855f7",
      icon: "🎯",
      progress: 90,
      savedDate: "2 days ago",
      tags: ["Portfolio", "Web Design", "HTML/CSS"],
    },
    {
      id: 12,
      title: "Git & GitHub Workflow",
      description: "Master version control and collaboration with Git",
      category: "tutorials",
      type: "Tutorial",
      url: "#",
      color: "#f97316",
      icon: "🔀",
      savedDate: "5 days ago",
      tags: ["Git", "GitHub", "Version Control"],
    },
  ];

  // Filter bookmarks
  const filteredBookmarks = bookmarks.filter(bookmark => {
    const matchesCategory = selectedCategory === "all" || bookmark.category === selectedCategory;
    const matchesSearch = 
      bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleBookmarkSelection = (id) => {
    setSelectedBookmarks(prev => 
      prev.includes(id) ? prev.filter(bid => bid !== id) : [...prev, id]
    );
  };

  const deleteSelectedBookmarks = () => {
    if (window.confirm(`Delete ${selectedBookmarks.length} bookmark(s)?`)) {
      setSelectedBookmarks([]);
    }
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
            <div style={styles.headerLeft}>
              <div style={styles.logoWrapper}>
                <div style={styles.logoIcon} className="terminal-font">🎓</div>
                <div style={styles.logoText}>
                  <span style={styles.logoTitle} className="terminal-font glow-text">EDUHUB</span>
                  <span style={styles.logoSubtitle}>LEARN SMARTER</span>
                </div>
              </div>
            </div>

            <div style={{...styles.headerSearch, ...(searchFocused ? styles.headerSearchFocused : {})}}>
              <span style={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search courses, tutorials..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                style={styles.headerSearchInput}
              />
            </div>

            <div style={styles.headerRight}>
              <button style={styles.iconBtn}>
                🔔
                <span style={styles.notificationBadge} className="terminal-font">3</span>
              </button>
              <div style={styles.profileTrigger} onClick={handleStudentProfileClick}>
                <div style={styles.profileImgPlaceholder} className="terminal-font">MV</div>
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
                  <div style={styles.profileAvatar} className="terminal-font">MV</div>
                  <div style={styles.avatarStatus}></div>
                </div>
                <div style={styles.profileInfo}>
                  <h3 style={styles.profileName} className="terminal-font glow-text">Mohanapriya Vadivel</h3>
                  <p style={styles.profileEmail}>mohana@example.com</p>
                  <div style={styles.profileBadges}>
                    <span style={styles.studentBadge} className="terminal-font">STUDENT</span>
                    <button onClick={switchMentor} style={styles.mentorBadge} className="terminal-font">
                      SWITCH TO MENTOR
                    </button>
                  </div>
                </div>
              </div>

              <div style={styles.profileStats}>
                <div style={styles.statItem}>
                  <div style={styles.statIcon}>📚</div>
                  <div style={styles.statDetails}>
                    <span style={styles.statValue} className="terminal-font glow-text">12</span>
                    <span style={styles.statLabel}>Courses</span>
                  </div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statIcon}>🏆</div>
                  <div style={styles.statDetails}>
                    <span style={styles.statValue} className="terminal-font glow-text">8</span>
                    <span style={styles.statLabel}>Certificates</span>
                  </div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statIcon}>⭐</div>
                  <div style={styles.statDetails}>
                    <span style={styles.statValue} className="terminal-font glow-text">1250</span>
                    <span style={styles.statLabel}>Points</span>
                  </div>
                </div>
              </div>

              <button style={styles.editProfileBtn} className="terminal-font">
                EDIT PROFILE
              </button>

              <nav style={styles.profileNav}>
                <a href="/student_profile/student_dashboard" style={styles.profileNavItem}>
                  <span style={styles.navItemIcon}>📊</span>
                  <span>Dashboard</span>
                  <span style={styles.navArrow}>›</span>
                </a>
                <a href="/student_profile/student_courses" style={styles.profileNavItem}>
                  <span style={styles.navItemIcon}>📖</span>
                  <span>My Courses</span>
                  <span style={styles.navArrow}>›</span>
                </a>
                <a href="/student_profile/student_progress" style={styles.profileNavItem}>
                  <span style={styles.navItemIcon}>🚀</span>
                  <span>Progress</span>
                  <span style={styles.navArrow}>›</span>
                </a>
                <a href="/student_profile/student_leaderboard" style={styles.profileNavItem}>
                  <span style={styles.navItemIcon}>🏆</span>
                  <span>Leaderboard</span>
                  <span style={styles.navArrow}>›</span>
                </a>
                <a href="/student_profile/student_bookmarks" style={{...styles.profileNavItem, ...styles.profileNavItemActive}}>
                  <span style={styles.navItemIcon}>⭐</span>
                  <span>Bookmarks</span>
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

        {/* BOOKMARKS PAGE CONTENT */}
        <div style={styles.content}>
          {/* Page Header */}
          <div style={styles.pageHeader} className={mounted ? 'fade-in' : ''}>
            <div style={styles.pageTitleSection}>
              <div style={styles.pageIconWrapper}>
                <span style={styles.pageIcon}>🔖</span>
              </div>
              <div>
                <h1 style={styles.pageTitle} className="terminal-font">
                  MY BOOKMARKS
                </h1>
                <p style={styles.pageSubtitle}>
                  Your saved learning resources in one place
                </p>
              </div>
            </div>

            <div style={styles.headerActionsGroup}>
              <button 
                style={{...styles.viewToggle, ...(viewMode === 'grid' ? styles.viewToggleActive : {})}}
                onClick={() => setViewMode('grid')}
                className="terminal-font"
              >
                <span>▦</span>
                GRID
              </button>
              <button 
                style={{...styles.viewToggle, ...(viewMode === 'list' ? styles.viewToggleActive : {})}}
                onClick={() => setViewMode('list')}
                className="terminal-font"
              >
                <span>☰</span>
                LIST
              </button>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div 
            style={{...styles.toolbar, animationDelay: '0.1s'}}
            className={`neon-border ${mounted ? 'card-animate' : ''}`}
          >
            <div style={styles.toolbarSearch}>
              <span style={styles.toolbarSearchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search bookmarks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.toolbarSearchInput}
              />
              {searchQuery && (
                <button 
                  style={styles.clearSearch}
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>

            {selectedBookmarks.length > 0 && (
              <div style={styles.bulkActions}>
                <span style={styles.selectedCount} className="terminal-font">
                  {selectedBookmarks.length} SELECTED
                </span>
                <button 
                  style={styles.bulkDeleteBtn}
                  onClick={deleteSelectedBookmarks}
                  className="terminal-font"
                >
                  <span>🗑️</span>
                  DELETE
                </button>
              </div>
            )}
          </div>

          {/* Categories Filter */}
          <div 
            style={{...styles.categories, animationDelay: '0.2s'}}
            className={mounted ? 'card-animate' : ''}
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                style={{
                  ...styles.categoryFilter,
                  ...(selectedCategory === cat.id ? styles.categoryFilterActive : {})
                }}
                onClick={() => setSelectedCategory(cat.id)}
                className="terminal-font"
              >
                <span style={styles.categoryIcon}>{cat.icon}</span>
                <span style={styles.categoryName}>{cat.name}</span>
                <span style={styles.categoryCount}>{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div style={styles.resultsBar}>
            <p style={styles.resultsText}>
              <span className="terminal-font glow-text" style={{color: '#00f5ff'}}>
                {filteredBookmarks.length}
              </span>
              {' '}{filteredBookmarks.length === 1 ? 'BOOKMARK' : 'BOOKMARKS'}
              {selectedCategory !== 'all' && ` IN ${categories.find(c => c.id === selectedCategory)?.name.toUpperCase()}`}
            </p>
          </div>

          {/* Bookmarks Grid/List */}
          <div style={viewMode === 'grid' ? styles.bookmarksGrid : styles.bookmarksList}>
            {filteredBookmarks.map((bookmark, idx) => (
              <div
                key={bookmark.id}
                style={{
                  ...styles.bookmarkCard,
                  ...(selectedBookmarks.includes(bookmark.id) ? styles.bookmarkCardSelected : {}),
                  animationDelay: `${0.3 + idx * 0.05}s`
                }}
                className={`neon-border ${mounted ? 'card-animate' : ''}`}
                onMouseEnter={() => setHoveredBookmark(bookmark.id)}
                onMouseLeave={() => setHoveredBookmark(null)}
              >
                {/* Selection Checkbox */}
                <input
                  type="checkbox"
                  style={styles.bookmarkCheckbox}
                  checked={selectedBookmarks.includes(bookmark.id)}
                  onChange={() => toggleBookmarkSelection(bookmark.id)}
                />

                {/* Bookmark Thumbnail */}
                <div 
                  style={{
                    ...styles.bookmarkThumbnail,
                    background: `linear-gradient(135deg, ${bookmark.color}, ${bookmark.color}dd)`,
                  }}
                >
                  <span style={styles.bookmarkIcon}>{bookmark.icon}</span>
                  {hoveredBookmark === bookmark.id && (
                    <div style={styles.bookmarkOverlay}>
                      <a href={bookmark.url} style={styles.overlayBtn}>
                        <span>↗</span>
                      </a>
                      <button style={styles.overlayBtn}>
                        <span>🗑️</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Bookmark Content */}
                <div style={styles.bookmarkContent}>
                  <div style={styles.bookmarkHeader}>
                    <span 
                      style={{
                        ...styles.bookmarkType,
                        background: `${bookmark.color}20`,
                        color: bookmark.color
                      }}
                      className="terminal-font"
                    >
                      {bookmark.type.toUpperCase()}
                    </span>
                  </div>

                  <h3 style={styles.bookmarkTitle}>{bookmark.title}</h3>
                  <p style={styles.bookmarkDescription}>{bookmark.description}</p>

                  {/* Progress Bar (if applicable) */}
                  {bookmark.progress !== undefined && (
                    <div style={styles.bookmarkProgress}>
                      <div style={styles.progressInfo}>
                        <span style={styles.progressLabel}>PROGRESS</span>
                        <span style={styles.progressValue} className="terminal-font glow-text">
                          {bookmark.progress}%
                        </span>
                      </div>
                      <div style={styles.progressBarBg}>
                        <div 
                          style={{
                            ...styles.progressBarFill,
                            width: `${bookmark.progress}%`,
                            background: bookmark.color,
                            boxShadow: `0 0 10px ${bookmark.color}99`
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div style={styles.bookmarkTags}>
                    {bookmark.tags.map((tag, idx) => (
                      <span key={idx} style={styles.bookmarkTag} className="terminal-font">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={styles.bookmarkFooter}>
                    <span style={styles.bookmarkDate}>
                      <span style={styles.dateIcon}>🔖</span>
                      Saved {bookmark.savedDate}
                    </span>
                    <a href={bookmark.url} style={styles.bookmarkLink} className="terminal-font">
                      OPEN
                      <span style={styles.linkIcon}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredBookmarks.length === 0 && (
            <div style={styles.emptyState} className={mounted ? 'fade-in' : ''}>
              <div style={styles.emptyIcon}>📚</div>
              <h3 style={styles.emptyTitle} className="terminal-font">NO BOOKMARKS FOUND</h3>
              <p style={styles.emptyText}>
                {searchQuery 
                  ? "Try adjusting your search query"
                  : "Start bookmarking courses and tutorials to see them here"
                }
              </p>
            </div>
          )}
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
    gap: 30,
  },
  
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 40,
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
  
  headerSearch: {
    flex: 1,
    maxWidth: 500,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    background: 'rgba(22, 33, 62, 0.6)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 8,
    padding: '10px 16px',
    transition: 'all 0.3s ease',
  },
  
  headerSearchFocused: {
    background: 'rgba(22, 33, 62, 0.8)',
    border: '1px solid rgba(0, 245, 255, 0.5)',
    boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
  },
  
  searchIcon: {
    fontSize: 18,
  },
  
  headerSearchInput: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#e2e8f0',
    fontSize: 14,
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
  },
  
  studentBadge: {
    background: 'rgba(0, 245, 255, 0.2)',
    color: '#00f5ff',
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 10,
    fontWeight: 700,
    border: '1px solid rgba(0, 245, 255, 0.5)',
    letterSpacing: 1,
  },
  
  mentorBadge: {
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
    padding: '30px 30px 30px 30px',
    maxWidth: 1600,
    margin: '0 auto',
  },
  
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    flexWrap: 'wrap',
    gap: 20,
  },
  
  pageTitleSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  
  pageIconWrapper: {
    width: 70,
    height: 70,
    background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(255, 0, 110, 0.2))',
    border: '2px solid rgba(0, 245, 255, 0.5)',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)',
  },
  
  pageIcon: {
    fontSize: 36,
  },
  
  pageTitle: {
    fontSize: 40,
    fontWeight: 900,
    background: 'linear-gradient(to right, #00f5ff, #ff006e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: 2,
    marginBottom: 5,
  },
  
  pageSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
  },
  
  headerActionsGroup: {
    display: 'flex',
    gap: 10,
  },
  
  viewToggle: {
    background: 'rgba(0, 245, 255, 0.1)',
    border: '1px solid rgba(0, 245, 255, 0.3)',
    color: '#00f5ff',
    padding: '10px 20px',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all 0.3s ease',
  },
  
  viewToggleActive: {
    background: 'rgba(0, 245, 255, 0.2)',
    border: '1px solid rgba(0, 245, 255, 0.5)',
    boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
  },
  
  toolbar: {
    background: 'rgba(22, 33, 62, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  
  toolbarSearch: {
    flex: 1,
    minWidth: 300,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    background: 'rgba(10, 14, 39, 0.5)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 8,
    padding: '12px 16px',
  },
  
  toolbarSearchIcon: {
    fontSize: 18,
    color: '#00f5ff',
  },
  
  toolbarSearchInput: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#e2e8f0',
    fontSize: 14,
  },
  
  clearSearch: {
    background: 'transparent',
    border: 'none',
    color: '#64748b',
    cursor: 'pointer',
    fontSize: 18,
    padding: 5,
  },
  
  bulkActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  
  selectedCount: {
    color: '#00f5ff',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
  },
  
  bulkDeleteBtn: {
    background: 'rgba(255, 0, 110, 0.2)',
    border: '1px solid rgba(255, 0, 110, 0.5)',
    color: '#ff006e',
    padding: '8px 16px',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all 0.3s ease',
  },
  
  categories: {
    display: 'flex',
    gap: 10,
    marginBottom: 25,
    flexWrap: 'wrap',
  },
  
  categoryFilter: {
    background: 'rgba(22, 33, 62, 0.6)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    color: '#cbd5e1',
    padding: '12px 20px',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    transition: 'all 0.3s ease',
  },
  
  categoryFilterActive: {
    background: 'rgba(0, 245, 255, 0.2)',
    border: '1px solid rgba(0, 245, 255, 0.5)',
    color: '#00f5ff',
    boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
  },
  
  categoryIcon: {
    fontSize: 16,
  },
  
  categoryName: {
    fontSize: 11,
  },
  
  categoryCount: {
    background: 'rgba(0, 245, 255, 0.2)',
    color: '#00f5ff',
    padding: '2px 8px',
    borderRadius: 4,
    fontSize: 10,
    fontWeight: 900,
  },
  
  resultsBar: {
    marginBottom: 25,
  },
  
  resultsText: {
    fontSize: 13,
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 600,
  },
  
  bookmarksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: 20,
  },
  
  bookmarksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  
  bookmarkCard: {
    background: 'rgba(22, 33, 62, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    borderRadius: 12,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  
  bookmarkCardSelected: {
    border: '2px solid rgba(0, 245, 255, 0.6)',
  },
  
  bookmarkCheckbox: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 20,
    height: 20,
    cursor: 'pointer',
    zIndex: 10,
  },
  
  bookmarkThumbnail: {
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  
  bookmarkIcon: {
    fontSize: 48,
  },
  
  bookmarkOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  
  overlayBtn: {
    width: 50,
    height: 50,
    background: 'rgba(0, 245, 255, 0.2)',
    border: '2px solid #00f5ff',
    borderRadius: 8,
    color: '#00f5ff',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  
  bookmarkContent: {
    padding: 20,
  },
  
  bookmarkHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  
  bookmarkType: {
    padding: '4px 10px',
    borderRadius: 6,
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: 1,
  },
  
  bookmarkTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: '#e2e8f0',
    marginBottom: 8,
    lineHeight: 1.3,
  },
  
  bookmarkDescription: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 15,
    lineHeight: 1.5,
  },
  
  bookmarkProgress: {
    marginBottom: 15,
  },
  
  progressInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 6,
    fontSize: 11,
  },
  
  progressLabel: {
    color: '#64748b',
    fontWeight: 600,
    letterSpacing: 1,
  },
  
  progressValue: {
    color: '#00f5ff',
    fontWeight: 700,
  },
  
  progressBarBg: {
    height: 6,
    background: 'rgba(10, 14, 39, 0.8)',
    borderRadius: 6,
    overflow: 'hidden',
    border: '1px solid rgba(0, 245, 255, 0.2)',
  },
  
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
    transition: 'width 0.3s ease',
  },
  
  bookmarkTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 15,
  },
  
  bookmarkTag: {
    background: 'rgba(0, 245, 255, 0.1)',
    border: '1px solid rgba(0, 245, 255, 0.3)',
    color: '#00f5ff',
    padding: '4px 10px',
    borderRadius: 6,
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: 0.5,
  },
  
  bookmarkFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    borderTop: '1px solid rgba(0, 245, 255, 0.2)',
  },
  
  bookmarkDate: {
    fontSize: 11,
    color: '#64748b',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  
  dateIcon: {
    fontSize: 14,
  },
  
  bookmarkLink: {
    color: '#00f5ff',
    textDecoration: 'none',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    transition: 'all 0.3s ease',
  },
  
  linkIcon: {
    fontSize: 14,
  },
  
  emptyState: {
    textAlign: 'center',
    padding: '80px 20px',
  },
  
  emptyIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  
  emptyTitle: {
    fontSize: 24,
    fontWeight: 900,
    color: '#00f5ff',
    marginBottom: 10,
    letterSpacing: 1,
  },
  
  emptyText: {
    fontSize: 14,
    color: '#94a3b8',
  },
};

export default StudentBookmarks;