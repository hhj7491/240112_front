import { useState } from "react";

function Button({ color, fontSize, name, click, msg }) {
  return (
    <button
      onClick={() => click(msg)}
      style={{ background: color, fontSize: fontSize }}
    >
      {name}
    </button>
  );
}

export default Button;
