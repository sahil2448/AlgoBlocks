// src/utils/signals.js
import { simpleMovingAverage } from './dataUtils';

export function maCrossSignal(periodFast = 50, periodSlow = 200) {
  return (i, data) => {
    const closes = data.map(d => d.close);
    const fast = simpleMovingAverage(closes, periodFast);
    const slow = simpleMovingAverage(closes, periodSlow);
    if (i < periodSlow) return "HOLD";
    if (fast[i] > slow[i] && fast[i - 1] <= slow[i - 1]) return "BUY";
    if (fast[i] < slow[i] && fast[i - 1] >= slow[i - 1]) return "SELL";
    return "HOLD";
  }
}
