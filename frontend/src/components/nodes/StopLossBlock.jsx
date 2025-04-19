import React from 'react';
import { Handle } from 'reactflow';

export const StopLossBlock = ({ data }) => (
  <div className="p-4 bg-red-200 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-red-900">🛑 Stop Loss</div>
    <div className="text-xs mt-1">%: {data.percent || 2}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);