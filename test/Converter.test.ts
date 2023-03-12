import { Converter } from "../src/Converter";

describe("UnitConverter", () => {
  let converter: Converter;

  beforeEach(() => {
    converter = new Converter();
  });

  test("converts square feet to square meters", () => {
    const result = converter.convert(100, "Square Feet", "Square Meter");
    expect(result).toBeCloseTo(9.29, 2);
  });
});
