// models/quiz.js

// In-memory storage
let quizzes = [];  // Array to store quizzes

// Function to create a quiz with questions
function createQuiz(title, questions) {
    const id = quizzes.length + 1; // Simple ID generation logic
    const quiz = {
        id,
        title,
        questions
    };
    quizzes.push(quiz);  // Add quiz to in-memory store
    return quiz;
}

// Function to get a quiz by its ID
function getQuizById(id) {
    return quizzes.find(q => q.id === id);
}

// Export the functions
module.exports = {
    createQuiz,
    getQuizById,
    quizzes
};
