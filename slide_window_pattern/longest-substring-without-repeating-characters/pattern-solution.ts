export function lengthOfLongestSubstring(s: string): number {

    let leftIndex = 0;
    let length = 0;
    let mapStr = new Map();
    for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {

        const char = s[rightIndex]
        // Chưa hiểu tại sao lại có khúc so sánh mapStr.get(char) này thôi!
        if (mapStr.has(char) && mapStr.get(char) >= leftIndex) {
            leftIndex = mapStr.get(char) + 1;
        }

        length = Math.max(length, rightIndex - leftIndex + 1)

        mapStr.set(char, rightIndex);
    }
    return length
}

lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("pwwkew")