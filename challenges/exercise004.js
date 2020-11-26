function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let smallArray = [];

  nums.forEach(n => {
    if (n < 1) {
      smallArray.push(n);
    }
  });

  return smallArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let namesArray = [];

  names.forEach(n => {
    if (n[0] === char) {
      namesArray.push(n);
    }
  });

  return namesArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  let verbsArray = [];

  words.forEach(w => {
    if (w.substr(0, 3) === "to ") {
      verbsArray.push(w);
    }
  });

  return verbsArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let intArray = [];

  nums.forEach(n => {
    if (n === Math.trunc(n)) {
      intArray.push(n);
    }
  });

  return intArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  let cityArray = [];

  users.forEach(c => {
    cityArray.push(c.data.city.displayName);
  });

  return cityArray;
}

function getSquareRoots(nums) {

  let rootsArray = [];

  nums.forEach(n => {
    if (n === Math.trunc(n)) {
      rootsArray.push(Math.round(Math.sqrt(n) * 100.0) / 100);
    }
  });

  return rootsArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let senArray = [];

  sentences.forEach(s => {
    if (s.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
      senArray.push(s);
    }
  });

  return senArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let longestArray = [];

  triangles.forEach(t => {
    longestArray.push(Math.max(...t));
  });

  return longestArray;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
