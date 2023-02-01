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
          Das Diagramm stellt einen Überblick zu der Urlaubsentwicklung in Deutschland während Corona dar. Unterteilt ist es zum einen in die verschiedenen Unterkunftsarten, sowie in die Ankünfte von Gästen mit ständigem Wohnsitz innerhalb Deutschlands (Inland/Ausland). 
          Durch das Klicken auf die Deutschlandkarte wird eine Aufteilung in die verschiedenen Bundesländer ermöglicht. 
          Ein weiteres Feature ist die Möglichkeit, die zu dem Zeitpunkt veranlassten Corona Maßnahmen ein- und ausblenden zu können.<br />
          <br />
         Quellen:<br />
          Daten Deutschland: https://bit.ly/3JEk6gy <br />
          Daten Bundesländer: https://bit.ly/3JwZ0Rw <br />
          Daten Corona Maßnahmen: https://bit.ly/3WUlP4o
          </p>
          

        
      </div>
    </div>
  );
}

export default App;
