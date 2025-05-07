import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './pages/home.js';

function App() {
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const [graphType, setGraphType] = useState('');
  const [graphUrl, setGraphUrl] = useState('');

  useEffect(() => {
    const container = document.querySelector('.container');
    if (container) {
      const handleMove = (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        container.style.boxShadow = `
          ${x * 30}px ${y * 30}px 50px rgba(0, 240, 252, 0.3),
          ${-x * 30}px ${-y * 30}px 50px rgba(255, 42, 109, 0.3)
        `;
      };
      window.addEventListener('mousemove', handleMove);
      return () => window.removeEventListener('mousemove', handleMove);
    }
  }, []);

  const handleGenerateGraph = () => {
    if (!graphType) {
      alert('Please select a graph type.');
      return;
    }

    if ((graphType === 'bar' || graphType === 'scatter') && (!xAxis || !yAxis)) {
      alert('Please select both X and Y axes for bar or scatter plots.');
      return;
    }

    if (graphType === 'pie' && !xAxis) {
      alert('Please select an X-axis for the pie chart.');
      return;
    }

    let imagePath = '';
    switch (graphType) {
      case 'pie':
        imagePath = '/assets/pie.png';
        break;
      case 'bar':
        imagePath = '/assets/bar.png';
        break;
      case 'scatter':
        imagePath = '/assets/scatter.png';
        break;
      default:
        alert('Unsupported graph type.');
        return;
    }

    setGraphUrl(imagePath);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analytics" element={
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.header
              className="header"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1>📊 Superstore Market Analysis</h1>
              <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </div>
            </motion.header>

            <motion.div
              className="selectors"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <select value={xAxis} onChange={(e) => setXAxis(e.target.value)}>
                <option value="">Select X-Axis</option>
                <option value="Sales">Sales</option>
                <option value="Profit">Profit</option>
                <option value="Quantity">Quantity</option>
                <option value="Discount">Discount</option>
              </select>

              <select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
                <option value="">Select Y-Axis</option>
                <option value="Sales">Sales</option>
                <option value="Profit">Profit</option>
                <option value="Quantity">Quantity</option>
                <option value="Discount">Discount</option>
              </select>

              <select value={graphType} onChange={(e) => setGraphType(e.target.value)}>
                <option value="">Select Graph Type</option>
                <option value="bar">Bar</option>
                <option value="scatter">Scatter Plot</option>
                <option value="pie">Pie Chart</option>
              </select>
            </motion.div>

            <motion.button
              className="generate-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGenerateGraph}
            >
              Generate Graph
            </motion.button>

            {graphUrl && (
              <motion.div
                className="graph-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="graph-title">Generated Graph</h2>
                <motion.img
                  src={graphUrl}
                  alt="Generated Graph"
                  className="graph-image"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            )}
          </motion.div>
        } />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Email: support@superstoreanalytics.com</p>
      <p>Phone: +91 76962 11019</p>
    </div>
  );
};

export default App;
