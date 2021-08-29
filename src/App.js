import './App.css';
import {ChartBar} from './components/ChartBar'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'

function App() {
  return (
    <div className="App">
      <ChartBar/>
      <LineChart/>
      <PieChart/>
    </div>
  );
}

export default App;
