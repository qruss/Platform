import React from "react";
import "./App.css";
import Home from "./pages/Homes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./pages/Content";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/question/:id" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;
