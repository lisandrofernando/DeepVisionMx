import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services"
import About from "./components/About"
import Contact from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" element={About } />
        <Route path="/services" element={Services} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </>
  );
}

export default App;
