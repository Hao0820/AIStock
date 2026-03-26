export function calculateSMA(data: number[], period: number): (number | null)[] {
  const result: (number | null)[] = new Array(data.length).fill(null);
  for (let i = period - 1; i < data.length; i++) {
    let sum = 0;
    for (let j = 0; j < period; j++) {
      sum += data[i - j];
    }
    result[i] = sum / period;
  }
  return result;
}

export function calculateEMA(data: number[], period: number): (number | null)[] {
  const result: (number | null)[] = new Array(data.length).fill(null);
  const k = 2 / (period + 1);
  
  if (data.length < period) return result;
  
  let sum = 0;
  for (let i = 0; i < period; i++) {
    sum += data[i];
  }
  let prevEMA = sum / period;
  result[period - 1] = prevEMA;

  for (let i = period; i < data.length; i++) {
    const ema = (data[i] - prevEMA) * k + prevEMA;
    result[i] = ema;
    prevEMA = ema;
  }
  
  return result;
}

export function calculateBollingerBands(data: number[], period: number, stdDevMultiplier: number) {
  const sma = calculateSMA(data, period);
  const upper: (number | null)[] = new Array(data.length).fill(null);
  const lower: (number | null)[] = new Array(data.length).fill(null);
  
  for (let i = period - 1; i < data.length; i++) {
    const mean = sma[i] as number;
    let sumSquares = 0;
    for (let j = 0; j < period; j++) {
      sumSquares += Math.pow(data[i - j] - mean, 2);
    }
    const stdDev = Math.sqrt(sumSquares / period);
    upper[i] = mean + stdDevMultiplier * stdDev;
    lower[i] = mean - stdDevMultiplier * stdDev;
  }
  
  return { middle: sma, upper, lower };
}

export function calculateRSI(closes: number[], period: number = 14): (number | null)[] {
  const rsi: (number | null)[] = new Array(closes.length).fill(null);
  if (closes.length <= period) return rsi;

  let previousAverageGain = 0;
  let previousAverageLoss = 0;

  for (let i = 1; i <= period; i++) {
    const diff = closes[i] - closes[i - 1];
    if (diff > 0) {
      previousAverageGain += diff;
    } else {
      previousAverageLoss -= diff;
    }
  }

  previousAverageGain /= period;
  previousAverageLoss /= period;

  let rs = previousAverageLoss === 0 ? 100 : previousAverageGain / previousAverageLoss;
  rsi[period] = previousAverageLoss === 0 ? 100 : 100 - (100 / (1 + rs));

  for (let i = period + 1; i < closes.length; i++) {
    const diff = closes[i] - closes[i - 1];
    let currentGain = 0;
    let currentLoss = 0;
    
    if (diff > 0) currentGain = diff;
    else currentLoss = -diff;

    const averageGain = (previousAverageGain * (period - 1) + currentGain) / period;
    const averageLoss = (previousAverageLoss * (period - 1) + currentLoss) / period;

    previousAverageGain = averageGain;
    previousAverageLoss = averageLoss;

    rs = averageLoss === 0 ? 100 : averageGain / averageLoss;
    rsi[i] = averageLoss === 0 ? 100 : 100 - (100 / (1 + rs));
  }

  return rsi;
}

export function calculateKD(highs: number[], lows: number[], closes: number[], period: number = 9): { k: (number | null)[], d: (number | null)[] } {
  const kArr: (number | null)[] = new Array(closes.length).fill(null);
  const dArr: (number | null)[] = new Array(closes.length).fill(null);
  
  if (closes.length < period) return { k: kArr, d: dArr };

  let prevK = 50; 
  let prevD = 50;
  
  for (let i = period - 1; i < closes.length; i++) {
    const windowHighs = highs.slice(i - period + 1, i + 1);
    const windowLows = lows.slice(i - period + 1, i + 1);
    const highestHigh = Math.max(...windowHighs);
    const lowestLow = Math.min(...windowLows);
    const close = closes[i];
    
    let rsv = 0;
    if (highestHigh !== lowestLow) {
      rsv = ((close - lowestLow) / (highestHigh - lowestLow)) * 100;
    } else {
      rsv = prevK; 
    }
    
    const k = (2 / 3) * prevK + (1 / 3) * rsv;
    const d = (2 / 3) * prevD + (1 / 3) * k;
    
    kArr[i] = k;
    dArr[i] = d;
    
    prevK = k;
    prevD = d;
  }
  
  return { k: kArr, d: dArr };
}

export function calculateMACD(closes: number[], fastPeriod: number = 12, slowPeriod: number = 26, signalPeriod: number = 9): { macd: (number | null)[], signal: (number | null)[], histogram: (number | null)[] } {
  const macd: (number | null)[] = new Array(closes.length).fill(null);
  const signal: (number | null)[] = new Array(closes.length).fill(null);
  const histogram: (number | null)[] = new Array(closes.length).fill(null);
  
  const emaFast = calculateEMA(closes, fastPeriod);
  const emaSlow = calculateEMA(closes, slowPeriod);
  
  if (closes.length < slowPeriod) return { macd, signal, histogram };
  
  const validMacdValues: number[] = [];
  const macdStartIndex = slowPeriod - 1;
  
  for (let i = 0; i < closes.length; i++) {
    if (i < macdStartIndex || emaFast[i] === null || emaSlow[i] === null) {
      macd[i] = null;
    } else {
      const val = emaFast[i]! - emaSlow[i]!;
      macd[i] = val;
      validMacdValues.push(val);
    }
  }
  
  const signalEma = calculateEMA(validMacdValues, signalPeriod);
  
  for (let i = 0; i < validMacdValues.length; i++) {
    const actualIdx = macdStartIndex + i;
    signal[actualIdx] = signalEma[i] !== null ? signalEma[i] : null;
    
    if (macd[actualIdx] !== null && signal[actualIdx] !== null) {
      histogram[actualIdx] = macd[actualIdx]! - signal[actualIdx]!;
    }
  }

  return { macd, signal, histogram };
}
