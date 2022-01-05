import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <nav className="same">
      <ul className="nav-link">
        <NavLink activeclassname="selected" to="/">Home</NavLink>
      </ul>
    </nav>
  </div>
);

export default Nav;
