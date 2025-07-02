import React, { useState, useEffect } from 'react';
import Result from './Result';
import Question from './Question';
import './style.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('/react_quiz_questions.json')
    .then((res) => res.json())
    .then((data) => {
      const shuffled = data.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 5); // Pick only 5 questions
      setQuestions(selected);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error loading questions:', error);
      setLoading(false);
    });
}, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
    const nextQuestion = currentQuestion + 1;
    setProgress(((nextQuestion / questions.length) * 100).toFixed(0));

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  if (loading) return <div className="quiz-container">Loading questions...</div>;

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
