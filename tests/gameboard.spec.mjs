import { expect } from "chai";
import { SYMBOL } from "../src/constants.mjs";
import Gameboard from "../src/gameboard.mjs";
import GameSquare from "../src/gamesquare.mjs";

describe("Testing Gameboard module", () => {
  const rows = 3;
  const cols = 3;
  const gameboard = new Gameboard(rows, cols);
  gameboard.initiazeBoard();

  it("should return 3 rows and 3 cols", () => {
    expect(gameboard.rows).to.equal(3);
    expect(gameboard.cols).to.equal(3);
  });
  it("should return 9 rows and 9 cols for initialized gameboard", () => {
    const gameboard = new Gameboard(9, 9);
    expect(gameboard.rows).to.equal(9);
    expect(gameboard.cols).to.equal(9);
  });
  it("should create a 3x3 gameboard", () => {
    expect(gameboard.board.length).to.equal(3);
    expect(gameboard.board[0].length).to.equal(3);
  });
  it("should return a '•' for ", () => {
    expect(typeof gameboard.board[0][0]).to.be.equal(typeof new GameSquare());
  });
  it("should return reset gameboard", () => {
    gameboard.onResetBoard();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const square = gameboard.board[i][j];
        expect(square.value).to.deep.equal(SYMBOL.BLANK);
      }
    }
  });
  it("should return fill empty square", () => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const square = gameboard.board[i][j];
        expect(square.value).to.deep.equal(SYMBOL.BLANK);
      }
    }
  });
  it("should return if position is valid", () => {
    const row = 2;
    const col = 1;
    const result = gameboard.isValidSquare(row, col);
    expect(result).to.equal(true);
  });
  it("should return if position is valid", () => {
    const row = 5;
    const col = 5;
    const result = gameboard.isValidSquare(row, col);
    expect(result).to.equal(false);
  });
  it("should return if square is empty", () => {
    const row = 1;
    const col = 1;
    const result = gameboard.isSquareEmpty(row, col);
    expect(result).to.equal(true);
  });
  it("should return false when a square is out of index", () => {
    const row = 5;
    const col = 5;
    const result = gameboard.isSquareEmpty(row, col);
    expect(result).to.equal(false);
  });
});
