import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import TimerField from './TimerField';
import * as actions from '../../actions';

import ReactCountdownClock from 'react-countdown-clock';
import pluralize from 'pluralize';

const minOne = value => {
  if (value < 1) {
    return '1';
  } else {
    return value;
  }
};

class Timer extends Component {
  update = time => {
    // time.date = this.props.date;
    // this.props.updateTime(time);
  };

  render() {
    return (
      <div>
        {this.props.selectedMediflection.time}
        {pluralize(' minute', this.props.time)}
        <form onSubmit={this.props.handleSubmit(this.update)}>
          <Field
            normalize={minOne}
            value="1"
            type="number"
            name="timer"
            component={TimerField}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function validate({ timer }) {
  const errors = {};

  if (timer < 1) {
    errors.timer = 'Invalid time!';
  }

  return errors;
}

function mapStateToProps(state) {
  return {};
}

Timer = reduxForm({
  validate,
  form: 'entryForm'
})(Timer);

Timer = connect(mapStateToProps, actions)(Timer);

export default Timer;
