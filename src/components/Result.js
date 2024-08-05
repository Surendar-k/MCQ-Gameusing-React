import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div className='note'>
        <h1>Congragulations🎉</h1>
      <h2>Your Score: {score} / {total}</h2>
    </div>
  );
};

export default Result;
