import React from "react";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section className="certifications" id="certification">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>

        <div className="cert-grid">
          <div className="cert-card card-base">
            <h3>Fundamentals of Deep Learning</h3>
            <p>NVIDIA</p>
            <a href="https://learn.nvidia.com/certificates?id=w03rdIgjRWKOHOrafUGLgw" target="_blank" rel="noopener noreferrer" className="btn btn-secondary cert-btn">View Certificate</a>
          </div>
          <div className="cert-card card-base">
            <h3>Building Transformer-Based Natural Language Processing Applications</h3>
            <p>NVIDIA</p>
            <a href="https://learn.nvidia.com/certificates?id=HbR_BXNGRy2zNxithKUiQQ" target="_blank" rel="noopener noreferrer" className="btn btn-secondary cert-btn">View Certificate</a>
          </div>
          <div className="cert-card card-base">
            <h3>System Design through Verilog</h3>
            <p>NPTEL (IIT Guwahati)</p>
            <a href="/nptel-verilog.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary cert-btn">View Certificate</a>
          </div>
          <div className="cert-card card-base">
            <h3>Introduction to Graph Algorithms</h3>
            <p>NPTEL (IISc Bangalore)</p>
            <a href="/nptel-graph-algorithms.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary cert-btn">View Certificate</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Certifications;
