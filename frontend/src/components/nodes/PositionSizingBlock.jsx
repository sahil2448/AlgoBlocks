import React from 'react';
import { Handle } from 'reactflow';

export const PositionSizingBlock = ({ data }) => (
  <div className="p-4 bg-red-100 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-red-800">⚖️ Position Sizing</div>
    <div className="text-xs mt-1">Size: {data.size || '10%'}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);