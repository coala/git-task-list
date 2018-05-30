/* eslint-disable import/prefer-default-export */
export function isIterable(obj) {
  // checks for null and undefined, string is iterable, but, we almost never
  // iterate through string.
  if (obj == null || typeof obj === 'string') {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}
