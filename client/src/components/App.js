import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
            <a href="/auth/google">Login With Google</a>
          </div>
        );
      default:
        return (
          <div>
            <h1>Welcome to Mediflection</h1>
            <h4>You are signed in</h4>
            <a href="/api/logout">Logout</a>
          </div>
        );
    }
  }
  render() {
    console.log(this.props);
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(App);
