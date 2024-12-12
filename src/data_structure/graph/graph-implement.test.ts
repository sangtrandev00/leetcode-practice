import { describe, it, expect, beforeEach, afterEach } from 'bun:test';
import { Graph } from './graph-implement';

describe('Graph', () => {
    let graph: Graph;

    beforeEach(() => {
        graph = new Graph();
    });

    it('should add a new vertex to the graph', () => {
        graph.addVertex('A');
        expect(graph.adjacentList['A']).toBeDefined();
        expect(graph.numberOfNodes).toBe(1);
    });

    it('should not increase nodes count when adding duplicate vertex', () => {
        graph.addVertex('A');
        graph.addVertex('A');
        expect(graph.numberOfNodes).toBe(1);
    });

    it('should create an empty array for the new vertex', () => {
        graph.addVertex('A');
        expect(graph.adjacentList['A']).toEqual([]);
    });

    it('should add an edge between two existing vertices', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.adjacentList['A']).toContain('B');
        expect(graph.adjacentList['B']).toContain('A');
    });

    it('should not add edge if vertices do not exist', () => {
        graph.addEdge('A', 'C');
        expect(graph.adjacentList['A']).toBeUndefined();
    });

    it('should create undirected connections', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.adjacentList['A']).toContain('B');
        expect(graph.adjacentList['B']).toContain('A');
    });

    it('should handle multiple edges for a vertex', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');

        expect(graph.adjacentList['A']).toContain('B');
        expect(graph.adjacentList['A']).toContain('C');
        expect(graph.adjacentList['B']).toContain('A');
        expect(graph.adjacentList['B']).toContain('D');
    });

    it('should maintain correct node count', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        expect(graph.numberOfNodes).toBe(4);
    });

    it('should handle adding edges to non-existent vertices silently', () => {
        graph.addEdge('X', 'Y');
        expect(graph.adjacentList['X']).toBeUndefined();
        expect(graph.adjacentList['Y']).toBeUndefined();
    });

    it('should capture console output for showConnections', () => {
        // Capture console output
        const originalConsoleLog = console.log;
        const logs: string[] = [];

        console.log = (message: string) => {
            logs.push(message);
        };

        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        graph.showConnections();

        // Restore original console.log
        console.log = originalConsoleLog;

        expect(logs.length).toBeGreaterThan(0);
        expect(logs[0]).toContain('A-->');
        expect(logs[0]).toContain('B');
    });

    it('should initialize with zero nodes', () => {
        expect(graph.numberOfNodes).toBe(0);
    });

    it('should initialize with an empty adjacent list', () => {
        expect(Object.keys(graph.adjacentList).length).toBe(0);
    });

    it('should not add duplicate edges', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addEdge('A', 'B');
        graph.addEdge('B', 'A'); // Duplicate
        graph.addEdge('A', 'C');
        graph.addEdge('C', 'A'); // Duplicate
        graph.addEdge('B', 'D');

        expect(graph.adjacentList['A']).toContain('B');
        expect(graph.adjacentList['A']).toContain('C');
        expect(graph.adjacentList['B']).toContain('A');
        expect(graph.adjacentList['B']).toContain('D');

        const lengthA = graph.adjacentList['A'].length;
        const lengthB = graph.adjacentList['B'].length;
        const lengthC = graph.adjacentList['C'].length;
        const lengthD = graph.adjacentList['D'].length;
        expect(lengthA).toBe(2);
        expect(lengthB).toBe(2);
        expect(lengthC).toBe(1);
        expect(lengthD).toBe(1);
    });
});