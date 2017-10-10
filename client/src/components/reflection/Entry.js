import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Entry extends Component {
  update = values => {
    this.props.updateMediflection(values);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.update)}>
          <Field type="textarea" name="date" component="input" />
          <Field type="textarea" name="entry" component="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.entryForm.values
  };
}

Entry = reduxForm({
  form: 'entryForm'
})(Entry);
Entry = connect(mapStateToProps, actions)(Entry);
export default Entry;
