import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
const Result = ({ score, total }) => {
  const [width, height] = useWindowSize();
  return (
    <div className='note'>
       <Confetti width={width} height={height} />
      <h1>🎉 Congratulations!</h1>
      <h2>Your Score: {score} / {total}</h2>
    </div>
  );
};

export default Result;
