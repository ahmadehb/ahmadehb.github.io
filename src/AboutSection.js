// src/AboutSection.js
import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <h2>About Me</h2>

      <div className="about-content">
        {/* Interests Section */}
        <div className="about-item">
          <h3>Interests</h3>
          <p>
            I dive into data, working on machine learning, analysis, and research. From collecting data to building models and creating visualizations, I explore AI, finance, and bioinformatics through the lens of data science.
          </p>
        </div>

        {/* Education Section */}
        <div className="about-item">
          <h3>Education</h3>
          <p>
            <b>BS in Statistics & Data Science at UCLA</b> <br />
            Minor in Bioinformatics.
          </p>
        </div>

        {/* Skills Section */}
        <div className="about-item">
          <h3>Skills</h3>
          <p>
            I code primarily in Python and R for my data science work. Experienced with SQL, MongoDB, Apache Spark, Docker, Azure DevOps, and Javascript. Skilled in building web apps using HTML, CSS, and React. Also proficient in Tableau and Power BI for dashboards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
