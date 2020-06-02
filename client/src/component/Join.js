import React from "react";

const Join = () => {
  return (
    <div>
      <h1>Join</h1>
      <button
        onClick={() => {
          window.location.href = "http://whatstack.herokuapp.com/login";
        }}
      >
        Github login
      </button>
    </div>
  );
};

export default Join;
