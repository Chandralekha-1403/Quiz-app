import React from 'react';
import QuizHeader from './QuizHeader';
import QuizForm from './QuizForm';

const QuizContainer = ({ currentQuestion, totalQuestions, questionData, onNext }) => {
    return (
        <div className="quiz-container">
            <QuizHeader currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
            <QuizForm questionData={questionData} onSubmit={onNext} />
        </div>
    );
};

export default QuizContainer;
