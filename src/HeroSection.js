import React from 'react';
import './HeroSection.css';
import imageMe from './assets/ImageMe.JPG'; // Adjust path if necessary

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img src={imageMe} alt="Hero" className="hero-image" />
      </div>
      <div className="hero-text-container">
        <h1>Hello, my name is Ahmad</h1>
        <p>I am a third year Statistics and Computational Biology student at UCLA. I am interested in solving problems through data. Welcome to my portfolio!</p>
      </div>
    </section>
  );
}

export default HeroSection;
