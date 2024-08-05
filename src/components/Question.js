import React, { useState } from 'react';
import './style.css'; // Make sure to create this CSS file for styling

const Question = ({ question, options, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option.text);
    if (option.isCorrect) {
      setFeedback('Correct!');
    } else {
      setFeedback('Try again!');
    }
    setTimeout(() => {
      setFeedback('');
      handleAnswer(option.isCorrect);
    }, 1000); // Delay for feedback
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question}</h2>
      <ul className="optionslist">
        {options.map((option, index) => (
          <li key={index}>
            <button
              className={`option-button ${selectedOption === option.text ? (option.isCorrect ? 'correct' : 'incorrect') : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
      {feedback && <div className={`feedback ${feedback === 'Correct!' ? 'correct-feedback' : 'incorrect-feedback'}`}>{feedback}</div>}
    </div>
  );
};

export default Question;
