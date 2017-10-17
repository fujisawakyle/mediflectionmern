import React, { Component } from 'react';

export default props => {
  let seconds = props.seconds;
  if (seconds === 0) {
    seconds = '00';
  } else if (seconds < 10) {
    seconds = '0' + seconds;
  }

  let showRemaining;
  if (props.hours === 0 && props.minutes === 0 && props.seconds === 0) {
    showRemaining = 'session over';
  } else if (props.hours === 0) {
    showRemaining = `${props.minutes}:${seconds}`;
  } else {
    showRemaining = `${props.hours}:${props.minutes}:${props.seconds}`;
  }
  return <div className="timer__remaining">{showRemaining}</div>;
};
