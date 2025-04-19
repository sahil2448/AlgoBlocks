// components/Sidebar.jsx
// export const Sidebar = () => {
//     const dragStart = (event, nodeType) => {
//       event.dataTransfer.setData('application/reactflow', nodeType);
//       event.dataTransfer.effectAllowed = 'move';
//     };
  
//     return (
//       <div className="w-64 p-4 bg-gray-100 h-screen">
//         <div
//           className="p-2 mb-4 bg-white rounded shadow cursor-move"
//           draggable
//           onDragStart={(e) => dragStart(e, 'rsi')}
//         >
//           📈 RSI Block
//         </div>
//         <div
//           className="p-2 mb-4 bg-white rounded shadow cursor-move"
//           draggable
//           onDragStart={(e) => dragStart(e, 'buyOrder')}
//         >
//           🛒 Buy Order
//         </div>
//       </div>
//     );
//   };
  

// frontend/src/components/Sidebar.jsx
// import React from 'react';

// export const Sidebar = () => {
//   const dragStart = (event, nodeType) => {
//     event.dataTransfer.setData('application/reactflow', nodeType);
//     event.dataTransfer.effectAllowed = 'move';
//   };

//   return (
//     <div className="w-64 p-4 bg-gray-100 h-screen">
//       <h2 className="text-lg font-bold mb-4">Strategy Blocks</h2>
//       <div
//         className="p-2 mb-4 bg-white rounded shadow cursor-move"
//         draggable
//         onDragStart={(e) => dragStart(e, 'marketData')}
//       >
//         📊 Market Data
//       </div>
//       <div
//         className="p-2 mb-4 bg-white rounded shadow cursor-move"
//         draggable
//         onDragStart={(e) => dragStart(e, 'rsi')}
//       >
//         📈 RSI Block
//       </div>
//       <div
//         className="p-2 mb-4 bg-white rounded shadow cursor-move"
//         draggable
//         onDragStart={(e) => dragStart(e, 'buyOrder')}
//       >
//         🛒 Buy Order
//       </div>
//       {/* Additional blocks for other indicators, risk controls, etc. */}
//     </div>
//   );
// };

// src/components/Sidebar.jsx
// import React from 'react';

// export const Sidebar = () => {
//   const dragStart = (event, nodeType) => {
//     event.dataTransfer.setData('application/reactflow', nodeType);
//     event.dataTransfer.effectAllowed = 'move';
//   };

//   return (
//     <div className="w-60 p-4 bg-gray-200 border-r border-gray-300 space-y-4">
//       <h2 className="text-md font-semibold">Strategy builder</h2>
//       <div
//         className="p-2 bg-white rounded shadow cursor-move"
//         draggable
//         onDragStart={(e) => dragStart(e, 'marketData')}
//       >
//         Market data
//       </div>
//       <div
//         className="p-2 bg-white rounded shadow cursor-move"
//         draggable
//         onDragStart={(e) => dragStart(e, 'rsi')}
//       >
//         RSI block
//       </div>
//       <div
//         className="p-2 bg-white rounded shadow cursor-move"
//         draggable
//         onDragStart={(e) => dragStart(e, 'buyOrder')}
//       >
//         buy block
//       </div>
//     </div>
//   );
// };



// src/components/BlockSidebar.jsx
import React from 'react';

// List of draggable blocks with default data
const blockList = [
  { label: 'Market Data', type: 'marketData', data: { asset: 'AAPL' } },
  { label: 'RSI', type: 'rsi', data: { period: 14 } },
  { label: 'Moving Average', type: 'movingAverage', data: { period: 50 } },
  { label: 'Bollinger Bands', type: 'bollingerBands', data: { period: 20, stdDev: 2 } },
  { label: 'MACD', type: 'macd', data: { fast: 12, slow: 26, signal: 9 } },
  // { label: 'Chart Pattern', type: 'chartPattern', data: { pattern: 'Head & Shoulders' } },
  // { label: 'Position Sizing', type: 'positionSizing', data: { size: '10%' } },
  { label: 'Stop Loss', type: 'stopLoss', data: { percent: 2 } },
  { label: 'Take Profit', type: 'takeProfit', data: { percent: 5 } },
  // { label: 'Trailing Stop', type: 'trailingStop', data: { percent: 3 } },
  { label: 'Buy Order', type: 'buyOrder', data: { price: 'Market', qty: 100 } },
  { label: 'Sell Order', type: 'sellOrder', data: { price: 'Market', qty: 100 } },
  // { label: 'Limit Order', type: 'limitOrder', data: { limit: 100.0 } },
  { label: 'Stop Order', type: 'stopOrder', data: { stop: 95.0 } },
  { label: 'Custom Logic', type: 'customLogic', data: { rule: 'x > y' } },
];

export const BlockSidebar = () => {
  const onDragStart = (event, block) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(block));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300 overflow-auto">
      <h2 className="text-lg font-semibold mb-4">Strategy Blocks</h2>
      {blockList.map((block) => (
        <div
          key={block.type}
          className="mb-2 p-2 bg-white rounded shadow cursor-move hover:bg-gray-50"
          draggable
          onDragStart={(e) => onDragStart(e, block)}
        >
          {block.label}
        </div>
      ))}
    </aside>
  );
};
