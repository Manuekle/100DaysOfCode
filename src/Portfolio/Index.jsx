import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
// *Componentes escenciales
import Home from "./Home";
import Nav from "../components/Nav";
// ?Componentes reactivos

function Index() {
  return (
    <div className="md:container md:mx-auto ">
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Index;
