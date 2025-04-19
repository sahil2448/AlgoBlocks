// // frontend/src/pages/Dashboard.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Dashboard() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">AlgoBlocks Dashboard</h1>
//       <p>Overview of your strategies, recent backtests, and live performance analytics.</p>
//       <div className="mt-4">
//         <Link to="/builder" className="mr-4 text-blue-600">Create New Strategy</Link>
//         {/* <Link to="/backtesting" className="mr-4 text-blue-600">Backtesting</Link> */}
//         {/* <Link to="/paper-trading" className="text-blue-600">Paper Trading</Link> */}
//       </div>
//     </div>
//   );
// }

// frontend/src/pages/Dashboard.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <header className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">AlgoBlocks Dashboard</h1>
//         <div>
//           <Link
//             to="/builder"
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mr-4"
//           >
//             New Strategy
//           </Link>
//           <Link
//             to="/backtesting"
//             className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-4"
//           >
//             Backtesting
//           </Link>
//           <Link
//             to="/paper-trading"
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             Paper Trading
//           </Link>
//         </div>
//       </header>

//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Example card for a strategy */}
//         <div className="bg-white rounded shadow p-6">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-2">Strategy A</h2>
//           <p className="text-gray-600 mb-4">Last Backtest: <strong>+15.2%</strong></p>
//           <Link to="/backtesting" className="text-blue-600 hover:underline">
//             View Details &rarr;
//           </Link>
//         </div>

//         {/* Additional metric cards */}
//         <div className="bg-white rounded shadow p-6">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-2">Performance Metrics</h2>
//           <ul className="list-disc pl-5 text-gray-600">
//             <li>Win Rate: 65%</li>
//             <li>Sharpe Ratio: 1.4</li>
//             <li>Max Drawdown: 12%</li>
//           </ul>
//         </div>

//         <div className="bg-white rounded shadow p-6">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-2">Live Simulation</h2>
//           <p className="text-gray-600 mb-4">Active Paper Trading simulation running.</p>
//           <Link to="/paper-trading" className="text-blue-600 hover:underline">
//             Monitor Trades &rarr;
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// // frontend/src/pages/Dashboard.jsx
// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../auth/AuthContext';

// export default function Dashboard() {
//   const { user, logout } = useContext(AuthContext);
//   const [strategies, setStrategies] = useState([]);

//   // Example fetch; replace URL with your backend endpoint to get strategies
//   useEffect(() => {
//     const fetchStrategies = async () => {
//       const res = await fetch('http://localhost:8000/strategies');
//       const data = await res.json();
//       setStrategies(data);
//     };
//     fetchStrategies();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <header className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">AlgoBlocks Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           <span className="text-gray-700">Welcome, {user.username}</span>
//           <button onClick={logout} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
//             Logout
//           </button>
//         </div>
//       </header>
//       <nav className="mb-8">
//         <Link to="/builder" className="mr-4 text-blue-600 hover:underline">
//           New Strategy
//         </Link>
//         <Link to="/backtesting" className="mr-4 text-green-600 hover:underline">
//           Backtesting
//         </Link>
//         <Link to="/paper-trading" className="text-purple-600 hover:underline">
//           Paper Trading
//         </Link>
//       </nav>
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Saved Strategies</h2>
//         {strategies.length === 0 ? (
//           <p>No strategies found. Create a new strategy from the builder.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {strategies.map((strategy) => (
//               <div key={strategy.id} className="bg-white rounded shadow p-6">
//                 <h3 className="text-xl font-semibold mb-2">{strategy.name}</h3>
//                 <p className="text-gray-600 mb-2">Last Backtest: {strategy.lastBacktest || 'N/A'}</p>
//                 <Link to="/backtesting" className="text-blue-600 hover:underline">
//                   Test in Backtest &rarr;
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../auth/AuthContext';

// export default function Dashboard() {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <header className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">AlgoBlocks Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           <span className="text-gray-700">Welcome, {user.username}</span>
//           <button
//             onClick={logout}
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>
//       </header>
//       <nav className="mb-8">
//         <Link to="/builder" className="mr-4 text-blue-600 hover:underline">
//           New Strategy
//         </Link>
//         <Link to="/backtesting" className="mr-4 text-green-600 hover:underline">
//           Backtesting
//         </Link>
//         <Link to="/paper-trading" className="text-purple-600 hover:underline">
//           Paper Trading
//         </Link>
//       </nav>
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Saved Strategies</h2>
//         <p>No strategies saved yet. Create one from the Strategy Builder.</p>
//       </section>
//     </div>
//   );
// }

// // src/pages/Dashboard.jsx
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../auth/AuthContext';

// export default function Dashboard() {
//   const { user, logout } = useContext(AuthContext);

