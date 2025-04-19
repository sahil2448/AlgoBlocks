// // src/pages/DashboardLayout.jsx
// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Dashboard from "./Dashboard";
// import MyStrategy from "./MyStrategy";


// // Placeholder components for each section
// const DashboardPage = () => < Dashboard/>
// const StrategyPage = () => <MyStrategy />;
// const BacktestingPage = () => <div>📈 Run Backtests on your Strategies.</div>;
// const PaperTradingPage = () => <div>💸 Simulate Paper Trading.</div>;
// const LearnPage = () => <div>📚 Learn about Algorithmic Trading.</div>;
// const AboutPage = () => <div>ℹ️ About AlgoBlocks.</div>;

// export default function DashboardLayout() {
//   const [section, setSection] = useState("dashboard");

//   const renderSection = () => {
//     switch (section) {
//       case "strategy":
//         return <StrategyPage />;
//       case "backtesting":
//         return <BacktestingPage />;
//       case "papertrading":
//         return <PaperTradingPage />;
//       case "learn":
//         return <LearnPage />;
//       case "about":
//         return <AboutPage />;
//       case "dashboard":
//       default:
//         return <DashboardPage />;
//     }
//   };

//   return (
//     <div className="flex h-[calc(100vh-4.5rem)] overflow-hidden">
//       <Sidebar active={section} onChange={setSection} />
//       <main className="flex-1 bg-gray-100 p-8 overflow-auto">
//         {renderSection()}
//       </main>
//     </div>
//   );
// }


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
      case "newStrategy":
        return <StrategyBuilder onNavigate={setSection} />;
        case "backtesting":
   return <Backtesting onNavigate={setSection} />;
      case "papertrading":
        return <PaperTrading />;
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
