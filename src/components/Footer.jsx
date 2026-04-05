import "./Footer.css";
import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">Shivam Kumar</h3>

        <p className="footer-copyright">© {year} Shivam Kumar. All rights reserved.</p>

        <div className="footer-links">
          <a
            href="https://github.com/Shivam123-Kumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-kumar-3640172a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:shivamkumardlnn@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
