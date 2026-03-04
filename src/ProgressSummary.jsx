import React from "react";
import "./ProgressSummary.css";

function ProgressSummary() {
  const user = {
    name: "SwiftHacker7419",
    avatar: "https://i.pravatar.cc/80?u=lynx", // Replace with your lynx avatar if needed
    xp: 4090,
    lessons: 149,
    exercises: 161,
    quizzes: 0,
    challenges: 0,
    streak: 1,
    league: "Bronze",
    rank: 16,
    progress: 44,
    daysLeft: 7,
  };

  return (
    <div className="progress-card">
      <div className="profile-section">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <div>
          <h3>{user.name}</h3>
          <p>Free Account</p>
        </div>
      </div>

      <div className="stats-grid">
        <div>🔥 Streak: {user.streak} day</div>
        <div>🏆 League: {user.league}</div>
        <div>📊 Rank: #{user.rank} ({user.daysLeft} days left)</div>
      </div>

      <div className="progress-bar">
        <label>Course Progress: {user.progress}%</label>
        <div className="bar">
          <div className="fill" style={{ width: `${user.progress}%` }}></div>
        </div>
        <p className="motivation">Earn a few more points to get ahead!</p>
      </div>

      <div className="details-grid">
        <div>⭐ XP: {user.xp}</div>
        <div>📘 Lessons: {user.lessons}</div>
        <div>📝 Exercises: {user.exercises}</div>
        <div>❓ Quizzes: {user.quizzes}</div>
        <div>⚔️ Challenges: {user.challenges}</div>
      </div>
    </div>
  );
}

export default ProgressSummary;
