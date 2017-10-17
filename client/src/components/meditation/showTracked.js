import React from 'react';
import pluralize from 'pluralize';

export default props => {
  return (
    <h5 className="timer__text">
      {props.time} {pluralize(' minute', props.time)}
    </h5>
  );
};
