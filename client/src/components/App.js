import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Entry from './reflection/Entry';
import Timer from './meditation/Timer';
import ShowDate from './ShowDate';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class App extends Component {
  state = {
    showDate: String(new Date()).slice(0, 15)
  };
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchMediflections(() => {
      this.clickDay(new Date());
    });
  }

  clickDay = date => {
    date = String(date).slice(0, 15);
    this.setState({
      showDate: date
    });
    console.log(
      'this.props.mediflections[date]',
      this.props.mediflections[date]
    );
    this.props.fetchMediflection(this.props.mediflections[date]);
  };

  renderMediflection = mediflection => {
    console.log('medifl in renderMed', mediflection);
    if (!mediflection) {
      return <div> No mediflection selected</div>;
    }
    return (
      <div>
        <div>{`Entry: ${mediflection.entry}`}</div>
        <div>{`Time: ${mediflection.time}`}</div>
      </div>
    );
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
            {this.renderMediflection(this.props.selectedMediflection)}
            <h4>You are signed in</h4>
            <ShowDate date={this.state.showDate} />
            <h3>Timer</h3>
            <Timer selectedMediflection={this.props.selectedMediflection} />
            <h3>Entry</h3>
            <Entry selectedMediflection={this.props.selectedMediflection} />
            <DayPicker
              todayButton="current month"
              selectedDays={[]}
              onDayClick={date => this.clickDay(date)}
            />
          </div>
        );
    }
  }
  render() {
    console.log('in render', this.props.mediflections);
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
