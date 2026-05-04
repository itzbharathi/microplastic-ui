import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AI-Based Microplastic Detection System</h2>

      <ul>
        <li>
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/upload" className="nav-link">
            Upload
          </NavLink>
        </li>
        <li>
          <NavLink to="/results" className="nav-link">
            Results
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
