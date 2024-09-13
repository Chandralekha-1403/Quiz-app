const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const questions = require('./data'); 

const app = express();
const port = 5000;

app.use(cors()); 
app.use(bodyParser.json()); 

// store the responses
let responses = [];

// Fetch all questions
app.get('/api/start', (req, res) => {

  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
    // Reset responses when starting a new quiz
    responses = [];
    res.json(questions);
});

// Submit individual responses
app.post('/api/submit', (req, res) => {
    const { questionId, selectedOptions, timeTaken } = req.body;

    // Save individual response
    responses.push({ questionId, selectedOptions, timeTaken });

    // Respond with success
    res.status(200).json({ message: 'Response recorded successfully' });
});

// Fetch quiz result
app.get('/api/result', (req, res) => {
    // Calculate score based on responses
    let correctAnswers = 0;
    responses.forEach(response => {
        const question = questions.find(q => q.id === response.questionId);
        if (question && JSON.stringify(response.selectedOptions) === JSON.stringify(question.correct)) {
            correctAnswers++;
        }
    });

    // Respond with result
    res.status(200).json({
        correctAnswers,
        totalQuestions: questions.length,
        incorrectAnswers: questions.length - correctAnswers
    });

    // Clear responses after fetching results
    responses = [];
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
