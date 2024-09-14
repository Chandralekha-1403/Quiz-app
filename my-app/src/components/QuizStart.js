import React from 'react';
import Footer from './QuizFooter';
import '../styles/QuizStart.scss';
import arrow from '../images/upArrow.png';

const QuizStart = ({ onStartQuiz }) => {
    return (
        <div className="quiz-start">
            <div className="title">
                <img src={arrow} alt="Up arrow" />
                <span>upraised</span>
            </div>
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
