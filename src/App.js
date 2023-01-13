import "./App.css";
import BundeslandChart from "./BundeslandChart";
import GermanyMap from "./GermanyMap";
import React, { useState } from "react";

export const StateContext = React.createContext();
export const MapContext = React.createContext();

function App() {
  const [currentState, setCurrentState] = useState("");
  const [checkedMap, setCheckedMap] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <StateContext.Provider value={{ currentState, changeState: setCurrentState }}>
          <MapContext.Provider value={{ checkedMap, setCheckedMap: setCheckedMap }}>
          <BundeslandChart/>
          <GermanyMap />
          </MapContext.Provider>
        </StateContext.Provider>
      </header>
    </div>
  );
}

export default App;
