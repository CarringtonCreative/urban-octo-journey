import Gameboard from "./gameboard.mjs";

export default class GameManager {
  state;
  board;
  constructor() {
    this.board = new Gameboard();
  }

  run = () => {};
}
