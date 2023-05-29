import React from "react";
import ReactDOM from "react-dom";

import "./style.css"; //second way add style ---> 1. dar html niaz nist  2.mostaghim use mishe

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Hello />
        <Timer />
      </div>
    );
  }
}

class Hello extends React.Component {
  render() {
    return <h1>Timer Project Test - session 9</h1>;
  }
}

class Timer extends React.Component {
  constructor() {
    super(); //constructor parent = react.componentn
    this.state = {
      time: new Date().toLocaleDateString,
    };
  }

  render() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
    // return <h3 className="timer">Time: {new Date().toLocaleTimeString()}</h3>;
    return <h3 className="timer">Time: {this.state.time}</h3>;
  }
}

ReactDOM.render(<App />, document.getElementById("root")); //elem.render() == <App/>

//1.way : call render is not true  /2.or refresh page  3.if print state for every changes render method call by it self
// const timer = () => {
//   ReactDOM.render(<App />, document.getElementById("root")); //elem.render() == <App/>
// };

// setInterval(() => {
//   timer();
// }, 1000);
