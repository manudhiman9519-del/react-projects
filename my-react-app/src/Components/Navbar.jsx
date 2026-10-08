import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    return (
        // <nav>

        //     <Link to="/" className="Nav-Links">Home</Link>

        //     <Link to="/about">About</Link>

        //     <Link to="/service">Service</Link>

        //     <Link to="/contact">Contact</Link>

        // </nav>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}

export default Navbar;