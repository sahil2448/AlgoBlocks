// src/pages/Learn.jsx
import React from 'react';

export default function Learn() {
  return (
    <div className="p-8 bg-white rounded shadow w-full">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">📚 Learn Algorithmic Trading</h2>
      <p className="mb-6 text-gray-700">
        Explore articles, tutorials, and videos to deepen your understanding of trading strategies, indicators, and automation.
      </p>
      <ul className="space-y-4">
        <li className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-800">What is Algorithmic Trading?</h3>
          <p className="text-gray-600">An introduction to automated trading and how AlgoBlocks simplifies it.</p>
        </li>
        <li className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-800">Understanding Technical Indicators</h3>
          <p className="text-gray-600">Learn about RSI, Moving Averages, MACD, and more.</p>
        </li>
        <li className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-800">Building a Simple Strategy</h3>
          <p className="text-gray-600">A step-by-step guide to designing your first algorithm.</p>
        </li>
      </ul>
    </div>
  );
}
