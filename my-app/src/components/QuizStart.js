import React from 'react';
import Footer from './QuizFooter';
import '../styles/QuizStart.scss';

const QuizStart = ({ onStartQuiz }) => {
    return (
        <div className="quiz-start">
            <div className="circle-container">
                <div className="circle">
                    <div className="circle-text">QUIZ</div>
                </div>
            </div>
            <Footer label="Start" onClick={onStartQuiz} />
        </div>
    );
};

export default QuizStart;
