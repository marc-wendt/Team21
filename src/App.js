import "./App.css";
import BundeslandChart from "./BundeslandChart";
import GermanyMap from "./GermanyMap";
import React, { useState } from "react";

export const StateContext = React.createContext();

function App() {
  const [currentState, setCurrentState] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <StateContext.Provider
          value={{ currentState, changeState: setCurrentState }}
        >
          <BundeslandChart
            value={{ currentState, changeState: setCurrentState }}
          />
          <GermanyMap />
        </StateContext.Provider>
      </header>
    </div>
  );
}

export default App;
