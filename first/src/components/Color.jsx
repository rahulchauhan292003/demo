import React from "react";
import { useState } from "react";
import "./Color.css";

const Color = () => {
  const [color, setColor] = useState("yellow");

  const handlered = () => {
    setColor("red");
  };

  const handleblue = () => {
    setColor("blue");
  };

  const handlegreen = () => {
    setColor("green");
  };

  const handlegray = () => {
    setColor("gray");
  };

  return (
    <>
      <div className="but" style={{ backgroundColor: color }}>
        <div className="b1" style={{ backgroundColor: color }}>
          <button onClick={handlered}>change in red</button>
        </div>
        <div className="b2">
          <button onClick={handleblue}>change in blue</button>
        </div>
        <div className="b3">
          <button onClick={handlegreen}>change in green</button>
        </div>
        <div className="b4">
          <button onClick={handlegray}>change in gray</button>
        </div>
      </div>
    </>
  );
};

export default Color;
