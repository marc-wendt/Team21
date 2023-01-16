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
      <div className="header">
        <p>Team21</p>
      </div>
      <div className="chart">
        <StateContext.Provider
          value={{ currentState, changeState: setCurrentState }}
        >
          <MapContext.Provider
            value={{ checkedMap, setCheckedMap: setCheckedMap }}
          >
            <BundeslandChart />
          </MapContext.Provider>
        </StateContext.Provider>
      </div>
      <div className="map">
        <StateContext.Provider
          value={{ currentState, changeState: setCurrentState }}
        >
          <MapContext.Provider
            value={{ checkedMap, setCheckedMap: setCheckedMap }}
          >
            <GermanyMap />
          </MapContext.Provider>
        </StateContext.Provider>
      </div>
      <div className="description">
        <p>Beschreibungstext zu Daten</p>
      </div>
    </div>
  );
}

export default App;
