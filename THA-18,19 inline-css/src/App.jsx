import Chess from './component/Chess';
import './App.css';
import Button from './component/button';

function App() {
  return (
    <div>
      <Chess />
      <div className="State">
        <p>4 counter component instances that each manage their own state.</p>
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default App;
