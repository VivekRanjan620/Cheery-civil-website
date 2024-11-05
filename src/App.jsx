import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Land from "./Components/Land";
import Footer from "./Components/Footer";
import About from "./Components/About";

export default function App() {
  return (
    <Router basename="/Cheery-civil-website">
      <Routes>
        <Route path="/" element={<Land />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}
