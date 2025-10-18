import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-container">
        <div className="navbar-brand">
          <a href="#home" className="logo">
            <div className="logo-circle">A</div>
            <span className="logo-text">AKASH</span>
          </a>
        </div>

        {/* Desktop links */}
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <a href="/Resume.pdf" className="resume-btn">Resume</a>
        </div>

        {/* Mobile hamburger */}
        <div className="navbar-toggle" onClick={() => setOpen(!open)}>
          <span className={`bar ${open ? "open" : ""}`}></span>
          <span className={`bar ${open ? "open" : ""}`}></span>
          <span className={`bar ${open ? "open" : ""}`}></span>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" className="resume-btn">Resume</a>
      </div>
    </header>
  );
}

