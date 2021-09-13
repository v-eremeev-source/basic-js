import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  if (!(arr instanceof Array)) throw new Error();
  let retValue = [];
  const discardedIdx = [];
  for (let i = 0; i < arr.length; ++i) {
      if (arr[i] == '--discard-next') {
          discardedIdx.push(++i);
      } else if (arr[i] == '--discard-prev') {
          if (retValue.length > 0 && !discardedIdx.some((x) => x === i - 1)) {
              retValue = retValue.slice(0, retValue.length - 1);
              discardedIdx.push(i - 1);
          }
      } else if (arr[i] == '--double-next') {
          if (++i < arr.length) {
              retValue.push(arr[i]);
              retValue.push(arr[i]);
          }
      } else if (arr[i] == '--double-prev') {
          if (i > 0 && !discardedIdx.some((x) => x === i - 1))
              retValue.push(arr[i - 1]);
      } else {
          retValue.push(arr[i]);
      }
  }
  return retValue;
}
