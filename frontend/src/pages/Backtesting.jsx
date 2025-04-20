// src/pages/Backtesting.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { runBacktest } from "../utils/backtest";
import { maCrossSignal } from "../utils/signals";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Backtesting({ data }) {
  const [result, setResult] = useState(null);
  console.log("Backtest data:", data);

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getApiData")
      .then((res) => {
        setApiData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleRun = () => {
    const signalFn = maCrossSignal(50, 200);
    const res = runBacktest(data, signalFn, 100000);
    setResult(res);
  };

  return (
    <div className="p-6 space-y-6 flex justify-evenly bg-white">
      <div
        className="bg-white p-4 rounded shadow w-full max-w-md overflow-y-auto"
        style={{ maxHeight: "500px" }}
      >
        <h2 className="text-xl font-semibold mb-4 text-black">Stock Data</h2>
        <table className="table-auto w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-200 sticky top-0 z-10">
            <tr>
              <th className="px-2 py-1">Date</th>
              <th className="px-2 py-1">Open</th>
              <th className="px-2 py-1">High</th>
              <th className="px-2 py-1">Low</th>
              <th className="px-2 py-1">Close</th>
              <th className="px-2 py-1">Volume</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((stock, index) => (
              <tr key={index} className="border-t">
                <td className="px-2 py-1">{stock.date?.substring(0, 10)}</td>
                <td className="px-2 py-1">{stock.open}</td>
                <td className="px-2 py-1">{stock.high}</td>
                <td className="px-2 py-1">{stock.low}</td>
                <td className="px-2 py-1">{stock.close}</td>
                <td className="px-2 py-1">{stock.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-4 rounded shadow w-full h-[80%] max-w-md ">
        <h2 className="text-2xl font-semibold text-black">Backtesting</h2>
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
                <p className="text-xl font-bold">
                  {result.maxDrawdown.toFixed(2)}%
                </p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h3>Sharpe Ratio</h3>
                <p className="text-xl font-bold">
                  {result.sharpeRatio.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Equity Curve Chart */}
            <div className="h-64 bg-white p-4 rounded shadow">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={result.equityCurve}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="equity"
                    stroke="#4caf50"
                    dot={false}
                  />
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
    </div>
  );
}
