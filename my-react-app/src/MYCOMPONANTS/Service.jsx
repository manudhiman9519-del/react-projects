import "./Service.css";

function Service() {
  return (
    <div className="services" id="services">

      {/* Heading */}
      
      <section className="services-intro">
        <p className="services-small-title">MY SERVICES</p>

        <h1>
          What I <span>Do</span>
        </h1>

        <p className="services-description">
          I provide modern and user-friendly web development services
          to create clean, responsive and professional websites.
        </p>
      </section>


      {/* Services */}
      <section className="service-list">

        <div className="service-card">
          <div className="service-icon">🌐</div>

          <h2>Web Development</h2>

          <p>
            I create responsive and modern websites using HTML, CSS
            and JavaScript with clean and structured code.
          </p>
        </div>


        <div className="service-card">
          <div className="service-icon">⚛️</div>

          <h2>React Development</h2>

          <p>
            I build interactive and reusable user interfaces using
            React JS and modern component-based development.
          </p>
        </div>


        <div className="service-card">
          <div className="service-icon">🎨</div>

          <h2>UI Development</h2>

          <p>
            I design clean, attractive and user-friendly interfaces
            that provide a better user experience.
          </p>
        </div>


        <div className="service-card">
          <div className="service-icon">📱</div>

          <h2>Responsive Design</h2>

          <p>
            I create websites that work properly on desktops,
            tablets and mobile devices.
          </p>
        </div>


        <div className="service-card">
          <div className="service-icon">⚡</div>

          <h2>JavaScript Development</h2>

          <p>
            I develop interactive website features using JavaScript,
            DOM manipulation, events and APIs.
          </p>
        </div>


        <div className="service-card">
          <div className="service-icon">🛠️</div>

          <h2>Website Maintenance</h2>

          <p>
            I can update website content, fix UI issues and improve
            existing website functionality.
          </p>
        </div>

      </section>


      {/* Bottom Section */}
      <section className="service-bottom">

        <h2>
          Have a <span>Project</span> in Mind?
        </h2>

        <p>
          Let's work together and create something amazing.
        </p>

        <a href="/contact" className="service-contact-btn">
          Contact Me
        </a>

      </section>

    </div>
  );
}

export { Service };