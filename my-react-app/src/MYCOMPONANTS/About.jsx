import "./About.css";

function About() {
  return (
    <div className="about" id="about">

      {/* About Intro */}
      <section className="about-intro">
        <p className="about-small-title">ABOUT ME</p>

        <h1>
          I’m <span>Manu Sharma</span>
        </h1>
<br />
        <p className="about-description">
          I'm a passionate Frontend Developer who enjoys creating clean,
          responsive and user-friendly websites. I love turning ideas into
          modern digital experiences using HTML, CSS, JavaScript and React JS.
        </p>
      </section>


      {/* My Journey */}
      <div className="journey">
        <h2>My <span>Journey</span></h2>

        <p>
          My journey in technology started with an interest in web development.
          Since then, I have been continuously learning and improving my
          programming and frontend development skills.
        </p>
      </div>


      {/* Education */}
      <section className="education">
        <h2>My <span>Education</span></h2>

        <div className="education-container">

          <div className="education-box">
            <h3>B.Tech</h3>
            <p>RV Institute of Technology</p>
            <span>2026</span>
          </div>

          <div className="education-box">
            <h3>Polytechnic</h3>
            <p>Government Polytechnic Bijnor</p>
          </div>

          <div className="education-box">
            <h3>12th</h3>
            <p>Completed</p>
          </div>

          <div className="education-box">
            <h3>10th</h3>
            <p>Completed</p>
          </div>

        </div>
      </section>


      {/* Skills */}
      <section className="skills">
        <h2>My <span>Skills</span></h2>

        <div className="skill-container">

          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">React JS</div>
          <div className="skill-box">C</div>
          <div className="skill-box">Java</div>
          <div className="skill-box">Python</div>
          <div className="skill-box">Database</div>

        </div>
      </section>


      {/* Projects */}
      <section className="projects">
        <h2>My <span>Projects</span></h2>

        <div className="project-container">

          <div className="project-box">
            <h3>Portfolio Website</h3>
            <p>
              A personal portfolio website built using HTML, CSS,
              JavaScript and React JS.
            </p>
          </div>

          <div className="project-box">
            <h3>Calculator</h3>
            <p>
              A simple and interactive calculator built using JavaScript.
            </p>
          </div>

          <div className="project-box">
            <h3>E-commerce Website</h3>
            <p>
              A responsive e-commerce website with a modern user interface.
            </p>
          </div>

        </div>
      </section>


      {/* Goals */}
      <section className="goals">
        <h2>My <span>Goal</span></h2>

        <p>
          My goal is to grow as a professional Frontend Developer,
          learn new technologies and create meaningful digital experiences
          that are simple, useful and enjoyable to use.
        </p>

        {/* <button className="resume-btn">
          Download Resume
        </button> */}
        <a href="/RESUME.pdf" className="resume-btn" target="_blank"> Download Resume</a>
      </section>

    </div>
  );
}

export { About };