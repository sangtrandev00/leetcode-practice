export function solution(S: string): number {
    if (S.length % 2 !== 0) return 0
    const dict: Record<string, any> = {
        '(': ')'
    } // O(1)
    const stack: string[] = [] // O(n)
    for (let i = 0; i < S.length; i++) {
        const char = S[i]
        if (dict[char]) {
            stack.push(dict[char])
        } else {
            if (stack.pop() !== char) return 0
        }
    }

    return stack.length === 0 ? 1 : 0
};

// solution('(()(())())')
solution('())')