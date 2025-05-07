import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Superstore Analytics</h1>
        <p>Your one-stop dashboard for sales insights.</p>
        <div className="homepage-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>
      </header>

      <section className="homepage-about">
        <h2>About Us</h2>
        <p>
          At SemantiX, we are passionate about transforming raw data into meaningful insights that drive smarter decisions in the retail world.

          Our journey began with a simple idea — to empower businesses with cutting-edge, AI-driven analytics that are accessible, intuitive, and visually impactful. We combine the power of Google Colab's machine learning capabilities with a sleek, dynamic React frontend to deliver an end-to-end solution for superstore market analysis.

          Our tool enables users to seamlessly explore sales trends, customer behavior, and category performance through customizable graphs and intelligent insights — all with just a few clicks.

          We are a team of data scientists, developers, and visionaries committed to democratizing data. Whether you're a store owner, business analyst, or student, our platform helps you uncover patterns, predict outcomes, and make data-driven decisions that truly matter.

          Data is the new oil — we refine it for you.
        </p>
      </section>

      <section className="homepage-contact">
        <h2>Contact Us</h2>
        <p>Email: support@superstoreanalytics.com</p>
        <p>Phone: +91 76962 11019</p>
      </section>

      <section className="homepage-graphs">
        <h2>Start Your Analysis</h2>
        <p>Click below to access our powerful analytics dashboard</p>
        <Link to="/analytics" className="graph-button">Go to Analytics Dashboard</Link>
      </section>
    </div>
  );
}
