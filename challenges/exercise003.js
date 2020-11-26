function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map(n => n*n);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let first = true;
  let camelWord = "";

  for (let singleWord of words) {

    if (first) {
      // use the very first word as is
      // without any case conversion
      first = !first;
      camelWord = singleWord;
    } else {
      // convert the first letter of the
      // remaining non leading words
      camelWord += singleWord[0].toUpperCase() + singleWord.substring(1);
    }
  }

  return camelWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
