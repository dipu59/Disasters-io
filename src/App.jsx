import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/navbar";
import Navdashboard from "./shared/navdashboard";
import Dashboard from "./components/Dashboard";
import Incedents from "./components/Incedents";
import Getstarted from "./components/new incident/getstarted";

function App() {
  return (
    <BrowserRouter>
      <main className="max-w-[1440px] mx-auto">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/incidents" element={<Incedents />} />
          <Route path="/locations" element={<Getstarted />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
