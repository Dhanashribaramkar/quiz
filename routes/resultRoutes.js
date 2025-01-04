// routes/resultRoutes.js

const express = require('express');
const router = express.Router();
const { createAnswer } = require('../models/answer');
const { createResult } = require('../models/result');
const { getQuizById } = require('../models/quiz');

// Submit Answer (POST /result/submit)
router.post('/submit', (req, res) => {
    const { question_id, selected_option, quiz_id } = req.body;

    if (!question_id || selected_option === undefined || !quiz_id) {
        return res.status(400).json({ message: 'Question ID, selected option, and quiz ID are required.' });
    }

    const quiz = getQuizById(quiz_id);
    if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
    }

    const question = quiz.questions.find(q => q.id === question_id);
    if (!question) {
        return res.status(404).json({ message: 'Question not found' });
    }

    // Check if the answer is correct
    const isCorrect = question.correct_option === selected_option;
    
    // Create the answer in memory
    const answer = createAnswer(question_id, selected_option, isCorrect);

    // Respond with feedback
    return res.status(200).json({
        is_correct: isCorrect,
        correct_option: isCorrect ? null : question.correct_option
    });
});

// Get Results (POST /result/results)
router.post('/results', (req, res) => {
    const { quiz_id, user_id, answers } = req.body;

    if (!quiz_id || !user_id || !Array.isArray(answers)) {
        return res.status(400).json({ message: 'Quiz ID, User ID, and answers are required.' });
    }

    const quiz = getQuizById(quiz_id);
    if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
    }

    // Calculate score
    const score = answers.filter(answer => answer.is_correct).length;
    
    // Create the result in memory
    const result = createResult(quiz_id, user_id, score, answers);

    // Return the result
    return res.status(200).json({
        score: score,
        answers: answers.map(answer => ({
            question_id: answer.question_id,
            selected_option: answer.selected_option,
            is_correct: answer.is_correct
        }))
    });
});

module.exports = router;
