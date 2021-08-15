import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
function App() {
  const [place, setPlace] = useState('');
  const [placeData, setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=4817e57f877545a2bde204405211208&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={updatePlaceData}>
              Submit
            </button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon} alt="" />
                  <div className="temp">{placeData.current.temp_c}°</div>
                  <div className="place">{placeData.location.name}</div>
                  .container>.row>.col-3*3
                </div>
              ) : (
                <h3>Place not found</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
