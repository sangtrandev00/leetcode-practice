export function isValid(s: string): boolean {

    if (s.length % 2 !== 0) return false

    const dictCharacter: Record<string, any> = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (dictCharacter[s[i]]) {
            stack.push(dictCharacter[s[i]]);
        } else {
            // if (s[i] == stack[stack.length - 1]) {
            //     stack.pop()
            // } else {
            //     return false
            // }
            if (s[i] !== stack.pop()) return false

        }

    }
    return stack.length === 0
};

console.log(isValid("([}}])"));
// console.log(isValid("]"));
// console.log(isValid("()[]"));