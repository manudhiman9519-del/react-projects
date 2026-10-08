import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Manu Sharma</h2>

        <p>
          Frontend Developer passionate about creating clean,
          responsive and modern websites.
        </p>

        <div className="footer-links">
          <a href="https://manudhiman9519@gmail.com"target="_blank">Email</a>
          <a href="https://wa.me/916397420287"target="_blank">WhatsApp</a>
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
        </div>

        <hr />

        <p className="copyright">
          © 2026 Sharmanu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export { Footer };