import './App.css';
import BarChart from './BarChart';
import data from "./data";
import keys from "./keys";
import colors from "./colors";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarChart data={data} keys={keys} colors={colors} />
      </header>
    </div>
  );
}

export default App;
