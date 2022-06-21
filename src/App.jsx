import React from "react";
import "./App.css";
import Home from "./pages/Homes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./pages/Content";
import Barchart from "./pages/barchart";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/id/:id" element={<Content />} />
        <Route exact path="/bar" element={<Barchart />} />
      </Routes>
    </Router>
  );
}

export default App;
