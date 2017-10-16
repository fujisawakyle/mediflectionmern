import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    console.log(entry);
  };
  render() {
    console.log('in Entry', this.props);
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

function mapStateToProps({ selectedMediflection }) {
  return {
    selectedMediflection
  };
}

Entry = connect(mapStateToProps)(Entry);

export default Entry;
