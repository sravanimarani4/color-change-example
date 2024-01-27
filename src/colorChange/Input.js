import React from "react";
import colorNames from "colornames";

function Input({
  colorValue,
  setColorValue,
  setHexaColors,
  darkText,
  setDarkText,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add color Name:</label>
      <input
        autoFocus
        type="text"
        value={colorValue}
        placeholder="enter color"
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexaColors(colorNames(e.target.value));
        }}
      />
      <button onClick={() => setDarkText(!darkText)}>Toggle Text color</button>
    </form>
  );
}

export default Input;
