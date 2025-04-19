import React from 'react';
import { Handle } from 'reactflow';

export const ChartPatternBlock = ({ data }) => (
  <div className="p-4 bg-teal-200 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-teal-900">🔍 Chart Pattern</div>
    <div className="text-xs mt-1">Pattern: {data.pattern || 'Head & Shoulders'}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);