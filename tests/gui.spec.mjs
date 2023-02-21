import { expect } from "chai";
import Gui from "../src/gui.mjs";
import GameManager from "../src/gamemanager.mjs";
import { SYMBOL } from "../src/constants.mjs";

describe("Testing GUI module", () => {
  const gamemanager = new GameManager();
  const gameboard = gamemanager.gameboard;
  const board = gameboard.board;
  const rows = gameboard.rows;
  const cols = gameboard.cols;
  const gui = new Gui();
  it("should return print board message", () => {
    const result = gui.printBoard(rows, cols, board);
    expect(result).to.not.be.undefined;
  });

  it("should return print win message", () => {
    const symbol = SYMBOL.X;
    const result = gui.printWin(symbol);
    expect(result).to.not.be.undefined;
  });

  it("should return print message", () => {
    const message = " Try again ";
    const result = gui.printMessage(message);
    expect(result).to.not.be.undefined;
  });
});
