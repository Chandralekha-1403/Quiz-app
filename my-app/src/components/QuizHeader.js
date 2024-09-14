import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const QuizHeader = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="quiz-header">
      <div className="circular-progress-container">
        <CircularProgressbar
          value={progress}
          styles={{
            path: {
              stroke: '#4DB6AC',
              strokeLinecap: 'round',
            },
            trail: {
              stroke: '#d6d6d6',
              strokeLinecap: 'round',
            },
            text: {
              fill: 'transparent', 
            },
          }}
        />
      </div>
      <div className="progress-text">
        <span className="current-question">{currentQuestion}</span>
        <span className="total-questions">/{totalQuestions}</span>
      </div>
    </div>
  );
};

export default QuizHeader;
