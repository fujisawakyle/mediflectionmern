import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import TimerField from './TimerField';

const minOne = value => {
  if (value < 1) {
    return '1';
  } else {
    return value;
  }
};

class Timer extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

export default reduxForm({
  validate,
  form: 'entryForm'
})(Timer);
