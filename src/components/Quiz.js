import React, { useState } from 'react';
import Result from './Result';
import Question from './Question';

const questions = [
  {
    question: 'What is the capital of France?',
    options: [
      { text: 'Berlin', isCorrect: false },
      { text: 'Madrid', isCorrect: false },
      { text: 'Paris', isCorrect: true },
      { text: 'Lisbon', isCorrect: false },
    ],
  },
  
  {
    question: 'What is the capital of Japan?',
    options: [
      { text: 'Tokyo', isCorrect: true },
      { text: 'Beijing', isCorrect: false },
      { text: 'Seoul', isCorrect: false },
      { text: 'Bangkok', isCorrect: false },
    ],
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: [
      { text: 'Venus', isCorrect: false },
      { text: 'Earth', isCorrect: false },
      { text: 'Mars', isCorrect: true },
      { text: 'Jupiter', isCorrect: false },
    ],
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: [
      { text: 'Atlantic Ocean', isCorrect: false },
      { text: 'Indian Ocean', isCorrect: false },
      { text: 'Arctic Ocean', isCorrect: false },
      { text: 'Pacific Ocean', isCorrect: true },
    ],
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: [
      { text: 'Atlantic Ocean', isCorrect: false },
      { text: 'Indian Ocean', isCorrect: false },
      { text: 'Arctic Ocean', isCorrect: false },
      { text: 'Pacific Ocean', isCorrect: true },
    ],
  },
  // Add more questions here
];


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
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
