import React, { useEffect, useRef } from "react";
import PawButton from "./components/PawButton";
import Heart from "./pages/Heart";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Heart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
