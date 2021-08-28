const updatePlace = (place) => {
  return {
    type: 'UPDATE_PLACE',
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=4817e57f877545a2bde204405211208&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'UPDATE_PLACE_DATA',
          payload: data,
        });
      });
  };
};

const toggleTheme = () => {
  return {
    type: 'TOGGLE_THEME',
  };
};
export { updatePlace, updatePlaceData, toggleTheme };
