import React, { useContext } from "react";

export default function MyStrategy({ onNavigate }) {
  // Example static list—replace with real data fetch
  const strategies = [
    { id: 1, name: "My RSI Strategy", lastBacktest: "+12%" },
    { id: 2, name: "Breakout Bot", lastBacktest: "-3%" },
    { id: 3, name: "Moving Average Crossover", lastBacktest: "+8%" },
    { id: 4, name: "MACD Divergence", lastBacktest: "+15%" },
    { id: 5, name: "Bollinger Bands Strategy", lastBacktest: "-5%" },
    { id: 6, name: "Momentum Trading", lastBacktest: "+20%" },
    { id: 7, name: "Mean Reversion", lastBacktest: "+10%" },
    
  ];

  return (
    <div className=" flex-1 overflow-auto bg-gray-50">
      {/* Top bar */}

      <main className="p-6">
        {/* Strategy cards */}
        <h2 className="text-xl font-semibold mb-6">Your Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((s) => (
            <div key={s.id} className="bg-white rounded shadow p-4">
              <h3 className="text-lg font-bold mb-2">{s.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Last Backtest: {s.lastBacktest}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => onNavigate("backtesting")}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Backtest
                </button>
                <button
                  onClick={() => onNavigate("paperTrading")}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Simulate
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
