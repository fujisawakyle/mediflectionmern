import React, { Component } from 'react';

class ShowDate extends Component {
  render() {
    return (
      <div>
        <h4> {this.props.date}</h4>
      </div>
    );
  }
}

export default ShowDate;
