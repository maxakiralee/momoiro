import React from "react";
import "./Posts.css";

const Words = () => {
  let arr = ["These", "are", "random", "letters"];
  let x, y, size;

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return arr.map((value, i) => {
    x = getRandomInt(10, 70);
    y = getRandomInt(10, 70);
    size = getRandomInt(1, 10);
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${y + i}%`,
          left: `${x + i}%`,
          fontSize: `${size}vw`,
          background: getRandomColor()
        }}
      >
        {value}
      </div>
    );
  });
};

export default function App() {
  return (
    <div className="App">
      <Words />
      <small className="left-top">13405</small>
      <small className="right-top">13405</small>
      <small className="left-bottom">13405</small>
      <small className="right-bottom">13405</small>
    </div>
  );
}
