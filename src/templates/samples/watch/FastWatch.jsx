import React from 'react';

import * as lib from 'lib';

const rate = 1.2;

class FastWatch extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date();
    const display = this.calTime(now);
    this.state = {
      intervalId: null,
      year: this.getYear(display),
      month: this.getMonth(display),
      date: this.getDate(display),
      hours: this.getHours(display),
      minutes: this.getMinutes(display),
      seconds: this.getSeconds(display),
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

  calTime(now) {
    if (now.getHours() >= 18) {
      const time18 = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        18,
        0,
        0
      );
      const delta = now.getTime() - time18.getTime();
      return new Date(time18.getTime() + Math.floor(delta * rate));
    } else if (now.getHours() < 6) {
      const time00 = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0
      );
      const time06 = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        6,
        0,
        0
      );
      const delta6hours = time06.getTime() - time00.getTime();
      const delta = now.getTime() - (time00.getTime() - delta6hours);
      return new Date(
        time00.getTime() - delta6hours + Math.floor(delta * rate)
      );
    }
    return now;
  }

  setTime() {
    const display = this.calTime(new Date());
    this.setState({
      year: this.getYear(display),
      month: this.getMonth(display),
      date: this.getDate(display),
      hours: this.getHours(display),
      minutes: this.getMinutes(display),
      seconds: this.getSeconds(display),
    });
  }

  render() {
    const displayDate =
      this.state.year + '/' + this.state.month + '/' + this.state.date;
    const displayTime =
      this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds;

    return (
      <div className="FastWatch">
        <div className="title">Fast Watch</div>

        <div className="display">
          <div className="dater">{displayDate}</div>
          <div className="timer">{displayTime}</div>
        </div>
      </div>
    );
  }
}

export default FastWatch;
