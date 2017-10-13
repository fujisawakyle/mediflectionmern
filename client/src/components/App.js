import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Entry from './reflection/Entry';
import Timer from './meditation/Timer';
import ShowDate from './ShowDate';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

class App extends Component {
  state = {
    entry: ''
  };
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchMediflections();
    this.clickDay(new Date());
  }
  renderMediflections() {
    return this.props.mediflections.map(mediflection => {
      return (
        <div key={mediflection._id}>
          <p>{mediflection.date}</p>
          <p>{mediflection.entry}</p>
        </div>
      );
    });
  }

  findData = date => {
    console.log('day', date);
    console.log('mediflections', this.props.mediflections);

    const data = this.props.mediflections.filter(mediflection => {
      return mediflection.date == date;
    });
    data.length > 0 ? this.props.fetchData(data[0]) : this.props.fetchData({});
  };

  clickDay = date => {
    date = String(date).slice(0, 15);
    this.props.updateDate(date);
    this.findData(date);

    //make an action/reducer that changes the state of selectedDay
    //to what ever is chosen.

    // console.log(day);
    // console.log('new Date(2017, 3, 12)', new Date(2017, 3, 12));
    // console.log('new Date(day)', new Date(day));
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
            <ShowDate date={this.props.date} />
            <h3>Timer</h3>
            <Timer />
            <h3>Entry</h3>
            <Entry entry={this.props.data.entry} date={this.props.date} />
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
    console.log(this.props);
    return (
      <div>
        <Header />
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ user, mediflections, date, data }) {
  return {
    user,
    mediflections,
    date,
    data
  };
}

export default connect(mapStateToProps, actions)(App);
