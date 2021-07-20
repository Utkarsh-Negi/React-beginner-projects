import Even from './board-components/even';
import Odd from './board-components/odd';
import './style.css';
function App() {
  return (
    <div className="outer">
      <h1>Chess Board</h1>
      <div className="main">
        <Even />
        <Odd />
        <Even />
        <Odd />
        <Even />
        <Odd />
        <Even />
        <Odd />
      </div>
    </div>
  );
}

export default App;
