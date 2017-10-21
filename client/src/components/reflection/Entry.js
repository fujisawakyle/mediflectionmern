import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

//this grabs input from props // es6
class Entry extends Component {
  state = {
    entry: this.props.selectedMediflection.entry
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ entry: nextProps.selectedMediflection.entry });
  }

  handleChange = event => {
    this.setState({
      entry: event.target.value
    });
  };
  update = entry => {
    const updatedMediflection = this.props.selectedMediflection;
    updatedMediflection.entry = entry;
    this.props.updateMediflection(updatedMediflection);
    this.props.updateDaysArray([
      new Date(this.props.selectedMediflection.date)
    ]);
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
        <button onClick={() => this.update(this.state.entry)} type="submit">
          Submit
        </button>
      </div>
    );
  }
}

function mapStateToProps({ selectedMediflection, daysArray }) {
  return {
    selectedMediflection,
    daysArray
  };
}

Entry = connect(mapStateToProps, actions)(Entry);

export default Entry;
