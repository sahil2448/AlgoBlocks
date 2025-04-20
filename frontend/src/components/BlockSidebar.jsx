

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
    <div className=" flex h-[calc(100vh-18rem)]">
    <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4  ">Strategy Blocks</h2>
      {blockList.map((block) => (
        <div
          key={block.type}
          className="mb-2 p-2 bg-white rounded shadow cursor-move hover:bg-gray-50 "
          draggable
          onDragStart={(e) => onDragStart(e, block)}
        >
          {block.label}
        </div>
      ))}
    </aside></div>
  );
};
