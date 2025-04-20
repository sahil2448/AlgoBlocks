// src/pages/Dashboard.jsx
import React, { useState } from "react";
import StrategyBuilder from "./StrategyBuilder";
import priceData from "../data/priceData.json";

import Backtesting from "./Backtesting";
import PaperTrading from "./PaperTrading";

const buttons = [
  { key: "newStrategy", label: "New Strategy", base: "gray" },
  { key: "backtesting", label: "Backtesting", base: "gray" },
  { key: "papertrading", label: "Paper Trading", base: "gray" },
];

export default function Dashboard() {
  // Track which section is open
  const [activeSection, setActiveSection] = useState("newStrategy");

  return (
    <div className="flex-1 h-[calc(100vh-7rem)] bg-gray-200">
      <main className="p-2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          👋 Welcome to AlgoBlocks Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
          {buttons.map(({ key, label, base }) => {
            const isActive = activeSection === key;
            return (
              <buttons
                key={key}
                onClick={() => setActiveSection(key)}
                className={`
                 py-3 rounded-xl shadow-md flex items-center justify-center transition-all duration-200
                 text-black
                ${
                  isActive
                    ? `bg-${base}-100` /* active darker shade */
                    : `bg-${base}-300`
                }   /* default */
                hover:bg--${base}
              `}
              >
                {label}
              </buttons>
            );
          })}
        </div>

        {/* Conditionally render the section below the buttons */}
        <div className="space-y-6">
          {activeSection === "newStrategy" && <StrategyBuilder />}
          {activeSection === "backtesting" && <Backtesting />}
          {activeSection === "papertrading" && <PaperTrading />}
        </div>
      </main>
    </div>
  );
}
