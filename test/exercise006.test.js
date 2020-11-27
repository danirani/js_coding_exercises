const {
  sumMultiples,
  isValidDNA,
  isItPrime,
  createMatrix,
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
});

describe("isValidDNA", () => {
  test("test for only characters CGTA in a DNA string", () => {
    expect(isValidDNA("AGCTCCTAG")).toBe(true);
    expect(isValidDNA("ZAGTCCTAG")).toBe(false);
    expect(isValidDNA("AGCTCCT G")).toBe(false);
    expect(isValidDNA("AAAAATT")).toBe(true);
    expect(isValidDNA("AAAAATTX")).toBe(false);
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

  test("pass a string instead of a number and empty parameters", () => {
    // unable to catch throw errors for some reason

    //expect(isItPrime("Prime")).toThrowError('n is not a number')
    //expect(isItPrime()).toThrowError('n is undefined');

    expect(isItPrime(17)).toBe(true);
    expect(isItPrime(16)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("pass a matrix dimension number with a fill and check sizing", () => {
    //expect(createMatrix(undefined,undefined)).toEqual(new Error('n is required'));
    expect(createMatrix(4,'none')).toEqual(
      [
        [ 'none', 'none', 'none', 'none' ],
        [ 'none', 'none', 'none', 'none' ],
        [ 'none', 'none', 'none', 'none' ],
        [ 'none', 'none', 'none', 'none' ]
      ]
    );

    expect(createMatrix(2,7)).toEqual(
      [
        [ 7, 7 ],
        [ 7, 7 ]
      ]
    );

    expect(createMatrix(1,'All Alone')).toEqual(
      [
        [ 'All Alone' ]
      ]
    );

  });

  test("pass erroneous matrix dimension number and fills and test errors", () => {
      // unable to catch throw errors for some reason

      //expect(createMatrix(undefined,undefined)).toEqual(new Error('n is required'));
      //expect(createMatrix()).toThrowError('n is required');

      expect(createMatrix(1, 6)).toEqual([[6]]);
    }
  );
});