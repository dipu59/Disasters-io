import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <main className="max-w-[1440px] mx-auto">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
