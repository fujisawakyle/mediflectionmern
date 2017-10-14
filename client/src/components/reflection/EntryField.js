import React, { Component } from 'react';
import { connect } from 'react-redux';

//this grabs input from props // es6
class EntryField extends Component {
  state = {
    entry: this.props.data.entry
  };

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.data', nextProps.data.entry);
    console.log('this.props.data', this.props.data.entry);
    if (nextProps.data.entry != this.props.data.entry) {
      this.setState({ entry: nextProps.data.entry });
    }
  }

  handleChange = event => {
    this.setState({
      entry: event.target.value
    });
  };
  render() {
    console.log('yo data', this.props.data);
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
  console.log('state', state.data.entry);
  return {
    data: state.data
  };
}

EntryField = connect(mapStateToProps)(EntryField);

export default EntryField;
