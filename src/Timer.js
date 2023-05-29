import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

var interval;

class Timer extends React.Component {
  constructor() {
    console.log("constructor");
    super(); //constructor parent = react.componentn
    this.state = {
      number: 10,
    };
  }

  componentDidMount() {
    //avalin bar vaghti component sakhte shod anjam beshe
    console.log("didmount");
    interval = setInterval(() => {
      this.setState({
        number: this.state.number - 1,
      });
    }, 1000);
  }

  componentDidUpdate() {
    // mesl render bad har bar taghir --> render . didupdate
    // check conditions
    console.log("did update");
    if (this.state.number == 0) {
      clearInterval(interval);
    }
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  render() {
    console.log("render");
    return <h3 className="timer">Time: {this.state.number}</h3>;
  }
}

export default Timer;
