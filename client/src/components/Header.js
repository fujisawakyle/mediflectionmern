import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  renderUserStatus() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <div>
            <a href="/auth/google">Login With Google</a>
          </div>
        );
      default:
        return (
          <div>
            <a href="/api/logout">Logout</a>
          </div>
        );
    }
  }
  render() {
    return (
      <div>
        <h1>Mediflection</h1>
        {this.renderUserStatus()}
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(Header);
