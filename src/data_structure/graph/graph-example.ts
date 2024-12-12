
// 3 concepts to build a graph
// Edge List
const graphEdge = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3],
];

// Adjacent List
const graphAjacent = [[2], [2, 3], [0, 1, 3], [1, 2]];
const mapGraphAdjacent = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2],
}

const mapGraphAdjacentWeighted = {
    0: [[1, 99], [2, 50]],
    1: [[2, 50], [3, 50], [4, 50]],
    2: [[3, 99]],
    3: [[4, 75]],
    4: [],
}

// Adjacent Matrix
const graphAdjectMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
];

// Adjacent Matrix
const graphExample = {
    0: [0, 0, 0, 0, 0],
    1: [99, 9, 0, 0, 0],
    2: [50, 50, 0, 0, 0],
    3: [0, 0, 50, 0, 0],
    4: [0, 0, 0, 75, 0],
}