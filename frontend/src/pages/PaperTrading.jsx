import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PaperTrading({ onNavigate }) {
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

  return (
    <div className="min-h-full bg-gray-50 p-6 flex flex-col lg:flex-row gap-6 items-start justify-evenly">
      {/* Stock Data Block */}
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

      {/* Simulation Block */}
      <div className="bg-white p-6 rounded shadow max-w-xl w-full">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black">Paper Trading</h1>
        </header>
        <p className="text-black">Simulate live trading (placeholder UI).</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Start Simulation
        </button>
      </div>
    </div>
  );
}
