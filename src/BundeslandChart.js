import BarChartBundesland from "./BarChartBundesland";
import BarChart from "./BarChart";
import CheckBox from "./CheckBox";
import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "./App";
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

function BundeslandChart(bundesland) {
  // const to control which Bundesland gets displayed - remove once selection with interactive map works
  //bundesland = "Bayern";
  const [isLoading, setLoading] = useState(true);
  const [checkedChart, setCheckedChart] = useState(true);

  // Checkbox Action Handler
  const handleChangeChart = () => {
    setCheckedChart(!checkedChart);

    if (!checkedChart) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  // Checkbox
  const [checkedInland, setCheckedInland] = useState(true);
  const [checkedAusland, setCheckedAusland] = useState(true);
  // eslint-disable-next-line
  const { currentState, changeState } = useContext(StateContext);

  useEffect(() => {
    console.log("CURRENT STATE CHART CLASS: " + currentState);

    // if (currentState !== "") {
    //   console.log(currentChart);
    //   isLoading(false);
    // } else {
    //   isLoading(true);
    // }

    if (checkedInland && !checkedAusland) {
      getBundeslandInlandData(currentState);
    }
    if (checkedInland && !checkedAusland) {
      getBundeslandAuslandData(currentState);
    } else {
      getBundeslandData(currentState);
    }
  }, [currentState, checkedAusland, checkedInland]);

  // Checkbox Action Handler
  const handleChangeInland = () => {
    setCheckedInland(!checkedInland);

    if (!checkedInland && !checkedAusland) {
      getBundeslandInlandData(currentState);
    }
    if (checkedInland && checkedAusland) {
      getBundeslandAuslandData(currentState);
    } else {
      getBundeslandData(currentState);
    }
  };

  const handleChangeAusland = () => {
    setCheckedAusland(!checkedAusland);

    if (!checkedAusland && !checkedInland) {
      getBundeslandAuslandData(currentState);
    }
    if (checkedAusland && checkedInland) {
      getBundeslandInlandData(currentState);
    } else {
      getBundeslandData(currentState);
    }
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
      });
    });

    setData(arr);
  };

  // useEffect(() => {
  //   setChart(true);
  //   //getBundeslandData("Bayern");
  //   // eslint-disable-next-line
  // }, []);

  if (isLoading)
    return (
      <div>
        <BarChart data={dataGermany} keys={keys} colors={colors} />
        <br></br>
        <br></br>
        <CheckBox
          label="Switch Chart"
          value={checkedChart}
          onChange={handleChangeChart}
        />
      </div>
    );

  return (
    <div>
      <BarChartBundesland
        data={data}
        keys={keysBundesländer}
        colors={colorsBundesländer}
      />
      <br></br>
      <br></br>
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
      <br></br>
      <CheckBox
        label="Switch Chart"
        value={checkedChart}
        onChange={handleChangeChart}
      />
    </div>
  );
}

export default BundeslandChart;
