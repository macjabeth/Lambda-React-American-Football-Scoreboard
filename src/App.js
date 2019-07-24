//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from 'react';

import './App.css';
import TopRow from './TopRow';
import BottomRow from './BottomRow';
import HomeButtons from './HomeButtons';
import AwayButtons from './AwayButtons';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [score, setScore] = useState({ home: 32, away: 32 });
  const [time, setTime] = useState();

  const homeTouchdown = () => setScore({ ...score, home: score.home + 7 });
  const awayTouchdown = () => setScore({ ...score, away: score.away + 7 });

  const homeFieldGoal = () => setScore({ ...score, home: score.home + 3 });
  const awayFieldGoal = () => setScore({ ...score, away: score.away + 3 });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(
        Intl.DateTimeFormat('en-US', {
          minute: 'numeric',
          second: 'numeric'
        }).format(new Date())
      );
    }, 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow score={score} time={time} />
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeButtons
          homeTouchdown={homeTouchdown}
          homeFieldGoal={homeFieldGoal}
        />
        <AwayButtons
          awayTouchdown={awayTouchdown}
          awayFieldGoal={awayFieldGoal}
        />
      </section>
    </div>
  );
}

export default App;
