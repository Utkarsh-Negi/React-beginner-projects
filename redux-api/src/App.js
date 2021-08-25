import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/form';
import Card from './components/weathercard';

function App() {
  return (
    <div className="App">
      <Form />
      <Card />
    </div>
  );
}

export default App;
