import BarChartBundesland from "./BarChartBundesland";
import CheckBox from "./CheckBox";
import React, { useEffect, useState } from "react";
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

// TODO: - Filter für Ausland funktioniert nicht korrekt (Inland Balken werden immer noch angezeigt)

function BundeslandChart() {
  // Checkbox
  const [checkedInland, setCheckedInland] = useState(true);
  const [checkedAusland, setCheckedAusland] = useState(true);

  // Checkbox Action Handler
  const handleChangeInland = () => {
    setCheckedInland(!checkedInland);

    if (!checkedInland && !checkedAusland) {
      setLoading(true);
      getBundeslandInlandData("Bayern");
    }
    if (checkedInland && checkedAusland) {
      setLoading(true);
      getBundeslandAuslandData("Bayern");
    } else {
      setLoading(true);
      getBundeslandData("Bayern");
    }
  };

  const handleChangeAusland = () => {
    setCheckedAusland(!checkedAusland);

    if (!checkedAusland && !checkedInland) {
      setLoading(true);
      getBundeslandAuslandData("Bayern");
    }
    if (checkedAusland && checkedInland) {
      setLoading(true);
      getBundeslandInlandData("Bayern");
    } else {
      setLoading(true);
      getBundeslandData("Bayern");
    }
  };

  // Data
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
    setLoading(false);
  };

  const getBundeslandInlandData = (bundesland) => {
    let d = [];
    switch (bundesland) {
      case "Baden-Württemberg":
        badenWürttemberg.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Bayern":
        bayern.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Berlin":
        berlin.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Brandenburg":
        brandenburg.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Bremen":
        bremen.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Hamburg":
        hamburg.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Hessen":
        hessen.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Mecklenburg-Vorpommern":
        mecklenburgVorpommern.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Niedersachsen":
        niedersachsen.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Nordrhein-Westfalen":
        nordrheinWestfalen.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Rheinland-Pfalz":
        rheinlandPfalz.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Saarland":
        saarland.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Sachsen-Anhalt":
        sachsenAnhalt.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Sachsen":
        sachsen.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Schleswig-Holstein":
        schleswigHolstein.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      case "Thüringen":
        thüringen.forEach(function (el) {
          d.push({
            month: el.month,
            inland: el.inland,
          });
        });
        break;
      default:
        break;
    }

    setData(d);
    setLoading(false);
  };

  const getBundeslandAuslandData = (bundesland) => {
    let d = [];
    switch (bundesland) {
      case "Baden-Württemberg":
        badenWürttemberg.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Bayern":
        bayern.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Berlin":
        berlin.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Brandenburg":
        brandenburg.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Bremen":
        bremen.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Hamburg":
        hamburg.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Hessen":
        hessen.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Mecklenburg-Vorpommern":
        mecklenburgVorpommern.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Niedersachsen":
        niedersachsen.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Nordrhein-Westfalen":
        nordrheinWestfalen.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Rheinland-Pfalz":
        rheinlandPfalz.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Saarland":
        saarland.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Sachsen-Anhalt":
        sachsenAnhalt.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Sachsen":
        sachsen.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Schleswig-Holstein":
        schleswigHolstein.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      case "Thüringen":
        thüringen.forEach(function (el) {
          d.push({
            month: el.month,
            ausland: el.ausland,
          });
        });
        break;
      default:
        break;
    }

    setData(d);
    setLoading(false);
  };

  useEffect(() => {
    //getBundeslandData("Bayern");

    if (checkedInland && !checkedAusland) {
      setLoading(true);
      getBundeslandInlandData("Bayern");
    }
    if (checkedInland && !checkedAusland) {
      setLoading(true);
      getBundeslandAuslandData("Bayern");
    } else {
      setLoading(true);
      getBundeslandData("Bayern");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <div className="App">Loading...</div>;

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
