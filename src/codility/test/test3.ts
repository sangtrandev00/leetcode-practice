// Pass 7 Testcase

export function solution(X: number[], Y: number[]): number {
    // Implement your solution here
    // Max distance (8 - 1)
    // Find max distance <= 7 (Only occur in X and no thing appear between)
    // Y doesnt' affect
    const mapTree = X.map((item, index) => {
        return {
            x: item,
            y: Y[index]
        }
    }) // O(n)
    // Sắp xếp vị trí các cây gần nhau
    mapTree.sort((a, b) => a.x - b.x) // O(n log n)
    let maxDistance = 0
    for (let i = 0; i < X.length - 1; i++) {
        if (mapTree[i + 1].y != mapTree[i].y) {
            maxDistance = Math.max(maxDistance, mapTree[i + 1].x - mapTree[i].x)
        }
    }// O(n)

    return maxDistance

}

// BigO => n log n
