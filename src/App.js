import './App.css';
import BarChart from './BarChart';
import data from "./data";
import keys from "./keys";
import colors from "./colors";
import corona from "./corona";
import BackgroundChart from './BackgroundChart';
import keysBackground from "./keysBackground";
import backgroundColors from "./backgroundColors";
import keysColorBackground from './backgroundColorKeys';
import TryChart from './try';
import BundeslandChart from "./BundeslandChart";

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        {/*<BarChart data={data} keys={keys} colors={colors} bgColors={backgroundColors} /> */}
        {/* <BackgroundChart data={corona} keys={keysBackground} colors={backgroundColors} bgKeys={keysColorBackground}/> */}
        {/* <TryChart data={corona} keys={keysBackground} colors={backgroundColors}/> */}
        <BundeslandChart />
      </header>
    </div>
  );
}

export default App;
