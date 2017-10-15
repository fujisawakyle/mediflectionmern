import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import EntryField from './EntryField';

class Entry extends Component {
  update = entry => {
    this.props.updateEntry(this.props.selectedDay);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.update)}>
          <Field name="entry" component={EntryField} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.entryForm
  };
}

Entry = reduxForm({
  form: 'entryForm',
  enableReinitialize: true
})(Entry);

Entry = connect(mapStateToProps, actions)(Entry);

export default Entry;
