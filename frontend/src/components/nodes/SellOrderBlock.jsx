import React from 'react';
import { Handle } from 'reactflow';

export const SellOrderBlock = ({ data }) => (
  <div className="p-4 bg-red-300 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-red-900">💰 Sell Order</div>
    <div className="text-xs mt-1">Price: {data.price || 'Market'}</div>
    <div className="text-xs">Qty: {data.qty || 100}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);