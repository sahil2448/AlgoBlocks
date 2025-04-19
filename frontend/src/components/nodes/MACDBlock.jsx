import React from 'react';
import { Handle } from 'reactflow';

export const MACDBlock = ({ data }) => (
  <div className="p-4 bg-indigo-200 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-indigo-900">📈 MACD</div>
    <div className="text-xs mt-1">Fast: {data.fast || 12}</div>
    <div className="text-xs">Slow: {data.slow || 26}</div>
    <div className="text-xs">Signal: {data.signal || 9}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);