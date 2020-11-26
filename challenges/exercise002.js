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

  let sheepCount = 0;

  for (let animal of arr) {
    if (animal === "sheep") {
      sheepCount++;
    }
  }

  return sheepCount;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  // remove all spaces from the postcode, so that the test
  // for the second character in the postcode is valid.

  let noSpaceCode = person.address.postCode.split(' ').join('');

  console.log(noSpaceCode, " , ", noSpaceCode[1], " , ", isNumeric(noSpaceCode[1]));
  // mark as a true Manchester postcode only if the
  // second character in the code is a digit.

  return noSpaceCode[0] === 'M' && isNumeric(noSpaceCode[1]);
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
