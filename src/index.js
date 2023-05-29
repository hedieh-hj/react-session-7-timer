import React from "react";
import ReactDOM from "react-dom";

//component : class
//baray use featurehay react bayd component class ke misazim az react ers bari kond
class App extends React.Component {
  render() {
    //hatman bayd chizi render konim
    return (
      <div>
        <h1>Timer Project Test - session 8</h1>
        <Timer />
        {/* <h2>it is {new Date().toLocaleTimeString()}</h2> */}
        {/* mishe chandta component dasht */}
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    return <h2>Timer: {new Date().toLocaleTimeString()}</h2>;
  }
}

//var elem = new App(); // = <App/> khodesh yek new misaze va render() call mikone
const timer = () => {
  ReactDOM.render(<App />, document.getElementById("root")); //elem.render() == <App/>
};

setInterval(() => {
  timer();
}, 1000);
