import { expect } from "chai";
import { SYMBOL } from "../src/constants.mjs";
import Player from "../src/player.mjs";

describe("Testing Player module", () => {
  it("should return 'x' for instance's symbol", () => {
    const player = new Player();
    expect(player.symbol).to.equal(SYMBOL.X);
  });
  it("should return '🏀' for instance's symbol", () => {
    const player = new Player("Jon", "🏀");
    expect(player.symbol).to.equal("🏀");
  });
  it("should return '🏀' for instance's symbol", () => {
    const player = new Player("Jon", "🏀", 3, 0);
    expect(player.name).to.equal("Jon");
    expect(player.symbol).to.equal("🏀");
    expect(player.wins).to.equal(3);
    expect(player.loses).to.equal(0);
  });
});
