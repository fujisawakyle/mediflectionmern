import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Entry from './reflection/Entry';
import Timer from './meditation/Timer';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <div>
            <h1>Welcome to Mediflection</h1>
            <h4>Track your meditation, track your reflection</h4>
          </div>
        );
      default:
        return (
          <div>
            <h4>You are signed in</h4>
          </div>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        {this.renderContent()}
        <h3>Timer</h3>
        <Timer />
        <h3>Entry</h3>
        <Entry />
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(App);
