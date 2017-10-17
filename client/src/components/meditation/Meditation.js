import React, { Component } from 'react';
import showTracked from './showTracked';
import showInput from './showInput';
import showCountdown from './showCountdown';
import pluralize from 'pluralize';

class Meditation extends Component {
  state = {
    showInput: true
  };

  render() {
    const { time } = this.props.selectedMediflection;
    return (
      <div>
        <showTracked time={time} />
      </div>
    );
  }
}

export default Meditation;
