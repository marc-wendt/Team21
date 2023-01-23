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
  badenWürttemberg,
  bayern,
  berlin,
  bremen,
  hamburg,
  hessen,
  mecklenburgVorpommern,
  niedersachsen,
  nordrheinWestfalen,
  rheinlandPfalz,
  saarland,
  sachsenAnhalt,
  sachsen,
  schleswigHolstein,
  thüringen,
  brandenburg,
} from "./bundeslandData";

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
    if (
      (checkedAusland && checkedInland) ||
      (!checkedAusland && !checkedInland)
    ) {
      getBundeslandData(currentState);
    } else if (checkedAusland && !checkedInland) {
      getBundeslandAuslandData(currentState);
    } else if (checkedInland && !checkedAusland) {
      getBundeslandInlandData(currentState);
    } else {
      getBundeslandData(currentState);
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

  // get data (ausland and inland) for specific bundesland
  const getBundeslandData = (bundesland) => {
    switch (bundesland) {
      case "Baden-Württemberg":
        setData(badenWürttemberg);
        break;
      case "Bayern":
        setData(bayern);
        break;
      case "Berlin":
        setData(berlin);
        break;
      case "Brandenburg":
        setData(brandenburg);
        break;
      case "Bremen":
        setData(bremen);
        break;
      case "Hamburg":
        setData(hamburg);
        break;
      case "Hessen":
        setData(hessen);
        break;
      case "Mecklenburg-Vorpommern":
        setData(mecklenburgVorpommern);
        break;
      case "Niedersachsen":
        setData(niedersachsen);
        break;
      case "Nordrhein-Westfalen":
        setData(nordrheinWestfalen);
        break;
      case "Rheinland-Pfalz":
        setData(rheinlandPfalz);
        break;
      case "Saarland":
        setData(saarland);
        break;
      case "Sachsen-Anhalt":
        setData(sachsenAnhalt);
        break;
      case "Sachsen":
        setData(sachsen);
        break;
      case "Schleswig-Holstein":
        setData(schleswigHolstein);
        break;
      case "Thüringen":
        setData(thüringen);
        break;
      default:
        break;
    }
  };

  // get only inland data for specific bundesland
  const getBundeslandInlandData = (bundesland) => {
    let d;

    switch (bundesland) {
      case "Baden-Württemberg":
        d = badenWürttemberg;
        break;
      case "Bayern":
        d = bayern;
        break;
      case "Berlin":
        d = berlin;
        break;
      case "Brandenburg":
        d = brandenburg;
        break;
      case "Bremen":
        d = bremen;
        break;
      case "Hamburg":
        d = hamburg;
        break;
      case "Hessen":
        d = hessen;
        break;
      case "Mecklenburg-Vorpommern":
        d = mecklenburgVorpommern;
        break;
      case "Niedersachsen":
        d = niedersachsen;
        break;
      case "Nordrhein-Westfalen":
        d = nordrheinWestfalen;
        break;
      case "Rheinland-Pfalz":
        d = rheinlandPfalz;
        break;
      case "Saarland":
        d = saarland;
        break;
      case "Sachsen-Anhalt":
        d = sachsenAnhalt;
        break;
      case "Sachsen":
        d = sachsen;
        break;
      case "Schleswig-Holstein":
        d = schleswigHolstein;
        break;
      case "Thüringen":
        d = thüringen;
        break;
      default:
        break;
    }

    let arr = [];
    d.forEach(function (el) {
      arr.push({
        month: el.month,
        inland: el.inland,
        ausland: 0,
        hotels: el.hotels,
      });
    });

    setData(arr);
  };

  // get only ausland data for specific bundesland
  const getBundeslandAuslandData = (bundesland) => {
    let d;

    switch (bundesland) {
      case "Baden-Württemberg":
        d = badenWürttemberg;
        break;
      case "Bayern":
        d = bayern;
        break;
      case "Berlin":
        d = berlin;
        break;
      case "Brandenburg":
        d = brandenburg;
        break;
      case "Bremen":
        d = bremen;
        break;
      case "Hamburg":
        d = hamburg;
        break;
      case "Hessen":
        d = hessen;
        break;
      case "Mecklenburg-Vorpommern":
        d = mecklenburgVorpommern;
        break;
      case "Niedersachsen":
        d = niedersachsen;
        break;
      case "Nordrhein-Westfalen":
        d = nordrheinWestfalen;
        break;
      case "Rheinland-Pfalz":
        d = rheinlandPfalz;
        break;
      case "Saarland":
        d = saarland;
        break;
      case "Sachsen-Anhalt":
        d = sachsenAnhalt;
        break;
      case "Sachsen":
        d = sachsen;
        break;
      case "Schleswig-Holstein":
        d = schleswigHolstein;
        break;
      case "Thüringen":
        d = thüringen;
        break;
      default:
        break;
    }

    let arr = [];
    d.forEach(function (el) {
      arr.push({
        month: el.month,
        inland: 0,
        ausland: el.ausland,
        hotels: el.hotels,
      });
    });

    setData(arr);
  };

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
