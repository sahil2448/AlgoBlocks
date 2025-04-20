// src/pages/StrategyBuilder.jsx
import React, { useState } from 'react';
import { BlockSidebar } from '../components/BlockSidebar';
import { Canvas } from '../components/Canvas';

export default function StrategyBuilder({ nodeTypes, onNavigate }) {
  const [strategyName, setStrategyName] = useState('');

  const handleSave = () => {
    alert(`Strategy "${strategyName}" saved!`);
    onNavigate('dashboard');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-14rem)] bg-gray-100">
      <header className="bg-white p-4 shadow flex justify-between items-center">
        <h1 className="text-xl font-bold">Strategy Builder</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter strategy name"
            value={strategyName}
            onChange={(e) => setStrategyName(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <button
            onClick={handleSave}
            disabled={!strategyName}
            className="bg-blue-600 text-white px-4 py-1 rounded disabled:opacity-100"
          >
            Save
          </button>
          
        </div>
      </header>
      <div className="flex flex-1">
        < BlockSidebar />
        <Canvas nodeTypes={nodeTypes} />
      </div>
    </div>
  );
}
