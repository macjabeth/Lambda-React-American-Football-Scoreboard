import React from 'react';

const AwayButtons = ({ awayTouchdown, awayFieldGoal }) => {
  return (
    <div className="awayButtons">
      <button className="awayButtons__touchdown" onClick={awayTouchdown}>
        Away Touchdown
      </button>
      <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>
        Away Field Goal
      </button>
    </div>
  );
};

export default AwayButtons;
