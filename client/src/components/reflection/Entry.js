import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Entry extends Component {
  render() {
    return (
      <div>
        <form
          onClick={() => this.props.updateMediflection(this.props.formValues)}
        >
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
