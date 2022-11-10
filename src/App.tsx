import React, { useEffect, useRef } from "react";
import PawButton from "./components/PawButton";
import Heart from "./pages/Heart";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Heart />} />
      </Routes>
    </Router>
  );
}

export default App;
