import React from "react";
import SearchWeather from "./SearchWeather";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchWeather />
      <br />
      <small>
        <a
          href="https://github.com/la-coccinelle/react-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Monika Grzegorczyk
      </small>
    </div>
  );
}
