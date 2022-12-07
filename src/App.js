import './App.css';
import BarChart from './BarChart';
import data from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarChart data={data} />
      </header>
    </div>
  );
}

export default App;
