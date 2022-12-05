import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Navigation from "./components/navigation/Navigation";

import PersonalInfo from "./pages/personalInfo/PersonalInfo";
import Plan from "./pages/plan/Plan";
import AddOns from "./pages/addOns/AddOns";
import Summary from "./pages/summary/Summary";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/addons" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
