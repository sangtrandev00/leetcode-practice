import { describe, it, expect, beforeEach } from 'bun:test';
import { Stack } from './stack-implement'; // Adjust the import based on your file structure

describe('Stack', () => {
    let stack: Stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('should initialize an empty stack', () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.peek()).toBeNull();
    });

    it('should push elements onto the stack', () => {
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.peek().value).toBe(1); // Check the top value

        stack.push(3);
        expect(stack.peek().value).toBe(3); // Top value should now be 3

        stack.push(100);
        expect(stack.peek().value).toBe(100); // Top value should now be 100

        stack.push(3000);
        expect(stack.peek().value).toBe(3000); // Top value should now be 3000
    });

    it('should pop elements from the stack', () => {
        stack.push(1);
        stack.push(3);
        stack.push(100);

        const popped = stack.pop();
        expect(popped.value).toBe(100); // Last pushed value should be popped
        expect(stack.peek().value).toBe(3); // Now the top value should be 3

        stack.pop(); // Pop 3
        expect(stack.peek().value).toBe(1); // Now the top value should be 1

        stack.pop(); // Pop 1
        expect(stack.isEmpty()).toBe(true); // Stack should be empty now
        expect(stack.peek()).toBeNull(); // Peek should return null
    });

    it('should return null when popping from an empty stack', () => {
        expect(stack.pop()).toBeNull(); // Popping from an empty stack should return null
    });

    it('should handle special case when popping the last element', () => {
        stack.push(42);
        expect(stack.pop().value).toBe(42); // Pop the only element
        expect(stack.isEmpty()).toBe(true); // Stack should be empty now
        expect(stack.peek()).toBeNull(); // Peek should return null
    });
});