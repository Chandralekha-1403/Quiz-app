import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import Footer from './Footer';
import './QuizResult.scss';

const QuizResult = ({ score, totalQuestions, correctAnswers, incorrectAnswers, onStartAgain }) => {
    const percentage = (correctAnswers / totalQuestions) * 100;

    return (
        <div className="quiz-result-container">
            <h2>Your result</h2>
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
                    <span className="result-value">{correctAnswers}</span>
                    <span className="resut-text">Correct</span>
                      
                </div>
                <div className="incorrect-answers">
                    <span className="result-value">{incorrectAnswers}</span>
                    <span className="resut-text">Incorrect</span>
                </div>
            </div>
            <Footer label="Start Again" onClick={onStartAgain} />
        </div>
    );
};

export default QuizResult;
