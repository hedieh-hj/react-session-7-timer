import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

var interval;
class Timer extends React.Component {
  constructor() {
    console.log("constructor");
    super(); //constructor parent = react.componentn
    this.state = {
      time: new Date().toLocaleDateString(),
    };
  }

  componentDidMount() {
    //avalin bar vaghti component sakhte shod anjam beshe
    console.log("didmount");
    interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentDidUpdate() {
    // mesl render bad har bar taghir --> render . didupdate
    // check conditions
    console.log("did update");
    if (this.state.time == "2:02:50 PM") {
      clearInterval(interval);
    }
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  render() {
    console.log("render");
    return <h3 className="timer">Time: {this.state.time}</h3>;
  }
}

export default Timer;
