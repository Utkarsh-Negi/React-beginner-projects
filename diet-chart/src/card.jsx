function Card({ Food, Cal }) {
  return (
    <div className="small-box">
      <h1>{Food}</h1>
      <p>You have consumed {Cal} calories today.🤯</p>
    </div>
  );
}

export default Card;
