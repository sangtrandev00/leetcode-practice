// Brute force
export function maxProfit(prices: number[]): number {
    const length = prices.length
    let max = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            const currentMax = prices[j] - prices[i]
            if (currentMax > max) max = currentMax
        }
    }
    return max
};

// Cái này áp dụng thuật toán tham lam ? (Nguyên tắc của thuật toán tham lam là gì ?)
export function maxProfitV2(prices: number[]): number {
    const length = prices.length
    let min = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else {
            const currentProfit = prices[i] - min
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit
            }
        }
    }
    return maxProfit
};