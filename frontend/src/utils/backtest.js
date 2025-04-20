// src/utils/backtest.js

/** 
 * Runs a simple backtest.
 * @param {Array} data – historical OHLCV array
 * @param {Function} signalFn – (i, data) => "BUY"|"SELL"|"HOLD"
 * @param {number} initCash – starting cash
 * @returns {Object} results
 */
export function runBacktest(data, signalFn, initCash = 100000) {
    let cash = initCash;
    let position = 0;    // number of shares held
    let equityCurve = [];
    let trades = [];
  
    let peakEquity = initCash;
    let drawdowns = [];
  
    data.forEach((bar, i) => {
      const signal = signalFn(i, data);
      const price = bar.open; // execute at open of this bar
  
      // Execute signals
      if (signal === "BUY" && cash > 0) {
        position = cash / price;
        trades.push({ type: "BUY", price, date: bar.date });
        cash = 0;
      } else if (signal === "SELL" && position > 0) {
        cash = position * price;
        trades.push({ type: "SELL", price, date: bar.date });
        position = 0;
      }
  
      // Mark-to-market equity
      const equity = cash + position * bar.close;
      equityCurve.push({ date: bar.date, equity });
  
      // Drawdown
      if (equity > peakEquity) peakEquity = equity;
      drawdowns.push((peakEquity - equity) / peakEquity);
    });
  
    const pnl = equityCurve[equityCurve.length - 1].equity - initCash;
    const maxDrawdown = Math.max(...drawdowns) * 100; // in %
    
    // Sharpe Ratio (annualized), assume daily bars:
    const returns = equityCurve
      .map((p, i) => i > 0 ? (p.equity - equityCurve[i - 1].equity) / equityCurve[i - 1].equity : 0)
      .slice(1);
    const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
    const stdDev = Math.sqrt(returns.map(r => (r - avgReturn)**2).reduce((a,b) => a + b, 0) / (returns.length - 1));
    const sharpe = stdDev ? (Math.sqrt(252) * avgReturn / stdDev) : 0;
  
    return {
      trades,
      equityCurve,
      pnl,
      maxDrawdown,
      sharpeRatio: sharpe,
    };
  }
  