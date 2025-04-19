// // App.jsx
// import { Sidebar } from './components/Sidebar';
// import { Canvas } from './components/Canvas';
// import "./index.css"

// export default function App() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <Canvas />
   
      
    
//     </div>
//   );
// }

// frontend/src/App.jsx



// import "./index.css"
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Dashboard from './pages/Dashboard';
// import StrategyBuilder from './pages/StrategyBuilder';
// import Backtesting from './pages/Backtesting';
// import PaperTrading from './pages/PaperTrading';

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/builder" element={<StrategyBuilder />} />
//         <Route path="/backtesting" element={<Backtesting />} />
//         <Route path="/paper-trading" element={<PaperTrading />} />
//       </Routes>
//     </Router>
//   );
// }


// // frontend/src/App.jsx

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './auth/AuthContext';
// import { PrivateRoute } from './auth/PrivateRoute';

// // Pages
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import StrategyBuilder from './pages/StrategyBuilder';
// import Backtesting from './pages/Backtesting';
// import PaperTrading from './pages/PaperTrading';

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/builder"
//             element={
//               <PrivateRoute>
//                 <StrategyBuilder />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/backtesting"
//             element={
//               <PrivateRoute>
//                 <Backtesting />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/paper-trading"
//             element={
//               <PrivateRoute>
//                 <PaperTrading />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './auth/AuthContext';
// import { PrivateRoute } from './auth/PrivateRoute';

// // Import your pages
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import StrategyBuilder from './pages/StrategyBuilder';
// import Backtesting from './pages/Backtesting';
// import PaperTrading from './pages/PaperTrading';

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/builder"
//             element={
//               <PrivateRoute>
//                 <StrategyBuilder />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/backtesting"
//             element={
//               <PrivateRoute>
//                 <Backtesting />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/paper-trading"
//             element={
//               <PrivateRoute>
//                 <PaperTrading />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }


// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './auth/AuthContext';
// import { PrivateRoute } from './auth/PrivateRoute';

// // Pages
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import StrategyBuilder from './pages/StrategyBuilder';
// import Backtesting from './pages/Backtesting';
// import PaperTrading from './pages/PaperTrading';

// // Node components
// import { MarketDataBlock } from './components/nodes/MarketDataBlock';
// import { RSIBlock } from './components/nodes/RSIBlock';
// import { MovingAverageBlock } from './components/nodes/MovingAverageBlock';
// import { BollingerBandsBlock } from './components/nodes/BollingerBandsBlock';
// import { MACDBlock } from './components/nodes/MACDBlock';
// import { ChartPatternBlock } from './components/nodes/ChartPatternBlock';
// import { PositionSizingBlock } from './components/nodes/PositionSizingBlock';
// import { StopLossBlock } from './components/nodes/StopLossBlock';
// import { TakeProfitBlock } from './components/nodes/TakeProfitBlock';
// import { TrailingStopBlock } from './components/nodes/TrailingStopBlock';
// import { BuyOrderBlock } from './components/nodes/BuyOrderBlock';
// import { SellOrderBlock } from './components/nodes/SellOrderBlock';
// import { LimitOrderBlock } from './components/nodes/LimitOrderBlock';
// import { StopOrderBlock } from './components/nodes/StopOrderBlock';
// import { CustomLogicBlock } from './components/nodes/CustomLogicBlock';

// // Consolidate all node types for React Flow
// const nodeTypes = {
//   marketData: MarketDataBlock,
//   rsi: RSIBlock,
//   movingAverage: MovingAverageBlock,
//   bollingerBands: BollingerBandsBlock,
//   macd: MACDBlock,
//   chartPattern: ChartPatternBlock,
//   positionSizing: PositionSizingBlock,
//   stopLoss: StopLossBlock,
//   takeProfit: TakeProfitBlock,
//   trailingStop: TrailingStopBlock,
//   buyOrder: BuyOrderBlock,
//   sellOrder: SellOrderBlock,
//   limitOrder: LimitOrderBlock,
//   stopOrder: StopOrderBlock,
//   customLogic: CustomLogicBlock,
// };

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/builder"
//             element={
//               <PrivateRoute>
//                 <StrategyBuilder nodeTypes={nodeTypes} />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/backtesting"
//             element={
//               <PrivateRoute>
//                 <Backtesting />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/paper-trading"
//             element={
//               <PrivateRoute>
//                 <PaperTrading />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }


// src/App.jsx
import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import MainApp from './MainApp';

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
