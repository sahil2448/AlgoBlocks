// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="p-8 bg-white rounded shadow w-full">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">ℹ️ About AlgoBlocks</h2>
      <p className="text-gray-700 mb-4">
        <strong>AlgoBlocks</strong> is a low-code platform that allows traders to visually design, test, and deploy algorithmic trading strategies—without writing a single line of code.
      </p>
      <p className="text-gray-700 mb-4">
        Whether you're a beginner or a pro, AlgoBlocks gives you the tools to build powerful strategies using drag-and-drop blocks, real-time data, and customizable logic.
      </p>
      <p className="text-gray-700">
        Created with ❤️ by developers and traders, for developers and traders.
      </p>
    </div>
  );
}
