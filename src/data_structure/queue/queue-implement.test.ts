import { describe, it, expect, beforeEach } from 'bun:test';
import { Queue } from './queue-implement';

describe('Queue', () => {
    let queue: Queue;

    beforeEach(() => {
        queue = new Queue();
    });

    it('should initialize an empty queue', () => {
        expect(queue.isEmpty()).toBe(true);
        expect(queue.peek()).toBeNull();
    });

    it('should enqueue elements to the queue', () => {
        queue.enqueue('first');
        expect(queue.isEmpty()).toBe(false);
        expect(queue.peek().value).toBe('first');

        queue.enqueue('second');
        expect(queue.peek().value).toBe('first'); // First element should still be 'first'
    });

    it('should dequeue elements from the queue', () => {
        queue.enqueue('first');
        queue.enqueue('second');

        const dequeued = queue.dequeue();
        expect(dequeued.value).toBe('first'); // First element should be dequeued
        expect(queue.peek().value).toBe('second'); // Now the first element should be 'second'
    });

    it('should return null when dequeuing from an empty queue', () => {
        expect(queue.dequeue()).toBeNull();
    });

    it('should handle special case when dequeuing the last element', () => {
        queue.enqueue('only');
        expect(queue.dequeue().value).toBe('only');
        expect(queue.isEmpty()).toBe(true);
        expect(queue.peek()).toBeNull();
    });
});