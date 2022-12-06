import logo from './logo.svg';
import BarChart from './BarChart';
import './App.css';

const data = [
  {month: "Jan 19", sales: 500, sales2: 300, sales3: 400},
  {month: "Feb 19", sales: 700, sales2: 200, sales3: 200},
  {month: "Mar 19", sales: 600, sales2: 300, sales3: 100},
  {month: "Apr 19", sales: 400, sales2: 200, sales3: 300},
  {month: "May 19", sales: 500, sales2: 200, sales3: 400},
  {month: "Jun 19", sales: 800, sales2: 200, sales3: 100},
  {month: "Jul 19", sales: 300, sales2: 300, sales3: 400},
  {month: "Aug 19", sales: 400, sales2: 100, sales3: 300},
  {month: "Sep 19", sales: 600, sales2: 200, sales3: 200},
  {month: "Oct 19", sales: 400, sales2: 400, sales3: 200},
  {month: "Nov 19", sales: 700, sales2: 100, sales3: 100},
  {month: "Dec 19", sales: 400, sales2: 400, sales3: 300},
  
  {month: "Jan 20", sales: 500, sales2: 300, sales3: 400},
  {month: "Feb 20", sales: 700, sales2: 200, sales3: 200},
  {month: "Mar 20", sales: 600, sales2: 300, sales3: 100},
  {month: "Apr 20", sales: 400, sales2: 200, sales3: 300},
  {month: "May 20", sales: 500, sales2: 200, sales3: 400},
  {month: "Jun 20", sales: 800, sales2: 200, sales3: 100},
  {month: "Jul 20", sales: 300, sales2: 300, sales3: 400},
  {month: "Aug 20", sales: 400, sales2: 100, sales3: 300},
  {month: "Sep 20", sales: 600, sales2: 200, sales3: 200},
  {month: "Oct 20", sales: 400, sales2: 400, sales3: 200},
  {month: "Nov 20", sales: 700, sales2: 100, sales3: 100},
  {month: "Dec 20", sales: 400, sales2: 400, sales3: 300},

  {month: "Jan 21", sales: 500, sales2: 300, sales3: 400},
  {month: "Feb 21", sales: 700, sales2: 210, sales3: 210},
  {month: "Mar 21", sales: 600, sales2: 300, sales3: 100},
  {month: "Apr 21", sales: 400, sales2: 210, sales3: 300},
  {month: "May 21", sales: 500, sales2: 210, sales3: 400},
  {month: "Jun 21", sales: 800, sales2: 210, sales3: 100},
  {month: "Jul 21", sales: 300, sales2: 300, sales3: 400},
  {month: "Aug 21", sales: 400, sales2: 100, sales3: 300},
  {month: "Sep 21", sales: 600, sales2: 210, sales3: 210},
  {month: "Oct 21", sales: 400, sales2: 400, sales3: 210},
  {month: "Nov 21", sales: 700, sales2: 100, sales3: 100},
  {month: "Dec 21", sales: 400, sales2: 400, sales3: 300},

  {month: "Jan 22", sales: 500, sales2: 300, sales3: 400},
  {month: "Feb 22", sales: 700, sales2: 220, sales3: 220},
  {month: "Mar 22", sales: 600, sales2: 300, sales3: 100},
  {month: "Apr 22", sales: 400, sales2: 220, sales3: 300},
  {month: "May 22", sales: 500, sales2: 220, sales3: 400},
  {month: "Jun 22", sales: 800, sales2: 220, sales3: 100},
  {month: "Jul 22", sales: 300, sales2: 300, sales3: 400},
  {month: "Aug 22", sales: 400, sales2: 100, sales3: 300},
  {month: "Sep 22", sales: 600, sales2: 220, sales3: 220},
  {month: "Oct 22", sales: 400, sales2: 400, sales3: 220},
  {month: "Nov 22", sales: 700, sales2: 100, sales3: 100},
  {month: "Dec 22", sales: 400, sales2: 400, sales3: 300},
]

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
