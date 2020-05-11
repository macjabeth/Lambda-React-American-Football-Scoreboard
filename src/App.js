import React, { useState } from 'react';
import BottomRow from './BottomRow';
import './App.css';

function App() {
  const [score, setScore] = useState({ home: 0, away: 0 });

  const incrementScore = (team, amount) => () => {
    setScore({ ...score, [team]: score[team] + amount });
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{score.home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{score.away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={incrementScore('home', 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={incrementScore('home', 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={incrementScore('away', 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={incrementScore('away', 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
