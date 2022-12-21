import "./App.css";
//import BarChart from "./BarChart";
import BarChartTest from "./BarChartTest";
//import { data } from "./data";
import { keys, keysBundesländer } from "./keys";
import { colors, colorsBundesländer } from "./colors";
import { getBundeslandData } from "./bundeslandData";

function App() {
  let testData = [
    {
      month: "Januar 19",
      inland: 1720702,
      ausland: 551704,
    },
    {
      month: "Februar 19",
      inland: 1890325,
      ausland: 646833,
    },
    {
      month: "März 19",
      inland: 2088455,
      ausland: 636272,
    },
  ];

  // returns correct data for Bayern BUT doesn't "update testData fast enough", therefore chart isnt displayed with the correct values
  getBundeslandData("Bayern").then((data) => {
    console.log(data);
    testData = data;
  });

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
