import React from 'react';

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

export default Controls;