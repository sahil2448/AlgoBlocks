// import React from "react";
// import { Home, Activity, FileText, Book, Info, Settings } from "lucide-react";

// const DashboardSidebar = ({ onSectionChange }) => {
//   const menu = [
//     { label: "Dashboard", icon: <Home size={20} />, key: "dashboard" },
//     { label: "Strategy", icon: <Activity size={20} />, key: "strategy" },
//     { label: "Backtesting", icon: <FileText size={20} />, key: "backtesting" },
//     { label: "Papertrading", icon: <Settings size={20} />, key: "papertrading" },
//     { label: "Learn", icon: <Book size={20} />, key: "learn" },
//     { label: "About", icon: <Info size={20} />, key: "about" },
//   ];

//   return (
//     <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col py-6 px-4 shadow-md">
//       {/* <div className="text-2xl font-extrabold mb-10 text-blue-400">
//         AlgoBlocks
//       </div> */}
//       <nav className="space-y-2">
//         {menu.map((item) => (
//           <button
//             key={item.key}
//             onClick={() => onSectionChange(item.key)}
//             className="flex items-center space-x-3 w-full px-4 py-2 rounded-md text-left hover:bg-gray-700 transition-all"
//           >
//             {item.icon}
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default DashboardSidebar;

// src/components/Sidebar.jsx
import React from "react";
import {
  Home,
  Activity,
  FileText,
  Book,
  Info,
  DollarSign,
  PlusSquare,
} from "lucide-react";

const DashboardSidebar = ({ active, onChange }) => {
  const menu = [
    { label: "Dashboard", icon: <Home size={18} />, key: "dashboard" },
    {
      label: "New Strategy",
      icon: <PlusSquare size={18} />,
      key: "newStrategy",
    },
    { label: "Strategy", icon: <Activity size={18} />, key: "strategy" },

    { label: "Backtesting", icon: <FileText size={18} />, key: "backtesting" },
    {
      label: "Papertrading",
      icon: <DollarSign size={18} />,
      key: "papertrading",
    },
    { label: "Learn", icon: <Book size={18} />, key: "learn" },
    { label: "About", icon: <Info size={18} />, key: "about" },
  ];

  return (
    <aside className="h-screen w-60 bg-gray-800 text-gray-100 flex flex-col pt-6">
      <nav className="flex-1">
        {menu.map((item) => (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`flex items-center px-6 py-3 w-full text-left hover:bg-gray-700 transition ${
              active === item.key ? "bg-gray-700" : ""
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
