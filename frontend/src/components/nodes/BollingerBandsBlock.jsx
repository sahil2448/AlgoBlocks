import React from 'react';
import { Handle } from 'reactflow';

export const BollingerBandsBlock = ({ data }) => (
  <div className="p-4 bg-purple-200 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-purple-900">📈 Bollinger Bands</div>
    <div className="text-xs mt-1">Period: {data.period || 20}</div>
    <div className="text-xs">Std Dev: {data.stdDev || 2}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);