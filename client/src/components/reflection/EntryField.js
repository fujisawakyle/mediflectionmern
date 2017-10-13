import React, { Component } from 'react';
import { connect } from 'react-redux';

//this grabs input from props // es6
class EntryField extends Component {
  render() {
    console.log('yo data', this.props.data);
    return (
      <div>
        <input value={this.props.data.entry} style={{ marginBottom: '5px' }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state.data.entry);
  return {
    data: state.data
  };
}

EntryField = connect(mapStateToProps)(EntryField);

export default EntryField;
