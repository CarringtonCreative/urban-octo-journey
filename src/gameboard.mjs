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

  onResetBoard = () => {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.board[i][j].value = SYMBOL.BLANK;
      }
    }
  };

  isValidSquare = (row, col) => {
    if (row < 0 || row >= this.rows) return false;
    if (col < 0 || col >= this.cols) return false;
    return true;
  };

  isSquareEmpty = (row, col) => {
    const isValid = this.isValidSquare(row, col);
    if (!isValid) return isValid;
    return this.board[row][col].value === SYMBOL.BLANK;
  };
}
