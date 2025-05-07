import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/navbar";
import Dashboard from "./components/Dashboard";
import Incedents from "./components/Incedents";
import Getstarted from "./components/new incident/getstarted";
import IconDiscrive from "./components/new incident/icondiscribe";
import Describe from "./components/new incident/describe";
import Gps from "./components/new incident/gps";
import Locations from "./components/Location";
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
          <Route path="/incidents/step3" element={<Describe />} />
          <Route path="/incidents/step4" element={<Gps />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
