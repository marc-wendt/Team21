import BarChartBundesland from "./BarChartBundesland";
import CheckBox from "./CheckBox";
import React, { useEffect, useState } from "react";
import { colorsBundesländer } from "./colors";
import { keysBundesländer } from "./keys";
import { getBundeslandData } from "./bundeslandData";

// TODO: - Loading für wechsel zwischen Charts zu lange

const BundeslandChart = () => {
  // Checkbox
  const [checkedInland, setCheckedInland] = useState(true);
  const [checkedAusland, setCheckedAusland] = useState(true);

  // Checkbox Action Handler
  const handleChangeInland = () => {
    setCheckedInland(!checkedInland);

    if (!checkedInland && !checkedAusland) {
      setLoading(true);
      getInlandData("Bayern");
    }
    if (checkedInland && checkedAusland) {
      setLoading(true);
      getAuslandData("Bayern");
    } else {
      setLoading(true);
      getData("Bayern");
    }
  };

  const handleChangeAusland = () => {
    setCheckedAusland(!checkedAusland);

    if (!checkedAusland && !checkedInland) {
      setLoading(true);
      getAuslandData("Bayern");
    }
    if (checkedAusland && checkedInland) {
      setLoading(true);
      getInlandData("Bayern");
    } else {
      setLoading(true);
      getData("Bayern");
    }
  };

  // Data
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getData = (bundesland) => {
    getBundeslandData(bundesland).then((data) => {
      setData(data);
      setLoading(false);
    });
  };

  const getInlandData = (bundesland) => {
    getBundeslandData(bundesland).then((data) => {
      const d = data.map(({ month, inland }) => {
        return { month, inland };
      });

      setData(d);
      setLoading(false);
    });
  };

  const getAuslandData = (bundesland) => {
    getBundeslandData(bundesland).then((data) => {
      const d = data.map(({ month, ausland }) => {
        return { month, ausland };
      });

      setData(d);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData("Bayern");

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
};

export default BundeslandChart;
