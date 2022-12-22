import "./App.css";
//import BarChart from "./BarChart";
import BarChartTest from "./BarChartTest";
//import { data } from "./data";
import { keys, keysBundesländer } from "./keys";
import { colors, colorsBundesländer } from "./colors";
import { getBundeslandData } from "./bundeslandData";
import React, { useEffect, useState } from "react";

function App() {
  const [testData, setTestData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getBundeslandData("Bayern").then((data) => {
      setTestData(data);
      setLoading(false);
    });
  };

  if (isLoading) return <div className="App">Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <BarChartTest
          data={testData}
          keys={keysBundesländer}
          colors={colorsBundesländer}
        />
      </header>
    </div>
  );
}

export default App;
