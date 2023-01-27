import BarChartBundesland from "./BarChartBundesland";
import BarChart from "./BarChart";
import CheckBox from "./CheckBox";
import ToggleSwitch from "./ToggleSwitch";
import React, { useEffect, useState, useContext } from "react";
import { StateContext, MapContext } from "./App";
import { colors, colorsBundesländer } from "./colors";
import { keys, keysBundesländer } from "./keys";
import { dataGermany } from "./data";
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

  // Data
  const [data, setData] = useState([]);
  const [dataG, setDataGermany] = useState([]);

  // Checkbox
  const [checkedInland, setCheckedInland] = useState(true);
  const [checkedAusland, setCheckedAusland] = useState(true);
  const [checkedCoronaBg, setCheckedCoronaBg] = useState(false);

  const [checkboxesBeherbergung, setCheckboxesBeherbergung] = useState({
    hotelsOhneGarnis: true,
    hotels: true,
    gasthöfe: true,
    pensionen: true,
    ferienhäuser: true,
    jugendherbergen: true,
    campingplätze: true,
    sonstige: true,
  });

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

  useEffect(() => {
    let d = dataGermany;
    let arr = [];

    d.forEach(function (el) {
      arr.push({
        month: el.month,
        hotels_ohne_garnis_inland: checkboxesBeherbergung.hotelsOhneGarnis
          ? el.hotels_ohne_garnis_inland
          : 0,
        hotels_ohne_garnis_ausland: el.hotels_ohne_garnis_ausland,
        hotels_inland: checkboxesBeherbergung.hotels ? el.hotels_inland : 0,
        hotels_ausland: el.hotels_ausland,
        gasthöfe_inland: checkboxesBeherbergung.gasthöfe
          ? el.gasthöfe_inland
          : 0,
        gasthöfe_ausland: el.gasthöfe_ausland,
        pensionen_inland: checkboxesBeherbergung.pensionen
          ? el.pensionen_inland
          : 0,
        pensionen_ausland: el.pensionen_ausland,
        ferienhäuser_und_ferienwohnungen_inland:
          checkboxesBeherbergung.ferienhäuser
            ? el.ferienhäuser_und_ferienwohnungen_inland
            : 0,
        ferienhäuser_und_ferienwohnungen_ausland:
          el.ferienhäuser_und_ferienwohnungen_ausland,
        jugendherbergen_inland: checkboxesBeherbergung.jugendherbergen
          ? el.jugendherbergen_inland
          : 0,
        jugendherbergen_ausland: el.jugendherbergen_ausland,
        campingplätze_inland: checkboxesBeherbergung.campingplätze
          ? el.campingplätze_inland
          : 0,
        campingplätze_ausland: el.campingplätze_ausland,
        sonstige_inland: checkboxesBeherbergung.sonstige
          ? el.sonstige_inland
          : 0,
        sonstige_ausland: el.sonstige_ausland,
        insgesamt_inland: el.insgesamt_inland,
        insgesamt_ausland: el.insgesamt_ausland,
      });
    });
    setDataGermany(arr);
  }, [checkboxesBeherbergung, setDataGermany]);

  const handleCheckboxBeherbergungChange = (name, checked) => {
    setCheckboxesBeherbergung({ ...checkboxesBeherbergung, [name]: !checked });
  };

  if (isLoading)
    return (
      <div>
        <div className="header">
          <p>
            Ankünfte von Inländern pro Beherbergungsart für gesamt Deutschland
          </p>
        </div>
        <BarChart data={dataG} keys={keys} colors={colors} />
        <br></br>
        <div className="textHeader">
          <p className="legendHeader"> Legende:</p>
          <p className="filterHeader"> Filter: </p>
        </div>
        <div className="checkboxgrid">
          <div className="checkboxgrid1">
            <CheckBox
              label="Hotels"
              value={checkboxesBeherbergung.hotels}
              onChange={() =>
                handleCheckboxBeherbergungChange(
                  "hotels",
                  checkboxesBeherbergung.hotels
                )
              }
            />
            <CheckBox
              label="Hotels ohne Garnis"
              value={checkboxesBeherbergung.hotelsOhneGarnis}
              onChange={() =>
                handleCheckboxBeherbergungChange(
                  "hotelsOhneGarnis",
                  checkboxesBeherbergung.hotelsOhneGarnis
                )
              }
            />
            <CheckBox
              label="Gasthöfe"
              value={checkboxesBeherbergung.gasthöfe}
              onChange={() =>
                handleCheckboxBeherbergungChange(
                  "gasthöfe",
                  checkboxesBeherbergung.gasthöfe
                )
              }
            />
            <CheckBox
              label="Pensionen"
              value={checkboxesBeherbergung.pensionen}
              onChange={() =>
                handleCheckboxBeherbergungChange(
                  "pensionen",
                  checkboxesBeherbergung.pensionen
                )
              }
            />
          </div>
          <div className="checkboxgrid2">
            <CheckBox
              label="Ferienhäuser und -wohnungen"
              value={checkboxesBeherbergung.ferienhäuser}
              onChange={() =>
                handleCheckboxBeherbergungChange(
                  "ferienhäuser",
                  checkboxesBeherbergung.ferienhäuser
                )
              }
            />
            <CheckBox
              label="Jugendherbergen"
              value={checkboxesBeherbergung.jugendherbergen}
              onChange={() =>
                handleCheckboxBeherbergungChange(
                  "jugendherbergen",
                  checkboxesBeherbergung.jugendherbergen
                )
              }
            />
            <CheckBox
              label="Campingplätze"
              value={checkboxesBeherbergung.campingplätze}
              onChange={() =>
                handleCheckboxBeherbergungChange(
                  "campingplätze",
                  checkboxesBeherbergung.campingplätze
                )
              }
            />
            <CheckBox
              label="Sonstige"
              value={checkboxesBeherbergung.sonstige}
              onChange={() =>
                handleCheckboxBeherbergungChange(
                  "sonstige",
                  checkboxesBeherbergung.sonstige
                )
              }
            />
          </div>
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
