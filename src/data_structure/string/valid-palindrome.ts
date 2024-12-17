
export function isPalindrome(s: string): boolean {
    if (s.length == 0 || s.length == 1) return true
    const rawString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() // Sử dụng regex
    let reverseString = ''
    for (let i = 0; i < rawString.length; i++) {
        reverseString += rawString[rawString.length - 1 - i]
    }
    return reverseString == rawString
};

export function isPalindromeV2(s: string): boolean {
    if (s.length == 0 || s.length == 1) return true
    const rawString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() // Sử dụng regex
    const strLength = rawString.length;
    for (let i = 0; i < strLength / 2; i++) {
        if (rawString[i] != rawString[strLength - 1 - i]) {
            return false
        }
    }
    return true
};

console.log(isPalindromeV2("A man, a plan, a canal: Panama"))