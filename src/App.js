import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./Pages/Home/Home";
import House from "./Pages/House/House";
import About from "./Pages/About/About";
import Error from "./Components/Error/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house/:id" element={<House />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
