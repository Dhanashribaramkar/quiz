// models/result.js

let results = [];  // In-memory array to store results

// Function to create and store a result for a quiz attempt
function createResult(quiz_id, user_id, score, answers) {
    const result = {
        quiz_id,
        user_id,
        score,
        answers
    };
    results.push(result);  // Store the result in memory
    return result;
}

// Export the function and results array
module.exports = {
    createResult,
    results
};
