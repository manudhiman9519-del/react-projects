import "./Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">

      <div className="contact-content">
        <p className="welcome">Contact Me</p>
        <h1>
  Let's Connect <span>Together</span>
</h1>

<p className="contact-text">
  Have a project or opportunity in mind? I'm always open to new
  ideas, collaborations and career opportunities. Feel free to
  get in touch and let's create something amazing together!
</p>

        <div className="contact-info">

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>manudhiman9519@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>📱 Phone</h3>
            <p>+91 63974 20287</p>
          </div>

          <div className="info-box">
            <h3>📍 Location</h3>
            <p>Ngina Bijnor U.P</p>
          </div>

        </div>

      </div>

      <div className="contact-form">

        <h2>Send Me a Message</h2>

        <form autoComplete="off">

          <input
            type="text"
            placeholder="Enter Name"
          />

          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export { Contact };