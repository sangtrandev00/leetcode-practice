


// Chưa nắm vững nguyên tắc của sliding window!
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

    let sum = 0
    for (let i = 0; i < s.length;) {
        const index = s[i] + s[i + 1]
        let chars = ''
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


romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");