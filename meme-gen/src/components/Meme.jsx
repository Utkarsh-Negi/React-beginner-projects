const Meme = ({ meme }) => {
  console.log(meme);
  return (
    <div className="meme">
      <img src={meme.url} alt="ERROR" />
      <div>
        {[...Array(meme.box_count)].map((_, index) => (
          <input type="text" placeholder={`Meme caption ${index + 1}`} />
        ))}
      </div>
      <div>
        <button>Generate Meme</button>
        <button>Reset Meme</button>
      </div>
    </div>
  );
};

export default Meme;
