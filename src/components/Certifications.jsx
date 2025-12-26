import React from "react";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section className="certifications" id="certification">
      <div className="certifications-container">
        <h2>Certifications</h2>

        <div className="cert-grid">
          {/* NVIDIA - Fundamentals of Deep Learning */}
          <div className="cert-card">
            <h3>Fundamentals of Deep Learning</h3>
            <p>NVIDIA</p>
            <a
              href="https://learn.nvidia.com/certificates?id=w03rdIgjRWKOHOrafUGLgw"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          </div>

          {/* NVIDIA - Transformer NLP */}
          <div className="cert-card">
            <h3>
              Building Transformer-Based Natural Language Processing
              Applications
            </h3>
            <p>NVIDIA</p>
            <a
              href="https://learn.nvidia.com/certificates?id=HbR_BXNGRy2zNxithKUiQQ"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          </div>

          {/* NPTEL - Verilog */}
          <div className="cert-card">
            <h3>System Design through Verilog</h3>
            <p>NPTEL (IIT Guwahati)</p>
            <a
              href="/nptel-verilog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          </div>

          {/* NPTEL - Graph Algorithms */}
          <div className="cert-card">
            <h3>Introduction to Graph Algorithms</h3>
            <p>NPTEL (IISc Bangalore)</p>
            <a
              href="/nptel-graph-algorithms.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
