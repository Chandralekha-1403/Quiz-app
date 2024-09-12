import React, { useState } from 'react';
import QuizContainer from './components/QuizContainer';
import QuizStart from './components/QuizStart';
import QuizResult from './components/QuizResult';
import './App.scss';

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [isQuizComplete, setIsQuizComplete] = useState(false);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
    const totalQuestions = 5;

    const handleStartQuiz = () => {
        setIsQuizStarted(true);
    };

    const handleNext = () => {
        if (currentQuestion < totalQuestions) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsQuizComplete(true);
        }
    };

    const handleStartAgain = () => {
        setIsQuizStarted(false);
        setIsQuizComplete(false);
        setCurrentQuestion(1);
        setScore(0);
        setCorrectAnswers([]);
        setIncorrectAnswers([]);
    };

    return (
        <div className="app">
            {!isQuizStarted ? (
                <QuizStart onStartQuiz={handleStartQuiz} />
            ) : isQuizComplete ? (
                <QuizResult 
                    score={score}
                    totalQuestions={totalQuestions}
                    correctAnswers={correctAnswers}
                    incorrectAnswers={incorrectAnswers}
                    onStartAgain={handleStartAgain}
                />
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
