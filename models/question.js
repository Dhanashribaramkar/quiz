// models/question.js

let questionIdCounter = 1;  // In-memory counter for question IDs

// Function to create a question with options and correct answer
function createQuestion(text, options, correct_option) {
    return {
        id: questionIdCounter++,  // Auto-incrementing ID
        text,
        options,
        correct_option
    };
}

module.exports = {
    createQuestion
};
