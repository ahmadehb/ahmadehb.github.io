import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>

        <div className="about-section-item">
          <h3>Interests</h3>
          <p>
            I dive into data, working on machine learning, analysis, and research. From collecting data to building models 
            and creating visualizations, I explore AI, finance, and bioinformatics through the lens of data science.
          </p>
        </div>

        <div className="about-section-item">
          <h3>Education</h3>
          <p>
            BS in Statistics & Data Science at UCLA. <br />
            Minor in Bioinformatics.
          </p>
        </div>

        <div className="about-section-item">
          <h3>Skills</h3>
          <p>
            I code primarily in Python and R for data science work. Experienced in SQL, MongoDB, Apache Spark, Docker, Azure DevOps, 
            Javascript, Linux, and Cloud Services. I’ve also worked with HTML, CSS, React, Tableau, and PowerBI for dashboarding.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
