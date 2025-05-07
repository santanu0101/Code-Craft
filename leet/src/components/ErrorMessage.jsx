// src/components/ErrorMessage.jsx
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-icon">
        <i className="fas fa-exclamation-circle"></i>
      </div>
      <h3>Error Loading Questions</h3>
      <p>{message}</p>
      <button className="retry-button" onClick={() => window.location.reload()}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;