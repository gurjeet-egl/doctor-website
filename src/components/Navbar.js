import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Dr Clinic</Link>

        <div>
          <Link className="nav-link d-inline text-white" to="/">Home</Link>
          <Link className="nav-link d-inline text-white" to="/about">About</Link>
          <Link className="nav-link d-inline text-white" to="/services">Services</Link>
          <Link className="nav-link d-inline text-white" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;