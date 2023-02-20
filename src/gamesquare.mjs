import { SYMBOL } from "./constants.mjs";

export default class GameSquare {
  column;
  row;
  value;

  constructor(row, column, value) {
    this.row = row || 0;
    this.column = column || 0;
    this.value = value || SYMBOL.BLANK;
  }
}
