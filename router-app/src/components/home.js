function Home({ login, setLogin }) {
  return (
    <div className="home">
      <div className="content">
        <h1>Home</h1>
        <p>If not logged in can't access, Profile & Dashboard </p>
        {login ? (
          <button onClick={() => setLogin(false)}>Logout</button>
        ) : (
          <button onClick={() => setLogin(true)}>Login</button>
        )}
      </div>
    </div>
  );
}
export default Home;
