import BottomRow from '../BottomRow';
import React from 'react';

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

export default Scoreboard;