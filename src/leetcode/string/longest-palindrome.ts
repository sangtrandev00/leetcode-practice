export function longestPalindrome(s: string): number {
    if (s.length == 0) return 0

    const dictChars: Record<string, number> = {} // Space O(h): h numbers of different charecter
    const length = s.length

    for (let i = 0; i < length; i++) {
        if (dictChars[s[i]]) {
            dictChars[s[i]] += 1;
        } else {
            dictChars[s[i]] = 1
        }
    }

    let max = 0;
    let existOdd = false
    for (const key in dictChars) {
        if (dictChars[key] % 2 == 0) {
            max += dictChars[key]
        } else if (dictChars[key] % 2 == 1 && dictChars[key] > 1) {
            max += dictChars[key] - 1
            existOdd = true
        } else {
            existOdd = true
        }
    }
    if (existOdd) {
        return max + 1
    } else {
        return max
    }
};
// Space O(h)
// Time O(n + h)
console.log("longest palindrome: ", longestPalindrome('abccccdd'));
console.log("longest palindrome: ", longestPalindrome('ccc')); // Wrong answer

// s = "abccccdd" => 7 (4 + 2 + 1)
// s = "Aa" => 1
// s = "acd" => 1