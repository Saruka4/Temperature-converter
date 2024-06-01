import React, { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(((value - 32) * 5 / 9).toFixed(2));
  };

  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <div>
        <label>Celsius: </label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div>
        <label>Fahrenheit: </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default App;
