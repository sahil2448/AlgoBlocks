import React from 'react';
import { Handle } from 'reactflow';

export const TakeProfitBlock = ({ data }) => (
  <div className="p-4 bg-green-100 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-green-900">🎯 Take Profit</div>
    <div className="text-xs mt-1">%: {data.percent || 5}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);