//   // Hard-coded strategies for demo (could be fetched from an API)
//   const strategies = [
//     { id: 1, name: 'My RSI Strategy', lastBacktest: '+12%' },
//     { id: 2, name: 'Breakout Bot', lastBacktest: '-3%' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Top bar */}
//       <header className="bg-white p-4 shadow flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">AlgoBlocks Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           <span className="text-gray-600">Welcome, {user?.username || 'demo'}</span>
//           <button
//             onClick={logout}
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       <main className="p-6">
//         {/* Quick navigation buttons */}
//         <div className="flex space-x-4 mb-6">
//           <Link
//             to="/builder"
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             New Strategy
//           </Link>
//           <Link
//             to="/backtesting"
//             className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//           >
//             Backtesting
//           </Link>
//           <Link
//             to="/paper-trading"
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             Paper Trading
//           </Link>
//         </div>

//         {/* List of saved strategies */}
//         <h2 className="text-xl font-semibold mb-4">Your Strategies</h2>
//         {strategies.length === 0 ? (
//           <p>No strategies saved yet. Click "New Strategy" to create one!</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {strategies.map((strategy) => (
//               <div key={strategy.id} className="bg-white rounded shadow p-4">
//                 <h3 className="text-lg font-bold">{strategy.name}</h3>
//                 <p className="text-sm text-gray-600 mb-2">
//                   Last Backtest: {strategy.lastBacktest || 'N/A'}
//                 </p>
//                 <div className="flex space-x-2">
//                   <Link to="/backtesting" className="text-blue-600 hover:underline text-sm">
//                     Backtest
//                   </Link>
//                   <Link to="/paper-trading" className="text-blue-600 hover:underline text-sm">
//                     Simulate
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// import React, { useContext } from 'react';
// // import { Link } from 'react-router-dom';
// import { AuthContext } from '../auth/AuthContext';

// export default function Dashboard() {
//   const { user, logout } = useContext(AuthContext);

//   // Example strategies; replace with fetch from backend/localStorage
//   const strategies = [
//     { id: 1, name: 'My RSI Strategy', lastBacktest: '+12%' },
//     { id: 2, name: 'Breakout Bot', lastBacktest: '-3%' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Top Bar */}
//       <header className="bg-white p-4 shadow flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">AlgoBlocks Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           <span className="text-gray-700">Welcome, {user?.username || 'demo'}</span>
//           <button
//             onClick={logout}
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       <main className="p-6">
//         {/* Navigation Buttons */}
//         <div className="flex space-x-4 mb-6">
//           <button
//             to="/builder"
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             New Strategy
//           </button>
//           <button
//             to="/backtesting"
//             className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//           >
//             Backtesting
//           </button>
//           <button
//             to="/paper-trading"
//             className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             Paper Trading
//           </button>
//         </div>

//         {/* Saved Strategies Grid */}
//         <h2 className="text-xl font-semibold mb-4">Your Strategies</h2>
//         {strategies.length === 0 ? (
//           <p>No strategies saved yet. Create one to get started!</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {strategies.map((strategy) => (
//               <div key={strategy.id} className="bg-white rounded shadow p-4">
//                 <h3 className="text-lg font-bold mb-2">{strategy.name}</h3>
//                 <p className="text-sm text-gray-600 mb-4">
//                   Last Backtest: {strategy.lastBacktest || 'N/A'}
//                 </p>
//                 <div className="flex space-x-2">
//                   <button to="/backtesting" className="text-blue-600 hover:underline text-sm">
//                     Backtest
//                   </button>
//                   <button to="/paper-trading" className="text-blue-600 hover:underline text-sm">
//                     Simulate
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// src/pages/Dashboard.jsx
// import React, { useContext } from "react";

// export default function Dashboard({ onNavigate }) {

//   return (
//     <div className=" flex-1 overflow-auto bg-gray-50">

//       <main className="p-6">
//       <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
//         <div className="flex w-full space-x-4 px-4">
//           <button
//             onClick={() => onNavigate("builder")}
//             className="flex-1 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             New Strategy
//           </button>
//           <button
//             onClick={() => onNavigate("backtesting")}
//             className="flex-1 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//           >
//             Backtesting
//           </button>
//           <button
//             onClick={() => onNavigate("paperTrading")}
//             className="flex-1 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             Paper Trading
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

import React from "react";



export default function Dashboard({ onNavigate }) {
  return (
    <div className="flex-1 overflow-auto  bg-gray-50">
      <main className="p-123">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          👋 Welcome to AlgoBlocks Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            onClick={() => onNavigate("newStrategy")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-all duration-200"
          >
            <span className="text-sm font-medium">New Strategy</span>
          </button>

          <button
            onClick={() => onNavigate("backtesting")}
            className="bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-all duration-200"
          >
            <span className="text-sm font-medium">Backtesting</span>
          </button>

          <button
            onClick={() => onNavigate("papertrading")}
            className="bg-purple-600 hover:bg-purple-700 text-white py-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-all duration-200"
          >
            <span className="text-sm font-medium">Paper trading</span>
          </button>
        </div>
      </main>
    </div>
  );
}
