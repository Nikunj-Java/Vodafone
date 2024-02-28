import React, { useState, useEffect } from 'react'

function Demo(){
     const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);

  }, [isActive]);

  const handleSubmit = () => {
    setIsActive(false);
    // Reset the timer
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer: {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</h1>
      <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Demo;