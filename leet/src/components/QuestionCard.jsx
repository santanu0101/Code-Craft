// src/components/QuestionCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = ({ question }) => {
  // console.log(question)
  const {
    _id,
    title,
    difficulty,
    companies,
    solved,
    topics
  } = question;

  const getDifficultyClass = (levelArray) => {
    // console.log(levelArray) 
    if (!Array.isArray(levelArray) || levelArray.length === 0) return '';
    const level = levelArray[0].toLowerCase();
    switch (level) {
      case 'easy':
        return 'difficulty-easy';
      case 'medium':
        return 'difficulty-medium';
      case 'hard':
        return 'difficulty-hard';
      default:
        return '';
    }
  };

  return (
    <div className="question-card">
      <div className="question-bookmark">
        <i className="far fa-bookmark"></i>
      </div>
      
      <Link to={`${_id}`} className="question-title">
        {title}
      </Link>
      
      <div className="question-meta">
        <span className={`difficulty-badge ${getDifficultyClass(difficulty)}`}>
          {difficulty}
        </span>
        
        
        <div className="companies-list">
          {companies && companies.map((company, index) => (
            <span key={index} className="company-tag">
              {company}
            </span>
          ))}
        </div>
      </div>
      
      <div className="question-topics">   
          <span  className="topic-tag">
            {topics}
          </span>
       
      </div>
      
      <div className="question-status">
        {solved ? (
          <span className="solved-status">Solved</span>
        ) : (
          <Link to={`/questions/${_id}`} className="solve-button">
            Solve
          </Link>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;