import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount( s1, s2 ) {
  let count = 0;
  const arrs1 = s1.split('');
  const arrs2 = s2.split('');
  arrs1.forEach((item) => {
    if (arrs2.includes(item)) {
      count++;
      arrs2.splice(arrs2.indexOf(item), 1);
    }
  });
  return count;
}

