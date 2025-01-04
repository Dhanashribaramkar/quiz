# Quiz API

Overview
This project is a RESTful API for a Quiz Application built with Node.js and Express. It provides endpoints to manage quizzes, questions, and user answers. The API allows users to create quizzes, retrieve them, submit answers, and view results.

Features
Create Quiz: Create a quiz with a set of questions and options, with one correct answer for each.
Get Quiz: Retrieve a quiz by its ID, including the questions (without revealing the correct answers).
Submit Answer: Submit answers for specific questions and receive immediate feedback.
Get Results: View the user's score and a summary of their answers (correct/incorrect).

API Endpoints:

| Endpoint         | HTTP Method| Description                                        | 
|------------------|------------|----------------------------------------------------|
| `/quiz/create`   | POST       | Create a new quiz with a set of questions and  options    
| `/quiz/:id`      | GET        | Retrieve a quiz by ID without revealing the correct answers                                                    | 
| `/result/submit` | POST       | Submit an answer for a specific question in a quiz     
| `/result/results`| POST       | Get the user's results for a specific quiz              


Setup Instructions
1. Clone the Repository
Clone this repository to your local machine using the following command:

git clone https://github.com/Dhanashribaramkar/quiz.git


2. Install Dependencies
Navigate to the project directory and install the required dependencies using npm:

cd quiz-api
npm install


3. Start the Server
Run the following command to start the application:

npm start
The server will start on http://localhost:3000.

4. Access API
You can now test the API endpoints using Postman or any other API client by sending requests to http://localhost:3000.


5. Postman link for test API's:
https://restless-crater-892556.postman.co/workspace/7a9513f1-44e9-4827-a646-3aa22bd5d583/overview
