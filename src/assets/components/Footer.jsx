import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Fynally.io</h2>
          <p>Your career companion from Student → Employee</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/resources">Resources</a>
          <a href="/internships">Internships</a>
          <a href="/employment">Employment</a>
        </div>

        <div className="footer-social">
          <a href="#">🌐</a>
          <a href="#">📘</a>
          <a href="#">📷</a>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} Fynally.io | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
