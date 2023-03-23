/** creating and nesting components */

import React, { useState } from "react";

export default function MyButtton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          color: "white",
          backgroundColor: "black",
          padding: "1rem",
        }}
      >
        Click {count} times
      </button>
      ;
    </div>
  );
}
