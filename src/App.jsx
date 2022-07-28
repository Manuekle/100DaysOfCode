import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Index from "./Portfolio/Index";

function App() {
  return (
    <main>
      <Router>
        <Index />
      </Router>
    </main>
  );
}

export default App;
