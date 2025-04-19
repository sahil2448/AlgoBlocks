import React from 'react';
import { Handle } from 'reactflow';

export const LimitOrderBlock = ({ data }) => (
  <div className="p-4 bg-blue-100 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-blue-900">🔖 Limit Order</div>
    <div className="text-xs mt-1">Limit: {data.limit || 100.0}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);