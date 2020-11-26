function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const busLimit = 40;
  let fractionalCount = people / busLimit;
  let integralCount = Math.floor(people / busLimit);

  if (fractionalCount === integralCount) {
    // everyone fits perfectly in a whole
    // number buses with no spaces - super!

    return integralCount;
  }

  // after fully filling `integralCount` busses,
  // we still need an extra one for the remaining
  // people - not good!

  return integralCount + 1;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
