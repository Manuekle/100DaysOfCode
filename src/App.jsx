import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
