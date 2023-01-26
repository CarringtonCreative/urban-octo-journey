import { expect } from "chai";
import { COLOR, SYMBOL } from "../src/constants.mjs";
import Gamesquare from "../src/gamesquare.mjs";

describe("Testing Gamesquare module", () => {
  it("should return default gamesquare", () => {
    const gamesquare = new Gamesquare();
    expect(gamesquare.row).to.equal(0);
    expect(gamesquare.column).to.equal(0);
    expect(gamesquare.hexColor).to.equal(COLOR.WHITE);
    expect(gamesquare.value).to.equal(SYMBOL.BLANK);
  });
  it("should return default gamesquare 0, 0", () => {
    const gamesquare = new Gamesquare();
    expect(gamesquare.row).to.equal(0);
    expect(gamesquare.column).to.equal(0);
  });
  it("should return initialized gamesquare 1, 3", () => {
    const gamesquare = new Gamesquare(1, 3);
    expect(gamesquare.row).to.equal(1);
    expect(gamesquare.column).to.equal(3);
  });
});
