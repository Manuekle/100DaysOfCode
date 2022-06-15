import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";

function Home() {
  return (
    <Routes>
        <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default Home;