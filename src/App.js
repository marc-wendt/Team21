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
        <h2>Beschreibungstext zu Daten:</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}

export default App;
