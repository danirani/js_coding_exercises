function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {

  if (!firstName.length || !lastName.length) {
    return "";
  }

  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {

  let salesPrice = originalPrice * (1 + vatRate / 100.00);

  // round salesPrice to 2 dp using mult/divide
  // as .toFixed(2) returns a string value

  return Math.round(salesPrice * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  let salesPrice = originalPrice * (1 - reduction / 100.00);

  // round salesPrice to 2 dp using mult/divide
  // as .toFixed(2) returns a string value

  return Math.round(salesPrice * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
