

function addTo80(n: number) {
    console.log('take very long time');
    return n + 80
}

// Chuyện gì sẽ xảy ra nếu n cùng một giá trị nhưng gọi nhiều lần ?
// Có kỹ thuật nào tối ưu hơn không ?

const cache: { [key: number]: number } = {};
function memoizedAddTo80(n: number) {
    if (cache[n]) {
        return cache[n]
    } else {
        cache[n] = 80 + n
    }
}

console.log("memoizedAddTo80(5)", memoizedAddTo80(5));
console.log("memoizedAddTo80(5)", memoizedAddTo80(5));

function closure() {
    debugger
    const cache: any = {}
    // Using closure to memorized things in JS!
    return function (n: number) {
        if (cache[n]) {
            return cache[n]
        } else {
            console.log("take a long time!");
            cache[n] = 80 + n
        }
    }
}

const memoized = closure()
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(6));
console.log(memoized(7));
console.log(memoized(6));