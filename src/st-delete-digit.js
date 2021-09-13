import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
    const arrDigit = n.toString().split('');
    arrDigit.splice(arrDigit.indexOf(`${Math.min(...arrDigit)}`), 1);
    return parseInt(arrDigit.join(''), 10);
  
}

