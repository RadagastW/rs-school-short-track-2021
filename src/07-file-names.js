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
function renameFiles(names) {
  const arrNames = names;
  const map = new Map();
  const result = [];

  arrNames.forEach((item) => {
    if (map.has(item)) map.set(item, map.get(item) + 1);
    else map.set(item, 0);
  });

  /* for (const item of map.keys()) {
    if (map.has(item.slice(0, -3)) && map.get(value.slice(0, -3)) > 1) {
      map.set(item, map.get(item) + 1);
    }
  } */

  map.forEach((key, value) => {
    if (map.has(value.slice(0, -3)) && map.get(value.slice(0, -3)) > 1) {
      map.set(value, map.get(value) + 1);
    }
  });

  arrNames.reverse();

  arrNames.forEach((item) => {
    if (map.get(item) > 0) result.push(`${item}(${map.get(item)})`);
    else result.push(item);
    map.set(item, map.get(item) - 1);
  });

  return result.reverse();
}

module.exports = renameFiles;
