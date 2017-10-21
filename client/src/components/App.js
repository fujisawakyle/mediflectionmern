import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import styled from 'styled-components';
import DayPicker from 'react-day-picker';

import Header from './Header';
import Entry from './reflection/Entry';
import ShowDate from './ShowDate';
import Meditation from './meditation/Meditation';

import '../theme/globalStyle';
import 'react-day-picker/lib/style.css';

const today = String(new Date()).slice(0, 15);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDate: String(new Date()).slice(0, 15),
      today: true,
      showInput: true
    };
  }
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchMediflections(() => {
      this.clickDay(new Date());
      this.props.updateDaysArray(
        _.keys(this.props.mediflections).map(date => new Date(date))
      );
    });
  }

  clickDay = date => {
    date = String(date).slice(0, 15);

    if (today == date) {
      this.setState({ today: true, showInput: true });
    } else {
      this.setState({ today: false, showInput: false });
    }

    this.setState({
      showDate: date
    });
    this.props.fetchMediflection(date, this.props.mediflections[date]);
  };

  renderLogin() {
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
    }
  }

  renderContent() {
    if (this.props.user && !_.isEmpty(this.props.selectedMediflection)) {
      return (
        <div>
          <h4>You are signed in</h4>
          <ShowDate date={this.state.showDate} />
          <DayPicker
            todayButton="current month"
            selectedDays={this.props.daysArray}
            onDayClick={date => this.clickDay(date)}
          />
          <h3>Entry</h3>
          <Entry selectedMediflection={this.props.selectedMediflection} />
          <Meditation
            today={this.state.today}
            showInput={this.state.showInput}
            selectedMediflection={this.props.selectedMediflection}
          />
        </div>
      );
    } else if (!this.props.user) {
      return <div />;
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }

  render() {
    console.log('daysArray', this.props.daysArray);
    return (
      <div>
        <Header />
        {this.renderLogin()}
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({
  user,
  mediflections,
  selectedMediflection,
  daysArray
}) {
  return {
    user,
    mediflections,
    selectedMediflection,
    daysArray
  };
}

export default connect(mapStateToProps, actions)(App);
