// routes/quizRoutes.js

const express = require('express');
const router = express.Router();
const { createQuiz, getQuizById } = require('../models/quiz');
const { createQuestion } = require('../models/question');


// Create Quiz (POST /quiz/create)
router.post('/create', (req, res) => {
    const { title, questions } = req.body;

    if (!title || !Array.isArray(questions) || questions.length === 0) {
        return res.status(400).json({ message: 'Title and at least one question are required.' });
    }

    try {
        // Create question objects from the request body
        const formattedQuestions = questions.map(q => createQuestion(q.text, q.options, q.correct_option));
        
        // Create quiz in-memory
        const newQuiz = createQuiz(title, formattedQuestions);
        
        // Return the created quiz
        return res.status(201).json(newQuiz);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating quiz' });
    }
});

// Get Quiz (GET /quiz/:id)
router.get('/:id', (req, res) => {
    const quizId = parseInt(req.params.id);
    const quiz = getQuizById(quizId);

    if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
    }

    // Return quiz without revealing correct answers
    return res.status(200).json({
        id: quiz.id,
        title: quiz.title,
        questions: quiz.questions.map(q => ({
            id: q.id,
            text: q.text,
            options: q.options
        }))
    });
});

module.exports = router;
