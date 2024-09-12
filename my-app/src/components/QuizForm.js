import React from 'react';
const questions = [
  {
    id: 1,
    text: 'How do you judge what should be added in the next version of the app?',
    options: ['Data Analysis', 'User’s feedback', 'Copy from similar product', 'Make a questionary', 'Personal feeling'],
    image: null
  },
  {
    id: 2,
    text: 'How do you judge what should be added in the next version of the app?',
    options: ['Data Analysis', 'User’s feedback', 'Copy from similar product', 'Make a questionary', 'Personal feeling'],
    image: null
  }
];

const QuizForm = ({ currentQuestion }) => {
  const question = questions[currentQuestion - 1];

  if (!question) {
    return <div>Question not found</div>; 
  }

  return (
    <div className="quiz-form">
      <h3>{question.text}</h3>
      {question.image && <img src={question.image} alt="Question illustration" />}
      <div className="quiz-options">
        {question.options.map((option, index) => (
          <label key={index} className="option-label">
            <input type="radio" name="quiz-option" />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizForm;
