// // frontend/src/pages/Backtesting.jsx
// import React, { useState } from 'react';

// export default function Backtesting() {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [strategyName, setStrategyName] = useState('');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleBacktest = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResult(null);

//     try {
//       // Replace with your backend URL and pass proper strategy config in production.
//       const res = await fetch('http://localhost:8000/backtest', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           nodes: [
//             { id: '1', type: 'rsi', data: { period: 14, label: strategyName } },
//             { id: '2', type: 'buyOrder', data: { price: 'Market', qty: 100 } },
//           ],
//           edges: [
//             { id: 'e1-2', source: '1', target: '2' },
//           ],
//           startDate,
//           endDate,
//         }),
//       });
//       const data = await res.json();
//       setResult(data.result);
//     } catch (error) {
//       console.error('Backtest error:', error);
//       setResult({ error: 'Failed to run backtest' });
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold mb-6">Backtesting</h1>
//       <form onSubmit={handleBacktest} className="bg-white p-6 rounded shadow max-w-md">
//         <div className="mb-4">
//           <label className="block text-gray-700">Strategy Name</label>
//           <input
//             type="text"
//             className="mt-1 p-2 border rounded w-full"
//             value={strategyName}
//             onChange={(e) => setStrategyName(e.target.value)}
//             placeholder="Enter strategy name"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Start Date</label>
//           <input
//             type="date"
//             className="mt-1 p-2 border rounded w-full"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">End Date</label>
//           <input
//             type="date"
//             className="mt-1 p-2 border rounded w-full"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full"
//         >
//           {loading ? 'Running Backtest...' : 'Run Backtest'}
//         </button>
//       </form>
//       {result && (
//         <div className="mt-6 bg-white p-6 rounded shadow max-w-md">
//           <h2 className="text-2xl font-bold mb-4">Backtest Result</h2>
//           {result.error ? (
//             <p className="text-red-600">{result.error}</p>
//           ) : (
//             <ul className="list-disc pl-5 text-gray-700">
//               <li>Profit / Loss: {result.profit_loss}</li>
//               <li>Win Rate: {result.win_rate}</li>
//               <li>Max Drawdown: {result.max_drawdown}</li>
//               <li>Sharpe Ratio: {result.sharpe_ratio}</li>
//             </ul>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }


// // src/pages/Backtesting.jsx
// import React from 'react';
// // import { Link } from 'react-router-dom';

// export default function Backtesting() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Backtesting</h1>
//         {/* <Link to="/" className="text-blue-600 hover:underline">
//           ← Back to Dashboard
//         </Link> */}
//       </header>

//       <div className="bg-white p-6 rounded shadow max-w-xl">
//         <h2 className="text-xl mb-4">Choose a Strategy to Test</h2>
//         <p>(In production, you'd show a list of saved strategies here)</p>
//         <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-4">
//           Run Backtest
//         </button>
//       </div>
//     </div>
//   );
// }

// src/pages/Backtesting.jsx
// import React from 'react';

// export default function Backtesting({ onNavigate }) {
//   return (
//     <div className="min-h-full bg-gray-50 p-6">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Backtesting</h1>
//         <button
//           onClick={() => onNavigate('dashboard')}
//           className="text-blue-600 hover:underline"
//         >
//           &larr; Back to Dashboard
//         </button>
//       </header>
//       <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
//         <p>Select a strategy to run backtest (placeholder UI).</p>
//         <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//           Run Backtest
//         </button>
//       </div>
//     </div>
//   );
// }


// // src/pages/Backtesting.jsx
// import React, { useState } from 'react';
// import { getPriceData, simpleMovingAverage } from '../utils/dataUtils';

// export default function Backtesting({ onNavigate }) {
//   const data = getPriceData();
//   const [sma, setSma] = useState([]);

//   const runDummyBacktest = () => {
//     // e.g., compute a 3‑period SMA
//     setSma(simpleMovingAverage(3));
//   };

//   return (
//     <div className="min-h-full bg-gray-50 p-6">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Backtesting</h1>
//         <button onClick={() => onNavigate('dashboard')} className="text-blue-600 hover:underline">
//           ← Dashboard
//         </button>
//       </header>

//       <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
//         <button
//           onClick={runDummyBacktest}
//           className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//         >
//           Run 3‑period SMA
//         </button>

//         <h2 className="font-semibold mb-2">Price Data:</h2>
//         <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">{JSON.stringify(data, null, 2)}</pre>

//         {sma.length > 0 && (
//           <>
//             <h2 className="font-semibold mt-4 mb-2">3‑Period SMA:</h2>
//             <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">{JSON.stringify(sma, null, 2)}</pre>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


// Updated src/pages/Backtesting.jsx
import React from 'react';
import PriceChart from '../components/PriceChart';

export default function Backtesting({ onNavigate }) {
  return (
    //...existing code...
    <div className="min-h-full bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Backtesting</h1>
        
      </header>
      <div className="bg-white p-6 rounded shadow max-w-4xl mx-auto">
        <p className="mb-4">Visual representation of Close Price and 3‑Period SMA:</p>
        <PriceChart />
      </div>
    </div>
  );
}
