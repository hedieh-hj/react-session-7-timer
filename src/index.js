import React from "react";
import ReactDOM from "react-dom";

// const elem = (
//   <div>
//     <h1>time is :</h1>
//     <h2>it is {new Date().toLocaleTimeString()}</h2>
//   </div>
// );

const timer = () => {
  const elem = (
    <div>
      <h1>time is :</h1>
      <h2>it is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(elem, document.getElementById("root"));
};

setInterval(() => {
  timer();
}, 1000);
