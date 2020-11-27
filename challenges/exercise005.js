const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let nextValue = null;

  nums.forEach((value, index, array) => {
    if (value === n && nextValue === null && index < array.length - 1) {
      nextValue = array[index + 1];
    }
  });

  return nextValue;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  // defined the initial state of the counter
  // object so that the key order matches expected
  // test ordering i.e. not subject to which ever bit
  // appears first in the binary string.

  let countObject = {1: 0, 0: 0};

  str.split("").forEach((value) => countObject[value]++)

  return countObject;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  let reverseStr = "";

  n.toString().split("").forEach(c => reverseStr = c + reverseStr);

  // parseInt will remove any leading digits
  return parseInt(reverseStr);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.flat().reduce((a, b) => a + b)
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
