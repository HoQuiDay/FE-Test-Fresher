import React, { useEffect, useState } from 'react';
import CountDownAnimation from './CountDownAnimation';

const CountDown = (props) => {
  const [count, setCount] = useState(props.count);
  useEffect(() => {
    if (count === 0) {
      props.setIsOverTime(true);
      return;
    }
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <CountDownAnimation />
    </div>
  );
};

export default CountDown;
