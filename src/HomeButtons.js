import React from 'react';
import './App.css';

const HomeButtons = ({ homeTouchdown, homeFieldGoal }) => {
  return (
    <div className="homeButtons">
      {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <button className="homeButtons__touchdown" onClick={homeTouchdown}>
        Home Touchdown
      </button>
      <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>
        Home Field Goal
      </button>
    </div>
  );
};

export default HomeButtons;
