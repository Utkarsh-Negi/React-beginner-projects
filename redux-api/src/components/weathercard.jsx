import { useSelector } from 'react-redux';

const Card = () => {
  const placeData = useSelector((state) => state.placeData);
  const theme = useSelector((state) => state.theme);
  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-4 col-12 col-md-4 weather">
          <div className={theme ? 'card dark' : 'card white'}>
            {placeData.location ? (
              <div>
                <img src={placeData.current.condition.icon} alt="" />
                <div className="desc">{placeData.current.condition.text}</div>
                <div className="temp">{placeData.current.temp_c}°</div>
                <div className="place">{placeData.location.name}</div>

                <div className="container">
                  <div className="row details">
                    <div className="col">
                      <div className="title">Wind Now</div>
                      <div className="data">
                        {placeData.current.wind_kph}
                        <span className="unit">KM</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Humidity</div>
                      <div className="data">
                        {placeData.current.humidity}
                        <span className="unit">%</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Percipitation</div>
                      <div className="data">
                        {placeData.current.precip_in}
                        <span className="unit">kg/m2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h3 className="default">Place not found</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
