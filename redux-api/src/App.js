import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/form';
import Card from './components/weathercard';
import TOGGLE_THEME from './components/themetoggle';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className={theme ? 'App dark' : 'App'}>
      <TOGGLE_THEME />
      <Form />
      <Card />
    </div>
  );
}

export default App;
