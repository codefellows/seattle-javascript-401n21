const balancedBrackets = require("./brackets");

describe("Balanced Brackets", () => {
  it.each([
    "{}",
    "{}(){}",
    "()[[Extra Characters]]",
    "(){}[[]]",
    "{}{Code}[Fellows]",
  ])("%s is balanced", (str) => {
    expect(balancedBrackets(str)).toBe(true);
  });

  it.each(["{", ")", "[}", "[({}]", "(](", "{(})"])(
    "%s is not balanced",
    (str) => {
      expect(balancedBrackets(str)).toBe(false);
    }
  );
});
