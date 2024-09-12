import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const QuizHeader = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="quiz-header">
      <CircularProgressbar value={progress} text={`${currentQuestion}/${totalQuestions}`} />
    </div>
  );
};

export default QuizHeader;
