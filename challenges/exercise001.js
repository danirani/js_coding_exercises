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

  let len = str.length;
  let middleIndex = Math.floor(str.length / 2) - 1;

  if (!(len % 2)) {
    // even length - return the middle two characters
    return str[middleIndex] + str[middleIndex + 1];
  }

  // odd length - return the single middle character

  return str[middleIndex + 1];
}

function reverseWord(word) {

  return word.split("").reverse().join("");
}

function reverseAllWords(words) {

  let newWordArray = [];

  words.forEach(x => newWordArray.push(reverseWord(x)));

  return newWordArray;
}

function countLinuxUsers(users) {

  let count = 0;

  for (let u of users) {
    if (u.type === "Linux") {
      count++;
    }
  }

  return count
}

function getMeanScore(scores) {

  const sum = arr => arr.reduce((a, b) => a + b, 0);

  if (!scores.length) {
    return -1;
  }

  let average = sum(scores) / scores.length;

  return Math.round(average * 100.0) / 100.0;
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
