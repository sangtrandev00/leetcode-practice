

export function isPalindrome(s: string): boolean {
    if (s.length == 0) return true
    const rawString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let reverseString = ''
    for (let i = 0; i < rawString.length; i++) {
        reverseString += rawString[rawString.length - 1 - i]
    }
    return reverseString == rawString
};

isPalindrome("A man, a plan, a canal: Panama")