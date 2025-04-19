import React from 'react';
import { Handle } from 'reactflow';

export const TrailingStopBlock = ({ data }) => (
  <div className="p-4 bg-orange-100 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-orange-900">🚀 Trailing Stop</div>
    <div className="text-xs mt-1">%: {data.percent || 3}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);
