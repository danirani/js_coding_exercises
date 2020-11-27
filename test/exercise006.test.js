const {
  sumMultiples,
  isValidDNA
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