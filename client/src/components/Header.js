import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../actions';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

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
        <Title>Mediflection</Title>
        {this.renderUserStatus()}
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(Header);
