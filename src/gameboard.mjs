import { COLOR, SYMBOL } from "./constants.mjs";
import GameSquare from "./gamesquare.mjs";

export default class Gameboard {
  rows;
  cols;
  board;
  constructor(rows = 3, cols = 3) {
    this.rows = rows;
    this.cols = cols;
  }

  initiazeBoard = () => {
    this.board = [];
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.cols; j++) {
        let gamesquare = new GameSquare(i, j, SYMBOL.BLANK, COLOR.WHITE);
        this.board[i][j] = gamesquare;
      }
    }
  };
}
