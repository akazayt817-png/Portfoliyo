import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-text">
            <h1>Hi, I'm <span>AKASH</span></h1>
            <p>
              I'm a passionate <strong>Frontend Developer</strong> who loves building beautiful and interactive websites. I enjoy turning complex problems into simple, elegant designs using React, JavaScript, and modern web technologies.
            </p>
            <div className="home-buttons">
              <a href="/Resume.pdf" className="btn">Download Resume</a>
              <a href="#projects" className="btn secondary">View Projects</a>
            </div>
          </div>
          <div className="home-image">
            <img src="/profile.jpg" alt="Your Profile" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I am a self-motivated developer with a passion for creating interactive web applications. I have experience with React, JavaScript, HTML, CSS, and modern frontend tools. I enjoy learning new technologies and continuously improving my skills.
        </p>
        <p>
          Apart from coding, I enjoy problem-solving, designing clean UI/UX, and collaborating on exciting projects that make a difference.
        </p>
      </section>

      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <a href="https://akashcounter-app.netlify.app/" target="_blank" rel="noreferrer" className="project-card">
            <h3>Project 1</h3>
            <p>Counter Project ony vite + React</p>
          </a>
          <a href="https://akash-ecommercesite.netlify.app/" target="_blank" rel="noreferrer" className="project-card">
            <h3>Project 2</h3>
            <p>SHOPORIA  “My website isn’t working properly.”</p>
          </a>
          <a href="https://akash-calculatorsite.netlify.app/" target="_blank" rel="noreferrer" className="project-card">
            <h3>Project 3</h3>
            <p>Calculator app</p>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>If you want to get in touch, feel free to send me a message.</p>
        <form className="contact-form" action="akashyt02418@gmail.com" method="POST" encType="text/plain">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Your Name. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </footer>
    </>
  );
}
