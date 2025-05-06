import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/navbar";
import Dashboard from "./components/Dashboard";
import Incedents from "./components/Incedents";
import Getstarted from "./components/new incident/getstarted";
import IconDiscrive from "./components/new incident/icondiscribe";

function App() {
  return (
    <BrowserRouter>
      <main className="max-w-[1440px] mx-auto">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/incidents" element={<Incedents />} />
          <Route path="/incidents/step1" element={<Getstarted />} />
          <Route path="/incidents/step2" element={<IconDiscrive />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
