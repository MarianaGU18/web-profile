import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/paginas/Home";
import About from "./components/paginas/Aboutme"; // "Aboutme.jsx", no "About.jsx"
import Curriculum from "./components/paginas/Curriculum";
import Schedule from "./components/paginas/Shedule"; // "Shedule.jsx", no "Schedule.jsx"

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </main>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Router>
  );
}

export default App;
