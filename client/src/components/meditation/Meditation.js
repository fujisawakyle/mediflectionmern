import React, { Component } from 'react';
import { connect } from 'react-redux';

import pluralize from 'pluralize';
import Sound from 'react-sound';

import ShowTracked from './showTracked';
import ShowRemaining from './ShowRemaining';

import * as actions from '../../actions';

class Meditation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLeft: this.secondsToTime(60),
      seconds: 60,
      logTime: 10,
      showInput: this.props.showInput,
      showTimer: false,
      startCountdown: false,
      timerDoneFlag: false,
      value: 1,
      timer: 0,
      time: this.props.selectedMediflection.time
    };
  }

  handleChange = event => {
    event.preventDefault();
    //set input lower bound to 1
    if (event.target.value < 1) {
      event.target.value = 0;
    }
    this.setState({
      value: event.target.value,
      seconds: event.target.value * 60
    });
  };

  startTimer = e => {
    e.preventDefault();
    this.handleSongStartPlaying();
    // if (this.props.timeVal == undefined) {
    //   console.log('error');
    //   // } else if (this.props.timeVal == 0) {
    //   //     $('.timerBox').append('<div class="start">invalid!</div>');
    //   //   setTimeout(function() {
    //   //     $('.start')
    //   //       .hide()
    //   //       .fadeOut(1000);
    //   //   }, 2000);
    //   // }
    // } else {

    this.setState({
      showTimer: true,
      showInput: false,
      startCountdown: true,
      timerDoneFlag: false,
      seconds: this.state.value * 60
    });

    if (this.state.timer == 0) {
      this.state.timer = setInterval(this.countDown, 100);
    }

    // document
    //   .getElementsByClassName('c-site__component--timer')[0]
    //   .classList.add('timer__window--open');
    // }
  };

  continueTimer = e => {
    this.setState({
      startCountdown: true
    });
    e.preventDefault();
    if (this.state.timer == 0) {
      this.state.timer = setInterval(this.countDown, 1000);
    }
  };

  pauseTimer = e => {
    clearInterval(this.state.timer);
    this.state.timer = 0;
    this.setState({
      startCountdown: false
    });
  };

  exitTimer = e => {
    this.handleSongFinishedPlaying();
    // document
    //   .getElementsByClassName('c-site__component--timer')[0]
    //   .classList.remove('timer__window--open');
    // document
    //   .getElementsByClassName('timer__exit')[0]
    //   .classList.remove('timer__exit--active');
    clearInterval(this.state.timer);
    this.state.timer = 0;
    this.setState({
      showTimer: false,
      startCountdown: false,
      showInput: true,
      seconds: this.props.seconds
    });
    //this.props.timerDoneReset();
  };

  handleSongStartPlaying = () => {
    this.setState({
      playStatus: Sound.status.PLAYING
    });
  };

  handleSongFinishedPlaying = () => {
    this.setState({
      playStatus: Sound.status.STOPPED
    });
  };

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  countDown = () => {
    console.log('this.state.seconds', this.state.seconds);
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    let log = this.state.logTime - 1;
    this.setState({
      timeLeft: this.secondsToTime(seconds),
      seconds: seconds,
      logTime: log
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.state.timer);
      this.handleSongStartPlaying();
      this.setState({
        timerDoneFlag: true
      });
    }

    //log time every 1 minute
    console.log('log', log);
    console.log('time', this.state.time);
    if (log === 0) {
      this.setState({
        logTime: 60,
        time: this.state.time + 1
      });

      //log database
      const updatedMediflection = this.props.selectedMediflection;
      updatedMediflection.time = this.state.time;
      this.props.updateMediflection(updatedMediflection);
      this.props.updateDaysArray([
        new Date(this.props.selectedMediflection.date)
      ]);
    }
  };

  render() {
    console.log(
      'this.props.selectedMediflection.time',
      this.props.selectedMediflection.time
    );
    console.log(
      'this.props.selectedMediflection',
      this.props.selectedMediflection
    );
    console.log('this.state.time', this.state.time);

    const { time } = this.props.selectedMediflection;

    let minutesInput = ' minute';
    if (this.state.value != 1) {
      minutesInput = ' minutes';
    }

    let timeInput;
    if (this.state.showInput && this.props.today) {
      timeInput = (
        <div className="clockBox">
          <input
            className="component component__field component__field--timer"
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />

          {minutesInput}
        </div>
      );
    } else {
      timeInput = <div> </div>;
    }

    let buttonDisplay;
    const startButton = (
      <button className="button startButton" onClick={this.startTimer}>
        Start
      </button>
    );
    const continueButton = (
      <button className="button continueButton" onClick={this.continueTimer}>
        Continue
      </button>
    );
    const exitButton = (
      <button
        className="button timer__exit timer__exit--active"
        onClick={this.exitTimer}
      >
        X
      </button>
    );
    const pauseButton = (
      <button className="button" onClick={this.pauseTimer}>
        Pause
      </button>
    );
    if (this.props.today) {
      //CASE: timer in session - check for finished
      if (this.state.startCountdown && this.state.showTimer) {
        // console.log(' 1');
        if (this.state.timerDoneFlag) {
          console.log('this.state.timerDoneFlag', this.state.timerDoneFlag);
          buttonDisplay = <div>{exitButton}</div>;
          //
        } else {
          buttonDisplay = (
            <div>
              {pauseButton} {exitButton}
            </div>
          );
        }
        // CASE: timer has not started
      } else if (!this.state.startCountdown && !this.state.showTimer) {
        // console.log('2');
        buttonDisplay = <div>{startButton}</div>;
        // CASE: timer is paused
      } else if (!this.state.startCountdown && this.state.showTimer) {
        // console.log('3');
        buttonDisplay = (
          <div>
            {continueButton} {exitButton}
          </div>
        );
      }
    }

    return (
      <div>
        <h3>Meditation</h3>
        <ShowTracked time={time} />
        {timeInput}

        {this.state.showTimer && (
          <ShowRemaining
            hours={this.state.timeLeft.h}
            minutes={this.state.timeLeft.m}
            seconds={this.state.timeLeft.s}
            logTime={this.state.logTime}
          />
        )}
        {buttonDisplay}

        <Sound
          url="sessionBell.mp3"
          playStatus={this.state.playStatus}
          playFromPosition={0 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      </div>
    );
  }
}

function mapStateToProps({ selectedMediflection }) {
  return {
    selectedMediflection
  };
}

Meditation = connect(mapStateToProps, actions)(Meditation);

export default Meditation;
