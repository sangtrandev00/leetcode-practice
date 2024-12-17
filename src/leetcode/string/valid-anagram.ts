export function isAnagram(s: string, t: string): boolean {
    s = s.toLowerCase()
    t = t.toLowerCase()
    if (s.length != t.length) return false

    const dict: Record<string, number> = {}
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]]) {
            dict[s[i]] += 1
        } else {
            dict[s[i]] = 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (dict[t[i]]) {
            if (dict[t[i]] > 1) {
                dict[t[i]] -= 1
            } else {
                delete dict[t[i]]
            }
        } else {
            return false
        }
    }

    return true // Time complexity: O(n), Space complexity: O(n)

};

console.log("isAnagram", isAnagram("anagram", "nagaram"));
console.log("isAnagram", isAnagram("rat", "car"));