
// src/pages/DashboardLayout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import MyStrategy from "./MyStrategy";
import Backtesting from "./Backtesting";
import PaperTrading from "./PaperTrading";
import StrategyBuilder from "./StrategyBuilder";
import Learn from "./Learn";
import About from "./About";

export default function DashboardLayout() {
  const [section, setSection] = useState("dashboard");

const renderSection = () => {
    switch (section) {
        case "strategy":
             return <MyStrategy onNavigate={setSection} />;
      // case "newStrategy":
      //   return <StrategyBuilder onNavigate={setSection} />;
  //       case "backtesting":
  //  return <Backtesting onNavigate={setSection} />;
      // case "papertrading":
      //   return <PaperTrading />;
      case "learn":
        return <Learn />;
      case "about":
        return <About />;
      case "dashboard":
      default:
        return <Dashboard onNavigate={setSection} />;
    }
  };
  


  return (
    <div className="flex h-[calc(100vh-4.5rem)] overflow-hidden">
      {/* Sidebar with menu */}
      <Sidebar active={section} onChange={setSection} />

      {/* Dynamic content area */}
      <main className="flex-1 bg-gray-100 p-4 overflow-auto">
        {renderSection()}
      </main>
    </div> 
  );
}
