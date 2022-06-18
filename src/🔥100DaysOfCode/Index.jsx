import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
// *Componentes escenciales
import Home from "./Home";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Buy from "../components/Buy";
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
      <Footer />
      <Buy />
    </div>
  );
}

export default Index;
