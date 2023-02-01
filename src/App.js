import "./App.css";
import BundeslandChart from "./BundeslandChart";
import GermanyMap from "./GermanyMap";
import React, { useState } from "react";
import Slider from "./Slider";

export const StateContext = React.createContext();
export const MapContext = React.createContext();
export const SliderContext = React.createContext();

function App() {
  const [currentState, setCurrentState] = useState("");
  const [checkedMap, setCheckedMap] = useState(false);
  const [selectedInterval, setSelectedInterval] = useState([0,45]);


  return (
    <div className="App">
      <div className="slider">
        <Slider selectedInterval={selectedInterval} setSelectedInterval={setSelectedInterval}  />
      </div>
      <div id="printInterval"></div>
      <div className="chart">
        <StateContext.Provider
          value={{ currentState, changeState: setCurrentState }}
        >
          <MapContext.Provider
            value={{ checkedMap, setCheckedMap: setCheckedMap }}
          >
            <SliderContext.Provider
             value={{ selectedInterval, setSelectedInterval: setSelectedInterval }}
            >
              <BundeslandChart />
            </SliderContext.Provider>
            
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
        <p>
          Das Diagramm stellt einen Überblick zu der Urlaubsentwicklung in
          Deutschland während Corona dar. Unterteilt ist es zum einen in die
          verschiedenen Unterkunftsarten, sowie in die Ankünfte von Gästen mit
          ständigem Wohnsitz innerhalb Deutschlands (Inland/Ausland). Durch das
          Klicken auf die Deutschlandkarte wird eine Aufteilung in die
          verschiedenen Bundesländer ermöglicht. Ein weiteres Feature ist die
          Möglichkeit, die zu dem Zeitpunkt veranlassten Corona Maßnahmen ein-
          und ausblenden zu können.
          <br />
          Quellen:{"  "}
          <a
            href="https://bit.ly/3JEk6gy"
            target="_blank"
            rel="noreferrer noopener"
          >
            Deutschland
          </a>
          ,{"  "}
          <a
            href="https://bit.ly/3JwZ0Rw"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bundesländer
          </a>
          ,{"  "}
          <a
            href="https://bit.ly/3WUlP4o"
            target="_blank"
            rel="noreferrer noopener"
          >
            Corona Maßnahmen
          </a>
        </p>
      </div>
    </div>
  );
}


export default App;
