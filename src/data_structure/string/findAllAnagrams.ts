import { isAnagram } from "./anagram";


// Sử dụng solution cơ bản
export function findAnagrams(s: string, p: string): number[] {

    const length = p.length;
    const result = []
    for (let i = 0; i < s.length - length + 1; i++) {
        const subSlice = s.slice(i, i + length)
        if (isAnagram(subSlice, p)) {
            result.push(i)
        }
    }

    return result
};

findAnagrams('rat', 'car')

// Sử dụng solution nâng cao (Sliding window (Xem thêm))
// #sliding-window, #string, #charCodeAt()
function findAnagrams2(s: string, p: string): number[] {
    const result: number[] = [];
    if (s.length < p.length) return result;

    const charCount = Array(26).fill(0); // Frequency array for 'a' to 'z'

    // Fill the frequency array for `p`
    for (const char of p) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Create a sliding window in `s`
    let window = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        // Add the current character to the window
        window[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;

        // Remove the character outside the window
        if (i >= p.length) {
            window[s.charCodeAt(i - p.length) - 'a'.charCodeAt(0)]--;
        }

        // Compare window with `p` frequency array
        if (arraysAreEqual(charCount, window)) {
            result.push(i - p.length + 1);
        }
    }

    return result;
}

// Helper function to compare two arrays for equality
function arraysAreEqual(arr1: number[], arr2: number[]): boolean {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
