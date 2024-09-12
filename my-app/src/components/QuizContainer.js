import React from 'react';
import QuizHeader from './QuizHeader';
import QuizForm from './QuizForm';
import Footer from './Footer';

const QuizContainer = ({ currentQuestion, totalQuestions, onNext }) => {
    return (
        <div className="quiz-container">
            <QuizHeader currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
            <QuizForm currentQuestion={currentQuestion} />
            <Footer label="Next" onClick={onNext} />
        </div>
    );
};

export default QuizContainer;
