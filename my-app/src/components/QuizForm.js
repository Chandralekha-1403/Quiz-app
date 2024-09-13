import React, { useState } from 'react';
const QuizForm = ({ questionData, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
      setSelectedOptions((prevSelected) => {
          if (prevSelected.includes(option)) {
              return prevSelected.filter((o) => o !== option);
          } else {
              return [...prevSelected, option];
          }
      });
  };

  const handleSubmit = () => {
      if (selectedOptions.length > 0) {
          onSubmit(selectedOptions); 
      } else {
          alert('Please select at least one option.');
      }
  };

  return (
      <div className="quiz-form">
          <h3>{questionData.question}</h3>
          <div className="quiz-options">
              {questionData.options.map((option, index) => (
                  <label key={index} className="option-label">
                      <input
                          type="checkbox"
                          checked={selectedOptions.includes(option)}
                          onChange={() => handleOptionChange(option)}
                      />
                      {option}
                  </label>
              ))}
          </div>
          <div className="footer">
            <button className="footer-button" onClick={handleSubmit}>
                Next
            </button>
        </div>
      </div>
  );
};

export default QuizForm;
