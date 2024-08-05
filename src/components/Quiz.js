import React, { useState } from 'react';
import Result from './Result';
import Question from './Question';
import './style.css'; // Make sure to create this CSS file

const questions = [
  {
    question: 'What is the time complexity of binary search?',
    options: [
      { text: 'O(n)', isCorrect: false },
      { text: 'O(log n)', isCorrect: true },
      { text: 'O(n log n)', isCorrect: false },
      { text: 'O(1)', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is a functional programming language?',
    options: [
      { text: 'Java', isCorrect: false },
      { text: 'C++', isCorrect: false },
      { text: 'Haskell', isCorrect: true },
      { text: 'Python', isCorrect: false },
    ],
  },
  {
    question: 'What does the acronym REST stand for in web services?',
    options: [
      { text: 'Representational State Transfer', isCorrect: true },
      { text: 'Relational State Transfer', isCorrect: false },
      { text: 'Representational Service Transfer', isCorrect: false },
      { text: 'Relational Service Transfer', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is used to style HTML pages?',
    options: [
      { text: 'JavaScript', isCorrect: false },
      { text: 'HTML', isCorrect: false },
      { text: 'CSS', isCorrect: true },
      { text: 'Python', isCorrect: false },
    ],
  },
  {
    question: 'What is the purpose of the "this" keyword in JavaScript?',
    options: [
      { text: 'To refer to the global object', isCorrect: false },
      { text: 'To refer to the current object', isCorrect: true },
      { text: 'To refer to the function object', isCorrect: false },
      { text: 'To refer to the previous object', isCorrect: false },
    ],
  },
  {
    question: 'Which algorithm is commonly used for sorting data?',
    options: [
      { text: 'Breadth-First Search', isCorrect: false },
      { text: 'Dijkstra’s Algorithm', isCorrect: false },
      { text: 'Merge Sort', isCorrect: true },
      { text: 'Binary Search', isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    setProgress(((nextQuestion / questions.length) * 100).toFixed(0));

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
