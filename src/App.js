import React, { useEffect, useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Controls from './components/Controls';
import './App.css';

function App() {
  const [score, setScore] = useState({ home: 0, away: 0 });
  const [time, setTime] = useState({ seconds: 3, minutes: 0 });

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(time => {
        if (time.seconds === 59) {
          return { minutes: time.minutes + 1, seconds: 0 };
        } else {
          return { ...time, seconds: time.seconds + 1 };
        }
      });
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const incrementScore = (team, amount) => () => {
    setScore({ ...score, [team]: score[team] + amount });
  };

  return (
    <div className="container">
      <Scoreboard score={score} time={time} />
      <Controls homeTouchdown={incrementScore('home', 7)}
                homeFieldGoal={incrementScore('home', 3)}
                awayTouchdown={incrementScore('away', 7)}
                awayFieldGoal={incrementScore('away', 3)} />
    </div>
  );
}

export default App;
