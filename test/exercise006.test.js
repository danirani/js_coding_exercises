const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("find 3 and 5 multiples in list and return their sum", () => {
    expect(sumMultiples([5, 7, 2, 8, 3, 19])).toBe(8);
    expect(sumMultiples([37, 17, 33, 15, 25, 50,])).toBe(123);
    expect(sumMultiples([30, 15, 5, 10, 29, 57,])).toBe(117);
  });

  test("test for edge cases, no multiples and duplicates", () => {
    expect(sumMultiples([1, 17, 2, 8, 34, 19])).toBe(0);
    expect(sumMultiples([5, 5, 5, 3, 3, 3])).toBe(24);
    expect(sumMultiples([])).toBe(0);
  });

  test("check throw errors", () => {
    // throw errors require an expect() wrapper
    expect(() => { sumMultiples(17); }).toThrowError('not an object');
    expect(() => { sumMultiples(undefined); }).toThrowError('is undefined');
  });
});

describe("isValidDNA", () => {
  test("test for only characters CGTA in a DNA string", () => {
    expect(isValidDNA("AGCTCCTAG")).toBe(true);
    expect(isValidDNA("ZAGTCCTAG")).toBe(false);
    expect(isValidDNA("AGCTCCT G")).toBe(false);
    expect(isValidDNA("AAAAATT")).toBe(true);
    expect(isValidDNA("AAAAATTX")).toBe(false);
  });

  test("check throw errors", () => {
    expect(() => { isValidDNA(undefined); }).toThrowError('is undefined');
    expect(() => { isValidDNA(99); }).toThrowError('not a string');
  });
});

describe("getComplementaryDNA", () => {
  test("test DNA pairings T<->A, C<->G", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("TACG")).toBe("ATGC");
    expect(getComplementaryDNA("CAGT")).toBe("GTCA");
  });

  test("test for invalid DNA strings", () => {
    expect(() => { getComplementaryDNA("ACTZ"); }).toThrowError('not valid DNA');
    expect(() => { getComplementaryDNA("PCTG"); }).toThrowError('not valid DNA');
  });

  test("check throw errors", () => {
    expect(() => { getComplementaryDNA(undefined); }).toThrowError('is undefined');
    expect(() => { getComplementaryDNA(99); }).toThrowError('not a string');
  });
});

describe("isItPrime", () => {
  test("pass a single number and test if it is prime", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(101)).toBe(true);
    expect(isItPrime(10)).toBe(false);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(149)).toBe(true);
    expect(isItPrime(52)).toBe(false);
    expect(isItPrime(1)).toBe(false);
  });

  test("pass a full list of primes and test that they are all true", () => {
    const primeList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
      103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197,
      199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311,
      313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431,
      433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557,
      563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661,
      673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809];

    primeList.forEach(n => expect(isItPrime(n)).toBe(true));
  });

  test("pass a full list of non-primes and test that they are all false", () => {
    const nonPrimeList = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21]
    nonPrimeList.forEach(n => expect(isItPrime(n)).toBe(false));
  });

  test("check throw errors", () => {
    expect(() => { isItPrime(undefined); }).toThrowError('undefined');
    expect(() => { isItPrime("Prime"); }).toThrowError('not a number');
  });
});

describe("createMatrix", () => {
  test("pass a matrix dimension number with a fill and check sizing", () => {

    expect(createMatrix(4, 'none')).toEqual(
      [
        ['none', 'none', 'none', 'none'],
        ['none', 'none', 'none', 'none'],
        ['none', 'none', 'none', 'none'],
        ['none', 'none', 'none', 'none']
      ]
    );

    expect(createMatrix(2, 7)).toEqual(
      [
        [7, 7],
        [7, 7]
      ]
    );

    expect(createMatrix(1, 6)).toEqual([[6]]);

    expect(createMatrix(1, 'All Alone')).toEqual(
      [
        ['All Alone']
      ]
    );
  });


  test("pass erroneous matrix dimension number and fills and test for throw errors", () => {
    expect(() => { createMatrix(undefined, undefined); }).toThrowError('n is required');
    expect(() => { createMatrix(); }).toThrowError('n is required');
    expect(() => { createMatrix(1,undefined); }).toThrowError('fill is required');
  });

});

describe("areWeCovered", () => {

  test("test days of the week when there are at least three staff working", () => {

    const staffSchedule = [
      {name: "Sally", rota: ["Monday", "Tuesday", "Wednesday", "Friday"]},
      {name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]},
      {name: "Lizzie", rota: ["Saturday", "Sunday", "Tuesday", "Friday"]},
      {name: "Tony", rota: ["Saturday", "Monday", "Wednesday", "Friday"]},
    ]

    expect(areWeCovered(staffSchedule, "Monday")).toBe(false);

    const shortDays = ["Monday", "Sunday", "Thursday"];
    const coveredDays = ["Saturday", "Tuesday", "Wednesday", "Friday"];

    shortDays.forEach(day => expect(areWeCovered(staffSchedule, day)).toBe(false));
    coveredDays.forEach(day => expect(areWeCovered(staffSchedule, day)).toBe(true));

    const staffSchedule2 = [
      {name: "Mike", rota: ["Saturday", "Sunday"]},
      {name: "Karen", rota: ["Saturday", "Sunday"]},
      {name: "Boss", rota: ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]},
      {name: "TBA", rota: []},
    ]

    const shortDays2 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const coveredDays2 = ["Saturday", "Sunday"];

    shortDays2.forEach(day => expect(areWeCovered(staffSchedule2, day)).toBe(false));
    coveredDays2.forEach(day => expect(areWeCovered(staffSchedule2, day)).toBe(true));

  });

  test("check throw errors", () => {
    expect(() => { areWeCovered([],undefined); }).toThrowError('day is required');
    expect(() => { areWeCovered(undefined,"Monday"); }).toThrowError('staff is required');
  });

});

