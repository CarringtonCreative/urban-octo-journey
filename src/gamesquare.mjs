import { SYMBOL, COLOR } from "./constants.mjs";

export default class GameSquare {
  hexColor;
  column;
  row;
  value;

  constructor(row, column, value, hexColor) {
    this.row = row || 0;
    this.column = column || 0;
    this.hexColor = hexColor || COLOR.WHITE;
    this.value = value || SYMBOL.BLANK;
  }
}
