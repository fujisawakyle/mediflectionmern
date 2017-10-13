import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import EntryField from './EntryField';

class Entry extends Component {
  update = entry => {
    console.log('in entry: date', this.props.date);
    entry.date = this.props.date;
    console.log('entry', entry);
    this.props.updateMediflection(entry);
  };

  render() {
    console.log('props', this.props.data.entry);
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.update)}>
          <Field type="textarea" name="entry" component={EntryField} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state.data.entry);
  return {
    formValues: state.form.entryForm.values,
    data: state.data
  };
}

Entry = reduxForm({
  form: 'entryForm',
  enableReinitialize: true
})(Entry);

Entry = connect(mapStateToProps, actions)(Entry);

export default Entry;
