import React, { useState } from 'react';
import QuizContainer from './components/QuizContainer';
import QuizStart from './components/QuizStart';
import QuizResult from './components/QuizResult';
import './App.scss';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [finalResult, setFinalResult] = useState(null);

  const startQuiz = async () => {
    try {
        const response = await fetch('/api/start', {
            method: 'GET'
        });
    //   const response = await fetch('/api/start');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuestions(data);
      setCurrentQuestionIndex(0);
      setQuizFinished(false);
      setStartTime(Date.now());
    } catch (error) {
      console.error('Failed to fetch questions:', error);
    }
  };


  const handleAnswerSubmit = async (selectedOptions) => {
    const timeTaken = Date.now() - startTime;
    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) return;

    const payload = {
      questionId: currentQuestion.id,
      selectedOptions: selectedOptions,
      timeTaken: timeTaken
    };

    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Failed to submit responses:', error);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setStartTime(Date.now());
    } else {
      setQuizFinished(true);

      try {
        const resultResponse = await fetch('/api/result');
        const resultData = await resultResponse.json();
        setFinalResult(resultData);
      } catch (error) {
        console.error('Failed to fetch results:', error);
      }
    }
  };

  const handleStartAgain = () => {
    startQuiz();
  };

  return (
    <div className="App">
      {!quizFinished ? (
        questions.length === 0 ? (
          <QuizStart onStartQuiz={startQuiz} />
        ) : (
          <QuizContainer
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            questionData={questions[currentQuestionIndex]}
            onNext={handleAnswerSubmit}
          />
        )
      ) : (
        finalResult && (
          <QuizResult
            score={finalResult.score}
            totalQuestions={questions.length}
            correctAnswers={finalResult.correctAnswers}
            incorrectAnswers={finalResult.incorrectAnswers}
            onStartAgain={handleStartAgain}
          />
        )
      )}
    </div>
  );
};

export default App;
