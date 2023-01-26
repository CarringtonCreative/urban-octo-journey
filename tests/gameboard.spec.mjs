import { expect } from "chai";
import { SYMBOL } from "../src/constants.mjs";
import Gameboard from "../src/gameboard.mjs";
import GameSquare from "../src/gamesquare.mjs";

describe("Testing Gameboard module", () => {
  it("should return 3 rows and 3 cols", () => {
    const gameboard = new Gameboard();
    expect(gameboard.rows).to.equal(3);
    expect(gameboard.cols).to.equal(3);
  });
  it("should return 9 rows and 9 cols for initialized gameboard", () => {
    const gameboard = new Gameboard(9, 9);
    expect(gameboard.rows).to.equal(9);
    expect(gameboard.cols).to.equal(9);
  });
  it("should create a 3x3 gameboard", () => {
    const gameboard = new Gameboard(3, 3);
    gameboard.initiazeBoard();
    expect(gameboard.board.length).to.equal(3);
    expect(gameboard.board[0].length).to.equal(3);
  });
  it("should return a '•' for ", () => {
    const gameboard = new Gameboard(3, 3);
    gameboard.initiazeBoard();
    expect(typeof gameboard.board[0][0]).to.be.equal(typeof new GameSquare());
  });
});
