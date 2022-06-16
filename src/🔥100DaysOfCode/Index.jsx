import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
// *Componentes escenciales
import Home from "./Home";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// ?Componentes reactivos
import Calculator from "./🦒Day1/Calculator";

function Index() {
  return (
    <div className="md:container md:mx-auto ">
      <Nav />
      <div className="py-5 px-5 mb-4 rounded-md drop-shadow-md bg-slate-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
