import React, { useState } from 'react';
import Footer from './Footer';
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
          setSelectedOptions([]);
      } else {
          alert('Please select at least one option.');
      }
  };

  return (
        <div className="quiz-form">
          <h3>{questionData.question}</h3>
            {questionData.image && <img src={questionData.image} alt="question" />}
            <div className="quiz-options">
              {questionData.options.map((option, index) => (
                  <label key={index} className={`option-label ${selectedOptions && selectedOptions.includes(option) ? 'checked-option' : ''}`} >
                      <input
                          type="checkbox"
                          className="rounded-checkbox"
                          checked={selectedOptions.includes(option)}
                          onChange={() => handleOptionChange(option)}
                      />
                      <span className="option-text">{option}</span>
                      
                  </label>
              ))}
            </div>
          <Footer label="Next" onClick={handleSubmit} />
        </div>
  );
};

export default QuizForm;
