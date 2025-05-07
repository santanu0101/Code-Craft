// src/components/QuestionBanner.jsx
import React from 'react';

const QuestionBanner = () => {
  return (
    <div className="question-banner">
      <div className="problem-of-day">
        <div className="pod-badge">Problem of the Day</div>
        <h2 className="pod-title">Bitonic Point</h2>
        <div className="pod-meta">
          <span className="pod-difficulty">
            <span className="dot difficulty-easy"></span> 11
          </span>
          <span className="pod-medium">
            <span className="dot difficulty-medium"></span> 21
          </span>
          <span className="pod-hard">
            <span className="dot difficulty-hard"></span> 03
          </span>
        </div>
        <button className="solve-problem-btn">Solve Problem</button>
      </div>

      <div className="weekly-contest-banner">
        <div className="contest-details">
          <h3 className="contest-title">Rated Coding Contest</h3>
          <p className="contest-description">
            Increase your rating and win extra Geekbits every sunday with GfG Weekly Contest!
          </p>
          <button className="register-now-btn">
            Register Now <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="contest-navigation">
          <button className="nav-btn prev">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="nav-btn next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBanner;