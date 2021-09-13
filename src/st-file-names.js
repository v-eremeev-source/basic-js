import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles( names ) {
  let resultArray = names;
  for (let i = 0; i < names.length; i++) {
    const repeatsArray = resultArray.filter((item) => item === names[i]);
    for (let j = 1; j < repeatsArray.length; j++) {
      repeatsArray[j] += `(${j})`;
    }
    let repeats = 0;
    for (let k = 0; k < names.length; k++) {
      if (resultArray[k] === names[i]) {
        resultArray[k] = repeatsArray[repeats];
        repeats++;
      }
    }
  }
  return resultArray;
}
