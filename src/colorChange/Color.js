import React from "react";

function Color({ colorValue, hexaColors, darkText }) {
  return (
    <div
      className="color"
      style={{ backgroundColor: colorValue, color: darkText ? "#000" : "#FFF" }}
    >
      <p>{colorValue ? colorValue : "Empty value"}</p>
      <p>{hexaColors ? hexaColors : ""}</p>
    </div>
  );
}

Color.defaultProps = {
  colorValue: "Empty",
};

export default Color;
