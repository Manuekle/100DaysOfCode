import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import Home from "./Home";
import Nav from "./🦒Day1/Nav";

function Index() {
  return (
    <div className="md:container md:mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Index;
