
// Độ phức tạp là 1 (Constant)
export function solution(X: number, Y: number, D: number): number {

    if (Y <= X) return 0

    return Math.ceil((Y - X) / D)
};