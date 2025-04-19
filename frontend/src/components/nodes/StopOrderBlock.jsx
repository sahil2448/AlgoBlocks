import React from 'react';
import { Handle } from 'reactflow';

export const StopOrderBlock = ({ data }) => (
  <div className="p-4 bg-purple-100 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-purple-900">🚧 Stop Order</div>
    <div className="text-xs mt-1">Stop: {data.stop || 95.0}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);