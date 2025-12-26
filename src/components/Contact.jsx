import "./Contact.css";
import React from "react";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact</h2>

        <p className="contact-intro">
          I’m open to software development opportunities, internships, and
          collaborative projects. Feel free to reach out if you’d like to
          connect or discuss potential roles.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:shivamkumardlnn@gmail.com">
                shivamkumardlnn@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/shivam-kumar-3640172a7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/shivam-kumar-3640172a7/
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Shivam123-Kumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Shivam123-Kumar
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
