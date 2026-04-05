import "./Contact.css";
import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>

        <p className="contact-intro">
          I’m open to software development opportunities, internships, and
          collaborative projects. Feel free to reach out if you’d like to
          connect or discuss potential roles.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info card-base">
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
          <form className="contact-form card-base">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required className="form-control" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required className="form-control" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
