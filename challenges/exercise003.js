function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map(n => n * n);
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

  // accumulate the length of the subject array in total

  return people.reduce((total, people) => total + people.subjects.length, 0);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let count = 0;

  for (let meal of menu) {
    if (meal.ingredients.includes(ingredient)) {
      count++;
    }
  }

  return count > 0;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  // add to an array any numbers in arr2 that match those in arr1
  let matchArray = arr1.filter(member => arr2.includes(member));

  // create a set which by definition can only store distinct values;
  // sort the distinct values after converting the set back to
  // an array.

  return Array.from(new Set(matchArray)).sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
