import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Fynally.io</h1>
      <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/resources">Resources</Link></li>
  <li><Link to="/internships">Internships</Link></li>
  <li><Link to="/employment">Employment</Link></li>
</ul>

    </nav>
  );
}

export default Navbar;
