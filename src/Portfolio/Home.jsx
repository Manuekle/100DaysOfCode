import React from "react";
import About from "../components/Home/About";
import Team from "../components/Home/Child/Team";
import Skills from "../components/Home/Skills";
import Work from "../components/Home/Work";

function Home() {
  return (
    <div>
      <About/>
      <Skills/>
      <Work/>
      <Team/>
    </div>
  );
}

export default Home;
