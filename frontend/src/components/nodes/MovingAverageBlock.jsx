import React from 'react';
import { Handle } from 'reactflow';

export const MovingAverageBlock = ({ data }) => (
  <div className="p-4 bg-green-200 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-green-900">📊 Moving Average</div>
    <div className="text-xs mt-1">Period: {data.period || 50}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);
