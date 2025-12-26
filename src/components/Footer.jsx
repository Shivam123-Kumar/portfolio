import "./Footer.css";
import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Shivam Kumar</h3>

        <p>© {year} Shivam Kumar. All rights reserved.</p>

        <div className="footer-links">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:shivamkumar@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
