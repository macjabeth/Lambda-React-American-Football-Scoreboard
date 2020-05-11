import React, { useState, useEffect } from 'react';
import BottomRow from './BottomRow';
import './App.css';

function Scoreboard(props) {
  const minutes = props.time.minutes.toString().padStart(2, '0');
  const seconds = props.time.seconds.toString().padStart(2, '0');

  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>
          <div className="home__score">{props.score.home}</div>
        </div>
        <div className="timer">{minutes}:{seconds}</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{props.score.away}</div>
        </div>
      </div>
      <BottomRow />
    </section>
  );
}

function Controls(props) {
  return (
    <section className="buttons">
      <div className="homeButtons">
        <button className="homeButtons__touchdown" onClick={props.homeTouchdown}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={props.homeFieldGoal}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={props.awayTouchdown}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={props.awayFieldGoal}>Away Field Goal</button>
      </div>
    </section>
  );
}

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
      })
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
