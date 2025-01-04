// models/answer.js

let answers = [];  // In-memory array to store answers

// Function to create an answer for a question
function createAnswer(question_id, selected_option, is_correct) {
    const answer = {
        question_id,
        selected_option,
        is_correct
    };
    answers.push(answer);  // Store the answer in memory
    return answer;
}

// Export the function and answers array
module.exports = {
    createAnswer,
    answers
};
