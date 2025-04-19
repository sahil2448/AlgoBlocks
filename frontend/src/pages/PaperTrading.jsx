// // frontend/src/pages/PaperTrading.jsx
// import React, { useState, useEffect } from 'react';

// export default function PaperTrading() {
//   const [tradingData, setTradingData] = useState({
//     currentPrice: 0,
//     openPositions: 0,
//     pnl: 0,
//   });
//   const [running, setRunning] = useState(false);

//   // Simulate real-time updates (this should be replaced with real data from your backend or websocket connection)
//   useEffect(() => {
//     let timer;
//     if (running) {
//       timer = setInterval(() => {
//         setTradingData((prev) => ({
//           currentPrice: (prev.currentPrice + Math.random() * 10).toFixed(2),
//           openPositions: Math.floor(Math.random() * 10),
//           pnl: (prev.pnl + (Math.random() - 0.5) * 20).toFixed(2),
//         }));
//       }, 2000);
//     }
//     return () => clearInterval(timer);
//   }, [running]);

//   const startTrading = () => setRunning(true);
//   const stopTrading = () => setRunning(false);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold mb-6">Paper Trading</h1>
//       <div className="bg-white p-6 rounded shadow max-w-md">
//         <div className="mb-4">
//           <span className="text-gray-700 font-semibold">Current Price: </span>
//           <span className="text-gray-900">{tradingData.currentPrice}</span>
//         </div>
//         <div className="mb-4">
//           <span className="text-gray-700 font-semibold">Open Positions: </span>
//           <span className="text-gray-900">{tradingData.openPositions}</span>
//         </div>
//         <div className="mb-4">
//           <span className="text-gray-700 font-semibold">Profit / Loss: </span>
//           <span className="text-gray-900">{tradingData.pnl}</span>
//         </div>
//         <div className="flex space-x-4">
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             onClick={startTrading}
//             disabled={running}
//           >
//             Start
//           </button>
//           <button
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//             onClick={stopTrading}
//             disabled={!running}
//           >
//             Stop
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // src/pages/PaperTrading.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function PaperTrading() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Paper Trading</h1>
//         <Link to="/" className="text-blue-600 hover:underline">
//           ← Back to Dashboard
//         </Link>
//       </header>

//       <div className="bg-white p-6 rounded shadow max-w-xl">
//         <p>Simulate live trading with real market data but no real money!</p>
//         <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 mt-4">
//           Start Simulation
//         </button>
//       </div>
//     </div>
//   );
// }


// src/pages/PaperTrading.jsx
import React from 'react';

export default function PaperTrading({ onNavigate }) {
  return (
    <div className="min-h-full bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Paper Trading</h1>
        
      </header>
      <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
        <p>Simulate live trading (placeholder UI).</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Start Simulation
        </button>
      </div>
    </div>
  );
}