import React from 'react';

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <ul className="optionslist">
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option.isCorrect)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
