import { expect } from "chai";
import GameManager from "../src/gamemanager.mjs";

describe("Testing GameManager module", () => {
  const gamemanager = new GameManager();
  it("should have a default gameboard", () => {
    const gameboard = gamemanager.gameboard;
    expect(gameboard).to.not.be.undefined;
    expect(gameboard.rows).to.be.equal(3);
    expect(gameboard.cols).to.be.equal(3);
  });
});
