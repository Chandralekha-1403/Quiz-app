import React, { useState } from 'react';
import QuizContainer from './components/QuizContainer';
import QuizStart from './components/QuizStart'; 
import './App.scss';

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const totalQuestions = 5;

    const handleStartQuiz = () => {
        setIsQuizStarted(true);
    };

    const handleNext = () => {
        if (currentQuestion < totalQuestions) {
            setCurrentQuestion(currentQuestion + 1);
        } 
    };

    return (
        <div className="app">
            {!isQuizStarted ? (
                <QuizStart onStartQuiz={handleStartQuiz} />
            ) : (
                <QuizContainer 
                    currentQuestion={currentQuestion} 
                    totalQuestions={totalQuestions} 
                    onNext={handleNext} 
                />
            )}
        </div>
    );
};

export default App;
