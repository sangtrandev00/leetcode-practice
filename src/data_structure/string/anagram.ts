export function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false
    const map1 = new Map()
    const map2 = new Map()

    for (let i = 0; i < s.length; i++) {
        if (map1.has(s[i])) {
            map1.set(s[i], map1.get(s[i]) + 1)
        } else {
            map1.set(s[i], 1)
        }

        if (map2.has(t[i])) {
            map2.set(t[i], map2.get(t[i]) + 1)
        } else {
            map2.set(t[i], 1)
        }
    }

    for (const [key1, value1] of map1.entries()) {
        if (map2.get(key1) !== value1) return false
    }

    return true
};

isAnagram('rat', 'car')