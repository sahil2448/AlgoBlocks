import React from 'react';
import { Handle } from 'reactflow';

export const CustomLogicBlock = ({ data }) => (
  <div className="p-4 bg-gray-200 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-gray-800">⚙️ Custom Logic</div>
    <div className="text-xs mt-1">Rule: {data.rule || 'x > y'}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);