function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(value => value < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter(name => name[0] === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  return words.filter(word => word.substr(0, 3) === "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(value => value === Math.trunc(value));
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  return users.map(user => user.data.city.displayName);
}

function getSquareRoots(nums) {

  return nums.map(n => Math.round(Math.sqrt(n) * 100.0) / 100);
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter(line => line.toLowerCase().indexOf(str.toLowerCase()) !== -1);
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  return triangles.map(triples => Math.max(...triples));
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
