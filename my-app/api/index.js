const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path for correct path resolution
const questions = require('./data'); 

const app = express();
const port = 5000;

app.use(cors()); 
app.use(bodyParser.json());

// store the responses
let responses = [];

// Fetch all questions
app.get('/api/start', (req, res) => {
  responses = [];
  res.json(questions);
});

// Submit individual responses
app.post('/api/submit', (req, res) => {
  const { questionId, selectedOptions, timeTaken } = req.body;
  responses.push({ questionId, selectedOptions, timeTaken });
  res.status(200).json({ message: 'Response recorded successfully' });
});

// Fetch quiz result
app.get('/api/result', (req, res) => {
  let correctAnswers = 0;
  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (question && JSON.stringify(response.selectedOptions) === JSON.stringify(question.correct)) {
      correctAnswers++;
    }
  });
  res.status(200).json({
    correctAnswers,
    totalQuestions: questions.length,
    incorrectAnswers: questions.length - correctAnswers
  });
  responses = [];
});

// module.exports = app;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
