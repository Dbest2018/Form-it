import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Navigation from "./components/navigation/Navigation";

import PersonalInfo from "./pages/personalInfo/PersonalInfo";
import Plan from "./pages/plan/Plan";
import AddOns from "./pages/addOns/AddOns";
import Summary from "./pages/summary/Summary";
import End from "./pages/end/End";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Sidebar />
        <div className="app__main">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/addons" element={<AddOns />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/end" element={<End />} />
            </Routes>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default App;
