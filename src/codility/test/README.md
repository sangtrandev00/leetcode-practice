# Câu hỏi phỏng vấn NAB Starcamp

**Câu 1:**

There are N trees (numbered from 0 to N-1) in a forest. The K-th tree is located at coordinates
(X[K], Y[K)).
We want to build the widest possible vertical path, such that there is no tree on it. The path must
be built somewhere between a leftmost and a rightmost tree, which means that the width of the
path cannot be infinite.
What is the width of the widest possible path that can be built?
Write a function:
function solution(X: number[I, Y: number[1) : number;
that, given two arrays X and Y consisting of N integers each, denoting the positions of trees,
returns the width of the widest possible path that can be built.
**Examples:**
1. Given X=[1, 8, 7, 3, 4, 1, 8], Y=[6, 4, 1, 8, 5, 1, 7], the function should return 3. (Sơ đồ hoá lên, vẽ sơ đồ toạ độ X, Y thì mới hiểu thêm được)
2. Given X=(5, 5, 5, 7, 7, 7], Y=(3, 4, 5, 1, 3, 7], the function should return 2.
3. Given X=[4, 1, 5, 4], Y-|4, 5, 1, 3], the function should return 3.


**Câu 2:** 
A group of friends is going on holiday together. They have come to a meeting point (the start of the
journey) using N cars. There are P[K] people and S(K] seats in the K-th car for K in range 0..N-1].
Some of the seats in the cars may be free, so it is possible for some of the friends to change the car
they are in. The friends have decided that, in order to be ecological, they will leave some cars parked
at the meeting point and travel with as few cars as possible.
Write a function:
function solution(P: number[], S: number []) : number;
that, given two arrays P and S, consisting of N integers each, returns the minimum number of cars
needed to take all of the friends on holiday.
**Examples:**
1. Given P = [1, 4, 1] and S = [1, 5, 1], the function should return 2. A person from car number 0 can
travel in car number 1 instead. This way, car number 0 can be left parked at the meeting point.
2. Given P = [4, 4, 2, 4] and S = [5, 5, 2, 5], the function should return 3. One person from car number
2 can travel in car number 0 and the other person from car number 2 can travel in car number 3
3. Given P = [2, 3, 4, 2] and S = [2, 5, 7, 2], the function should return 2. Passengers from car number
0 can travel in car number 1 and passengers from car number 3 can travel in car number 2.
Write an efficient algorithm for the following assumptions:
• Nis an integer within the range [1..100,000);
each element of arrays P and S is an integer within the range [1..9];
• every friend had a seat in the car they came in; that is, P[k]s S{k] for each K within the range [0..N-1]


**Câu 3:**

You are given a positive integer N. Your task is to find the smallest integer greater than N that does
not contain two identical consecutive digits.
For example, given N = 1765, the smallest integer greater than N is 1766. However, in 1766 the last
two digits are identical. The next integer, 1767, does not contain two identical consecutive digits,
and is the smallest integer greater than 1765 that fulfils the condition. Note that the second and
fourth digits in 1767 can both be 7 as they are not consecutive.
Write a function:
function solution(N: number): number;
that, given an integer N, returns the smallest integer greater than N that does not contain two
identical consecutive digits.
Examples:
1. Given N = 55, the function should return 56. It is the smallest integer greater than 55 and it does
not contain two consecutive digits that are the same.
2. Given N = 1765, the function should return 1767, as explained above.
3. Given N = 98, the answer should be 101. Both 99 and 100 contain two identical consecutive
digits, but 101 does not.
4. Given N = 44432, the answer should be 45010.
5. Given N = 3298, the answer should be 3401.
Write an efficient algorithm for the following assumptions:
• N is an integer within the range [1.. 1,000,000,000].
Copyright 2009-2024 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibite

## Câu hỏi

- Câu 2 có phải thuật toán tham lam hay không ?
- Loại giải thuật của câu 1 và câu 3 áp dụng là gì ?

---
## Relates
Giải thuật! Interview