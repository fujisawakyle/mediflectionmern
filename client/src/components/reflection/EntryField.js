import React, { Component } from 'react';
import { connect } from 'react-redux';

//this grabs input from props // es6
class EntryField extends Component {
  state = {
    entry: this.props.entry
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.entry !== this.props.entry) {
      this.setState({ entry: nextProps.entry });
    }
  }

  handleChange = event => {
    this.setState({
      entry: event.target.value
    });
  };
  render() {
    return (
      <div>
        <textarea
          autoComplete="off"
          onChange={this.handleChange}
          value={this.state.entry}
          placeholder="Today's meditation was:"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

EntryField = connect(mapStateToProps)(EntryField);

export default EntryField;
