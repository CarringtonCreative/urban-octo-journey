import { expect } from "chai";
import { SYMBOL } from "../src/constants.mjs";
import Gameboard from "../src/gameboard.mjs";
import GameValidator from "../src/gamevalidator.mjs";
import Player from "../src/player.mjs";

describe("Testing game condition validation", () => {
  const game = new Gameboard();
  const validator = new GameValidator();
  const player = new Player();
  const computer = new Player("CPU", SYMBOL.Y, 0, 0);
  it("should return false for row win condition", () => {
    const row = 0;
    game.initialize();
    const result = validator.checkRow(row, player.symbol, game.board);
    expect(result.isRowWin).to.equal(false);
  });
  it("should return true for row win condition", () => {
    game.initialize();
    const row = 0;
    game.board[row][0].value = player.symbol;
    game.board[row][1].value = player.symbol;
    game.board[row][2].value = player.symbol;
    const result = validator.checkRow(row, player.symbol, game.board);
    expect(result.isRowWin).to.equal(true);
  });
  it("should return false for col win condition", () => {
    const col = 0;
    game.initialize();
    const result = validator.checkColumn(col, player.symbol, game.board);
    expect(result.isColWin).to.equal(false);
  });
  it("should return true for col win condition", () => {
    game.initialize();
    const col = 0;
    game.board[0][col].value = player.symbol;
    game.board[1][col].value = player.symbol;
    game.board[2][col].value = player.symbol;
    const result = validator.checkColumn(col, player.symbol, game.board);
    expect(result.isColWin).to.equal(true);
  });
  it("should return true for axial win condition", () => {
    game.initialize();
    const row = 0;
    const col = 0;
    game.board[0][col].value = player.symbol;
    game.board[1][col].value = player.symbol;
    game.board[2][col].value = player.symbol;
    const result = validator.isAxialWin(row, col, player.symbol, game.board);
    expect(result).to.equal(true);
  });
  it("should return false for left diagonal win condition", () => {
    game.initialize();
    const result = validator.checkLeftDiagonal(player.symbol, game.board);
    expect(result.isLeftDiagonalWin).to.equal(false);
  });
  it("should return true for left diagonal win condition", () => {
    game.initialize();
    game.board[0][0].value = player.symbol;
    game.board[1][1].value = player.symbol;
    game.board[2][2].value = player.symbol;
    const result = validator.checkLeftDiagonal(player.symbol, game.board);
    expect(result.isLeftDiagonalWin).to.equal(true);
  });
  it("should return false for right diagonal win condition", () => {
    game.initialize();
    const result = validator.checkRightDiagonal(player.symbol, game.board);
    expect(result.isRightDiagonalWin).to.equal(false);
  });
  it("should return true for right diagonal win condition", () => {
    game.initialize();
    game.board[0][2].value = player.symbol;
    game.board[1][1].value = player.symbol;
    game.board[2][0].value = player.symbol;
    const result = validator.checkRightDiagonal(player.symbol, game.board);
    expect(result.isRightDiagonalWin).to.equal(true);
  });
  it("should return true for diagonal win condition", () => {
    game.initialize();
    game.board[0][2].value = player.symbol;
    game.board[1][1].value = player.symbol;
    game.board[2][0].value = player.symbol;
    const result = validator.isDiagonalWin(player.symbol, game.board);
    expect(result).to.equal(true);
  });
  it("should return true win condition", () => {
    game.initialize();
    const row = 0;
    const col = 0;
    game.board[0][0].value = player.symbol;
    game.board[0][1].value = player.symbol;
    game.board[0][2].value = player.symbol;
    const result = validator.isWin(row, col, player.symbol, game.board);
    expect(result).to.equal(true);
  });
});
