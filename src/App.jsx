import React from "react";
import "./App.css";
import Home from "./pages/Homes";
import Test from "./pages/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content_Question from "./pages/Content_Question";
import Test_Question from "./pages/Content_Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/question/:id" element={<Content_Question />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/test/:id" element={<Test_Question />} />
      </Routes>
    </Router>
  );
}

export default App;
