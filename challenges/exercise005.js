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

  return arr.map((value, index, array) =>
    index === 0 ? array[array.length - 1] :
      index === array.length - 1 ? array[0] : value);
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  return Object.keys(haystack)
      .filter(value => haystack[value]    // filter through all key properties
      .toString()                         // numeric values are converted to strings
      .toLowerCase()                      // remove case sensitivity in both the object text & search text
      .includes(searchTerm.toLowerCase()) // return true if the search text matches
      )
      .length > 0;                        // if filter returns any text then the search
                                          // string was present in at least one of the fields.
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  const punctuation = '!"#$%&\'()*+,-./:;?@[\\]^_`{|}~';

  const counter = {};

  str.split(" ").forEach( value =>
  {
      // use filter on each keyword to remove any punctuation
      let key=value.split('').filter( keyLetter => punctuation.indexOf(keyLetter) < 0)

      // join keyword back up without punctuation or capitalization
      key=key.join("").toLowerCase();

      if(key.length > 0) {

        // do not allow empty keys if all punctuation has been removed

        if(counter[key] === undefined) {
          // create a new keyword count
          counter[key] = 1;
        }
        else {
          // add to an existing keyword count
          counter[key]++;
        }
      }
  });

  return counter;
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
