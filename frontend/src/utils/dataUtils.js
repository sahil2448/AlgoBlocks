// src/utils/dataUtils.js
import priceData from '../data/priceData.json';

/**
 * Returns the raw array of OHLCV objects.
 */
export function getPriceData() {
  return priceData;
}

/**
 * Example: compute a simple moving average on closing prices.
 * period = number of points to average (e.g. 3).
 */
export function simpleMovingAverage(period) {
  const closes = priceData.map((d) => d.close);
  return closes.map((_, i, arr) => {
    if (i < period - 1) return null;
    const slice = arr.slice(i - period + 1, i + 1);
    const sum = slice.reduce((s, v) => s + v, 0);
    return sum / period;
  });
}
