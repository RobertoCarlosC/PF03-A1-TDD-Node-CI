import { test } from "vitest";

// src/pin.js
export function esPinValido(pin) {
  if (!pin || typeof pin !== 'string') return false;
  if (!/^\d+$/.test(pin)) return false;
  if (pin.length !== 4 && pin.length !== 6) return false;
  if (/^(\d)\1+$/.test(pin)) return false; // todos los dígitos iguales
  return true;
}
