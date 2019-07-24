import React from 'react';
import './App.css';

const TopRow = ({ score, time }) => {
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>

        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

        <div className="home__score">{score.home}</div>
      </div>
      <div className="timer">{time}</div>
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score">{score.away}</div>
      </div>
    </div>
  );
};

export default TopRow;
