function Chart({ food, cal, data, setData, index }) {
  function dataDeleted() {
    const newData = data.filter((item, i) => {
      if (index !== i) {
        return item;
      }
    });
    setData(newData);
  }
  return (
    <div className="small-box">
      <h1>{food}</h1>
      <button onClick={dataDeleted}>DEL</button>
      <p>You have consumed {cal} calories today.🤯</p>
    </div>
  );
}

export default Chart;
