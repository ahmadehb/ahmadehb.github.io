import React from 'react';
import './Resume.css';
import resumeFile from './assets/resume.pdf'; // Correct file name

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <div className="resume-viewer">
        <iframe
          src={resumeFile} // Reference the imported file
          title="Resume"
          className="resume-iframe"
        ></iframe>
      </div>
    </section>
  );
}

export default Resume;
