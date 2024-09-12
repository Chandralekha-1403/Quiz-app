import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import Footer from './Footer';
import './QuizResult.scss';

const QuizResult = ({ score, totalQuestions, correctAnswers, incorrectAnswers, onStartAgain }) => {
    const percentage = (score / totalQuestions) * 100;

    return (
        <div className="quiz-result-container">
            <h2>Your Score: {score}/{totalQuestions}</h2>
            <ReactSpeedometer 
                value={percentage} 
                minValue={0} 
                maxValue={100} 
                needleColor="red"
                startColor="green" 
                endColor="red"
                segments={10}
                textColor="#000"
            />
            <div className="answer-summary">
                <div className="correct-answers">
                {correctAnswers.length} Correct 
                </div>
                <div className="incorrect-answers">
                {incorrectAnswers.length} Incorrect
                </div>
            </div>
            <Footer label="Start Again" onClick={onStartAgain} />
        </div>
    );
};

export default QuizResult;
