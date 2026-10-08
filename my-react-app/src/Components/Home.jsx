// import "./Home.css";
// function Home() {
//     return (
//         <h1>Home Page</h1>
//     );
// }
// export default Home;

import "./Home.css";
import me from "../assets/me.jpg";
function Home() {
  return (
    <div className="home">

      <div className="home-text">

        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Manu Sharma</span>
        </h1>

        <h2>
          <span className="role">Frontend Developer</span>
        </h2>

        <p className="description">
          I create clean, responsive and user-friendly websites
          using HTML, CSS, JavaScript and React JS.
        </p>

        <div className="buttons">
          <button>Hire Me</button>
         <button><a href="\RESUME.pdf" target="_blank" className="resume_btn">My Resume</a></button> 
        </div>

      </div>

      <div className="home-image">
        <img src={me} alt="Manu Sharma" />
      </div>

    </div>

  );
}

export default Home;