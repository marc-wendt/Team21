import "./App.css";
//import BarChart from "./BarChart";
import BundeslandChart from "./BundeslandChart";
import GermanyMap from "./GermanyMap"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BundeslandChart />

      </header>
      <GermanyMap />
    </div>
  );
}

export default App;
