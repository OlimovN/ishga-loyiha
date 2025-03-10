import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/about";
import Projects from "./pages/project";
import Contact from "./pages/contact";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : ""}>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            <h1>Salom, Xush Kelibsiz!</h1>
                      <nav className="navbar">
              <ul>
                <li>
                  <Link to="/">O'zim Haqimda</Link>
                </li>
                <li>
                  <Link to="/projects">Qilgan Ishlarim</Link>
                </li>
                <li>
                  <Link to="/contact">Aloqa</Link>
                </li>
              </ul>
            </nav>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
