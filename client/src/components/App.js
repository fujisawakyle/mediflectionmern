import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Entry from './reflection/Entry';
import ShowDate from './ShowDate';
import Clock from './meditation/Clock';
import Meditation from './meditation/Meditation';

import DayPicker from 'react-day-picker';
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
            <ShowDate date={this.state.showDate} />

            <Clock
              today={this.state.today}
              selectedMediflection={this.props.selectedMediflection}
            />
            <h3>Entry</h3>
            <Entry selectedMediflection={this.props.selectedMediflection} />
            <DayPicker
              todayButton="current month"
              selectedDays={[]}
              onDayClick={date => this.clickDay(date)}
            />
            <Meditation
              today={this.state.today}
              showInput={this.state.showInput}
              selectedMediflection={this.props.selectedMediflection}
            />
          </div>
        );
    }
  }
  render() {
    return (
      <div>
        <Header />
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ user, mediflections, selectedMediflection }) {
  return {
    user,
    mediflections,
    selectedMediflection
  };
}

export default connect(mapStateToProps, actions)(App);
