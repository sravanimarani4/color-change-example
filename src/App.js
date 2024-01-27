import { useState } from "react";
import Color from "./colorChange/Color";
import Input from "./colorChange/Input";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexaColors, setHexaColors] = useState("");
  const [darkText, setDarkText] = useState(true);
  return (
    <div className="App">
      <Color
        colorValue={colorValue}
        hexaColors={hexaColors}
        darkText={darkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexaColors={setHexaColors}
        darkText={darkText}
        setDarkText={setDarkText}
      />
    </div>
  );
}

export default App;
