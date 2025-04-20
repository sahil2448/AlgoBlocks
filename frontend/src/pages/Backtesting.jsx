// src/pages/Backtesting.jsx
import React, { useState } from 'react';
import { runBacktest } from '../utils/backtest';
import { maCrossSignal } from '../utils/signals';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Backtesting({ data }) {
  const [result, setResult] = useState(null);
  console.log("Backtest data:", data);

  const handleRun = () => {
    const signalFn = maCrossSignal(50, 200); 
    const res = runBacktest(data, signalFn, 100000);
    setResult(res);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Backtesting</h2>
      <button
        onClick={handleRun}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Run 50/200 MA Backtest
      </button>

      {result && (
        <div className="space-y-4">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded shadow">
              <h3>Total PnL</h3>
              <p className="text-xl font-bold">${result.pnl.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3>Max Drawdown</h3>
              <p className="text-xl font-bold">{result.maxDrawdown.toFixed(2)}%</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3>Sharpe Ratio</h3>
              <p className="text-xl font-bold">{result.sharpeRatio.toFixed(2)}</p>
            </div>
          </div>

          {/* Equity Curve Chart */}
          <div className="h-64 bg-white p-4 rounded shadow">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={result.equityCurve}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="equity" stroke="#4caf50" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Trade List */}
          <div className="bg-white rounded shadow p-4 max-h-48 overflow-y-auto">
            <h3 className="font-semibold mb-2">Trades</h3>
            <ul className="text-sm space-y-1">
              {result.trades.map((t, i) => (
                <li key={i}>
                  {t.date}: {t.type} @ ${t.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
