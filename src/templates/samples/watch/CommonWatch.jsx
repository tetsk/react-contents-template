import React from 'react';

import * as lib from 'lib';

class CommonWatch extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date();
    this.state = {
      intervalId: null,
      year: this.getYear(now),
      month: this.getMonth(now),
      date: this.getDate(now),
      hours: this.getHours(now),
      minutes: this.getMinutes(now),
      seconds: this.getSeconds(now),
    };

    this.setTime = this.setTime.bind(this);
    setInterval(this.setTime, 1000);
  }

  getYear(date) {
    return lib.zeroPadding(date.getFullYear(), 4);
  }
  getMonth(date) {
    return lib.zeroPadding(date.getMonth() + 1, 2);
  }
  getDate(date) {
    return lib.zeroPadding(date.getDate(), 2);
  }
  getHours(date) {
    return lib.zeroPadding(date.getHours(), 2);
  }
  getMinutes(date) {
    return lib.zeroPadding(date.getMinutes(), 2);
  }
  getSeconds(date) {
    return lib.zeroPadding(date.getSeconds(), 2);
  }

  setTime() {
    const now = new Date();

    this.setState({
      year: this.getYear(now),
      month: this.getMonth(now),
      date: this.getDate(now),
      hours: this.getHours(now),
      minutes: this.getMinutes(now),
      seconds: this.getSeconds(now),
    });
  }

  render() {
    const displayDate =
      this.state.year + '/' + this.state.month + '/' + this.state.date;
    const displayTime =
      this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds;

    return (
      <div className="CommonWatch">
        <div className="title">Common Watch</div>

        <div className="display">
          <div className="dater">{displayDate}</div>
          <div className="timer">{displayTime}</div>
        </div>
      </div>
    );
  }
}

export default CommonWatch;
