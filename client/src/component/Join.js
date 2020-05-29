import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Join</h1>
      <Link
        onClick={(event) => (!name ? event.preventDefault() : null)}
        to={`/rooms?name=${name}`}
      >
        <input
          placeholder="name"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <button type="submit">Join</button>
      </Link>
    </div>
  );
};

export default Join;
