import BarChartBundesland from "./BarChartBundesland";
import BarChart from "./BarChart";
import CheckBox from "./CheckBox";
import ToggleSwitch from "./ToggleSwitch";
import React, { useEffect, useState, useContext } from "react";
import { StateContext, MapContext } from "./App";
import { colors, colorsBundesländer } from "./colors";
import { keys, keysBundesländer } from "./keys";
import { data as dataGermany } from "./data";
import {
  getBundeslandData,
  getBundeslandInlandData,
  getBundeslandAuslandData,
  getEmptyBundeslandData,
} from "./getData";

function BundeslandChart() {
  const [isLoading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [checkedChart, setCheckedChart] = useState(true);
  // eslint-disable-next-line
  const { currentState, changeState } = useContext(StateContext);
  // eslint-disable-next-line
  const { checkedMap, setCheckedMap } = useContext(MapContext);

  //Switch Map if and if no state is selected
  useEffect(() => {
    if (checkedMap) {
      setLoading(false);
      setCheckedChart(true);
    } else {
      setLoading(true);
    }
  }, [checkedMap]);

  // Checkbox
  const [checkedInland, setCheckedInland] = useState(true);
  const [checkedAusland, setCheckedAusland] = useState(true);
  const [checkedCoronaBg, setCheckedCoronaBg] = useState(false);

  useEffect(() => {
    if (checkedAusland && checkedInland) {
      getBundeslandData(currentState, setData);
    } else if (checkedAusland && !checkedInland) {
      getBundeslandAuslandData(currentState, setData);
    } else if (checkedInland && !checkedAusland) {
      getBundeslandInlandData(currentState, setData);
    } else if (!checkedInland && !checkedAusland) {
      getEmptyBundeslandData(setData);
    } else {
      getBundeslandData(currentState, setData);
    }
  }, [currentState, checkedAusland, checkedInland, checkedCoronaBg]);

  // Checkbox Action Handler
  const handleChangeInland = () => {
    setCheckedInland(!checkedInland);
  };

  const handleChangeAusland = () => {
    setCheckedAusland(!checkedAusland);
  };

  const handleChangeCoronaBg = () => {
    setCheckedCoronaBg(!checkedCoronaBg);
  };

  // Data
  const [data, setData] = useState([]);

  if (isLoading)
    return (
      <div>
        <div className="header">
          <p>
            Ankünfte von Inländern pro Beherbergungsart für gesamt Deutschland
          </p>
        </div>
        <BarChart data={dataGermany} keys={keys} colors={colors} />
        <br></br>
        <div className="textHeader">
          <p className="legendHeader"> Legende:</p>
        </div>
      </div>
    );

  return (
    <div>
      <div className="header">
        <p>Ankünfte in {currentState}</p>
      </div>
      <BarChartBundesland
        data={data}
        keys={keysBundesländer}
        colors={colorsBundesländer}
        showBg={checkedCoronaBg}
      />
      <br></br>
      <div className="textHeader">
        <p className="legendHeader"> Legende:</p>
        <p className="filterHeader"> Filter: </p>
      </div>
      <CheckBox
        label="Inland"
        value={checkedInland}
        onChange={handleChangeInland}
      />
      <CheckBox
        label="Ausland"
        value={checkedAusland}
        onChange={handleChangeAusland}
      />
      <br></br>
      <ToggleSwitch
        label="Corona Maßnahmen"
        isOn={checkedCoronaBg}
        handleToggle={handleChangeCoronaBg}
      />
    </div>
  );
}

export default BundeslandChart;
