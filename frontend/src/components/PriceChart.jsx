// src/components/PriceChart.jsx
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import priceData from '../data/priceData.json';

// Utility to compute simple moving average
const computeSMA = (data, period = 3) => {
  const closes = data.map((d) => d.close);
  return closes.map((_, i) => {
    if (i < period - 1) return null;
    const slice = closes.slice(i - period + 1, i + 1);
    const sum = slice.reduce((a, b) => a + b, 0);
    return parseFloat((sum / period).toFixed(2));
  });
};

// Prepare chart data
const chartData = priceData.map((d, i) => ({
  date: d.date,
  close: d.close,
  sma3: computeSMA(priceData, 3)[i]
}));

export default function PriceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} name="Close Price" />
        <Line type="monotone" dataKey="sma3" stroke="#82ca9d" dot={false} name="3-Period SMA" />
      </LineChart>
    </ResponsiveContainer>
  );
}