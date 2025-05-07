// src/components/QuestionList.jsx
import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionList = ({ questions }) => {
  // console.log("Questions prop:", questions);
  if (!Array.isArray(questions) || questions.length === 0) {
    return (
      <div className="empty-questions">
        <h3>No questions found</h3>
        <p>Try adjusting your filters or check back later for more questions</p>
      </div>
    );
  }

  return (
    <div className="question-list">
      {questions.map((question) => (
        <QuestionCard key={question._id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
