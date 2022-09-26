import React, { useState } from "react";

function App() {
  const [temperatureValue, setTemperatureValue] = useState(65);
  const [tempColor, setTempColor] = useState("neutral");
  const [text, setText] = useState('Neutral');

  const increaseTemp = () => {
    const newTemp = temperatureValue + 1;

    if(newTemp === 69) {
      setText('Nice.')
    }
    else if(newTemp >= 70){
      setTempColor('hot');
      setText('HOT');
    }
    else if (newTemp <= 69) {
      setTempColor('neutral');
      setText('Neutral');
    }
    setTemperatureValue(newTemp);
  }
  const decreaseTemp = () => {
    const newTemp = temperatureValue - 1;

    if(newTemp === 69) {
      setText('Nice.')
    }
    else if(newTemp < 69){
      setTempColor('cold');
      setText('BRRRRRR');
    }
    else if(newTemp >= 65 && newTemp <= 69) {
      setTempColor('neutral');
      setText('Neutral');
    }

    setTemperatureValue(newTemp);
  }
  return (
    <div className="container">
      <h1>{text}</h1>
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${tempColor}`}>{temperatureValue}°F</div>
        </div>
        <div className="button-container">
          <button onClick={() => increaseTemp()}>+</button>
          <button onClick={() => decreaseTemp()}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
