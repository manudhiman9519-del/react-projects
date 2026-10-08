//import React from "react";
import m1 from "../assets/m1.jpeg";
import "./Home.css";

function Home() {
  return (
    <div className="home" id="home">

      <div className="home-content">

  <p className="welcome">WELCOME TO MY PORTFOLIO</p>

  <h1>
    Hi, I'm <span>Manu </span>
    <br />
    A Frontend <span>Developer</span>
    <br />
    Building Modern Websites
  </h1>

  <p className="description">
    I create clean, responsive and user-friendly websites
    using HTML, CSS, JavaScript and React JS.
  </p>

  <div className="home-buttons">
    <button className="primary-btn">Hire Me</button>
    <button className="secondary-btn">
      <a href="#contact">Contact Me</a>
    </button>
  </div>

</div>

      <div className="home-card">
        <div className="card-icon">
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqnFdaaZNy7KpOHsdawqzspRAEclTmJKAnGkJqq2hYw&s=10" className="card-img"/> */}

<img src={m1} alt="Image 1" className="card-img" />

        </div>
        <h2>React Developer</h2>
        <p>
          Creating clean and modern web experiences
          using React JS.
        </p>
      </div>

    </div>
  );
}

export { Home };