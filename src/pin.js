// src/pin.js
export const esPinValido = (pin) =>
  typeof pin === 'string' &&                // debe ser string
  (pin.length === 4 || pin.length === 6) && // longitud 4 o 6
  /^\d+$/.test(pin) &&                      // solo dígitos
  !/^(\d)\1+$/.test(pin);                   // no todos los dígitos iguales
