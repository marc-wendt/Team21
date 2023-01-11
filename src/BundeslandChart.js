import BarChartBundesland from "./BarChartBundesland";
import CheckBox from "./CheckBox";
import React, { useEffect, useState, useContext } from "react";
import { StateContext } from './App';
import { colorsBundesländer } from "./colors";
import { keysBundesländer } from "./keys";
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
  bundesland = "Bayern";

  // Checkbox
  const [checkedInland, setCheckedInland] = useState(true);
  const [checkedAusland, setCheckedAusland] = useState(true);
  // eslint-disable-next-line
  const {currentState, changeState} = useContext(StateContext);

  useEffect(() => {
    console.log("CURRENT STATE CHART CLASS: "+(currentState));
  }, [currentState]);

  // Checkbox Action Handler
  const handleChangeInland = () => {
    setCheckedInland(!checkedInland);

    if (!checkedInland && !checkedAusland) {
      getBundeslandInlandData(bundesland);
    }
    if (checkedInland && checkedAusland) {
      getBundeslandAuslandData(bundesland);
    } else {
      getBundeslandData(bundesland);
    }
  };

  const handleChangeAusland = () => {
    setCheckedAusland(!checkedAusland);

    if (!checkedAusland && !checkedInland) {
      getBundeslandAuslandData(bundesland);
    }
    if (checkedAusland && checkedInland) {
      getBundeslandInlandData(bundesland);
    } else {
      getBundeslandData(bundesland);
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

  useEffect(() => {
    if (checkedInland && !checkedAusland) {
      getBundeslandInlandData(bundesland);
    }
    if (checkedInland && !checkedAusland) {
      getBundeslandAuslandData(bundesland);
    } else {
      getBundeslandData(bundesland);
    }

    // eslint-disable-next-line
  }, []);

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
    </div>
  );
}

export default BundeslandChart;
