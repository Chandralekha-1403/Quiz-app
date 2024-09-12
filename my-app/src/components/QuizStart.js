import React from 'react';
import Footer from './Footer';
import './QuizStart.scss';

const QuizStart = ({ onStartQuiz }) => {
    return (
        <div className="quiz-start">
            <div className="circle-container">
                <div className="circle">
                    <div className="circle-text">QUIZ</div>
                </div>
            </div>
            <Footer label="Start Quiz" onClick={onStartQuiz} />
        </div>
    );
};

export default QuizStart;
