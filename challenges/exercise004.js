function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let smallArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallArray.push(nums[i]);
    }
  }

  return smallArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let namesArray = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === char) {
      namesArray.push(names[i]);
    }
  }

  return namesArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  let verbsArray = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].substr(0, 3) === "to ") {
      verbsArray.push(words[i]);
    }
  }

  return verbsArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let intArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === Math.trunc(nums[i])) {
      intArray.push(nums[i]);
    }
  }

  return intArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  let cityArray = [];

  for (let i = 0; i < users.length; i++) {
    cityArray.push(users[i].data.city.displayName);
  }

  return cityArray;
}

function getSquareRoots(nums) {

  let rootsArray = [];

  for (let i = 0; i < nums.length; i++) {
    rootsArray.push(Math.round(Math.sqrt(nums[i]) * 100.0) / 100);
  }

  return rootsArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let rootsArray = [];

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().indexOf(str.toLowerCase()) !== -1) {
      rootsArray.push(sentences[i]);
    }
  }

  return rootsArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let longestArray = [];

  for (let i = 0; i < triangles.length; i++) {
    longestArray.push(Math.max(...triangles[i]));
  }

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
