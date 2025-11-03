import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
  it('debe devolver false si es null o undefined', () => {
    expect(esPinValido(null)).toBe(false);
    expect(esPinValido(undefined)).toBe(false);
  });

  it('debe devolver false si está vacío', () => {
    expect(esPinValido('')).toBe(false);
  });

  it('debe devolver false si la longitud no es 4 ni 6', () => {
    expect(esPinValido('123')).toBe(false);
    expect(esPinValido('12345')).toBe(false);
  });

  it('debe devolver false si contiene letras o símbolos', () => {
    expect(esPinValido('12a4')).toBe(false);
    expect(esPinValido('!234')).toBe(false);
  });

  it('debe devolver false si todos los dígitos son iguales', () => {
    expect(esPinValido('1111')).toBe(false);
    expect(esPinValido('888888')).toBe(false);
  });

  it('debe devolver true para PIN válido', () => {
    expect(esPinValido('1234')).toBe(true);
    expect(esPinValido('123456')).toBe(true);
  });
});