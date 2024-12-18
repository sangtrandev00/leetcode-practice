

export function canConstruct(ransomNote: string, magazine: string): boolean {
    if (magazine == '' && ransomNote == '') return true

    const dictLetters: Record<string, number> = {}

    for (let i = 0; i < magazine.length; i++) {
        if (dictLetters[magazine[i]]) {
            dictLetters[magazine[i]] += 1
        } else {
            dictLetters[magazine[i]] = 1
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (dictLetters[ransomNote[i]]) {
            if (dictLetters[ransomNote[i]] > 1) {
                dictLetters[ransomNote[i]] -= 1
            } else {
                delete dictLetters[ransomNote[i]]
            }
        } else {
            return false
        }
    }
    return true    // Độ phức tạp


};