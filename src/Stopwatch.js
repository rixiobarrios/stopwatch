import React, { Component } from "react";
import "./Stopwatch.css";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timer: ""
    };
  }
  handleClick = () => {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  };

  reset = () => {
    clearInterval(this.timer);
    this.setState({ count: 0 });
  };

  pause = () => {
    clearInterval(this.timer);
    let pauseTimer = this.state.count;
    this.setState({ count: pauseTimer });
  };

  render() {
    return (
      <div className="stopwatch">
        <h1>Current Count: {this.state.count}</h1>
        <div className="controls">
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
          <button className="start" onClick={this.handleClick}>
            Start
          </button>
          <button className="pause" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
