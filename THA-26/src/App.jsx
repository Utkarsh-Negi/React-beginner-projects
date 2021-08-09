import './App.css';
import { email, username } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.counter);
  const userName = useSelector((state) => state.userState.username);
  const userEmail = useSelector((state) => state.userState.email);
  return (
    <div className="App">
      <h1>Input</h1>
      <input
        type="email"
        value={userEmail}
        placeholder="e-mail"
        required
        onChange={(e) => {
          dispatch(email(e.target.value));
        }}
      />
      <br />
      <input
        type="text"
        value={userName}
        placeholder="name"
        required
        onChange={(e) => {
          dispatch(username(e.target.value));
        }}
      />
      <h1>Data</h1>
      <h3>Email : {userEmail}</h3>
      <h3>Name : {userName}</h3>

      {/* <h1>Counter using redux</h1>
      <button
        onClick={() => {
          dispatch(decNumber());
        }}
      >
        Del
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(incNumber());
        }}
      >
        Add
      </button> */}
    </div>
  );
}

export default App;
