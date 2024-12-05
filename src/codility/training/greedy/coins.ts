
// Áp dụng vào bài chỗ ngồi của xe được không nhỉ ?
export function coinChangeGreedy(coins: number[], amount: number): number[] {
    coins.sort((a, b) => b - a); // Sort coins in descending order
    let result: number[] = [];
    let remaining = amount;

    for (let coin of coins) {
        while (remaining >= coin) {
            result.push(coin);
            remaining -= coin;
        }
    }

    return remaining === 0 ? result : []; // Return empty if no solution
}