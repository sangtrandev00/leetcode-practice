
export function romanToInt(s: string): number {
    const mapRoman = new Map();
    mapRoman.set('I', 1);
    mapRoman.set('V', 5);
    mapRoman.set('X', 10);
    mapRoman.set('L', 50);
    mapRoman.set('C', 100);
    mapRoman.set('D', 500);
    mapRoman.set('M', 1000);
    mapRoman.set('IV', 4);
    mapRoman.set('IX', 9);
    mapRoman.set('XL', 40);
    mapRoman.set('XC', 90);
    mapRoman.set('CD', 400);
    mapRoman.set('CM', 900);

    let sum = 0 // Cách giải này khá giống thuộc và nhớ bài quá! Làm sao phân tích một cách trơn tru hơn
    for (let i = 0; i < s.length;) {
        const index = s[i] + s[i + 1]
        let chars = ''
        // Hiểu phương pháp làm của thuật toán này!
        if (mapRoman.get(index)) {
            sum += mapRoman.get(index)
            chars = index
        } else {
            sum += mapRoman.get(s[i])
            chars = s[i]
        }
        i += chars.length
    }

    return sum
};

// Space O(1), Time O(n)
romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");