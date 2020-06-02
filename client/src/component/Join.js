import React from "react";
//require("dotenv").config();

const Join = () => {
  console.log(process.env);
  return (
    <div>
      <h1>Join</h1>
      <button
        onClick={() => {
          window.location.href = `${process.env.REACT_APP_BACKEND}/login`;
        }}
      >
        Github login
      </button>
    </div>
  );
};

export default Join;
