import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {
  const copyArr = arr;
  let maxIndex;
  let tmp;
  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] !== -1) {
      maxIndex = i;
      for (let j = i; j < copyArr.length; j++) {
        if (copyArr[j] !== -1 && copyArr[maxIndex] > copyArr[j]) maxIndex = j;
      }
      tmp = copyArr[i];
      copyArr[i] = copyArr[maxIndex];
      copyArr[maxIndex] = tmp;
    }
  }
  return copyArr;
}
