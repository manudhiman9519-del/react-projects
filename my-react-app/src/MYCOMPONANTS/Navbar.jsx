import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar1">
      <h2>My Portfolio</h2>

      <div className="nav-body">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export { Navbar };