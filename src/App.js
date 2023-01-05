import "./App.css";
//import BarChart from "./BarChart";
import BundeslandChart from "./BundeslandChart";
import GermanyMap from "./GermanyMap"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BundeslandChart />
        <GermanyMap />
      </header>
    </div>
  );
}

export default App;
