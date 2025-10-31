import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('Fibonacci', () => {
  it('debe lanzar RangeError si n < 0', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
  });
  it('fibonacci(0) debe devolver 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  it('fibonacci(1) debe devolver 1', () => {
    expect(fibonacci(1)).toBe(1);
  });
  it('fibonacci(5) debe devolver 5', () => {
    expect(fibonacci(5)).toBe(5);
  });
});
