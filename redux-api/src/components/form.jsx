const Form = () => {
  const place = '';
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input
            type="text"
            value={place}
            onChange={(e) => {
              // setPlace(e.target.value);
            }}
          />
          <button
            className="btn btn-primary"
            // onClick={}>
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
