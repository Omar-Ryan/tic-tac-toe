import React from "react";

const GameOver = () => {
  return (
    <div
      style={{
        width: "50%",
        height: "30%",
        border: "2px solid red",
        borderRadius: "10px",
      }}
    >
      <h1>GameOver</h1>
      <p>Good luck next time</p>
      <button>Once Again</button>
    </div>
  );
};

export default GameOver;
