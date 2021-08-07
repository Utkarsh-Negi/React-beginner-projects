import { NavLink } from 'react-router-dom';

function Nav({ login }) {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to={`${!login ? '/' : '/profile'}`}>Profile</NavLink>
      <NavLink to={`${!login ? '/' : '/dashboard'}`}>Dashboard</NavLink>
    </div>
  );
}
export default Nav;
