import readline from "readline";
import Gameboard from "./gameboard.mjs";
import GameState from "./gamestate.mjs";
import { SYMBOL } from "./constants.mjs";

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompts = [
  `${SYMBOL.X}'s turn ... select a square (1-9)\n`,
  `${SYMBOL.Y}'s turn ... select a square (1-9)\n`,
];

export default class GameManager {
  state;
  board;
  constructor() {
    this.state = new GameState();
    this.board = new Gameboard();
    this.board.initiaze();
  }

  transposePosition = (num) => {
    switch (num) {
      case 1:
        return [0, 0];
      case 2:
        return [0, 1];
      case 3:
        return [0, 2];
      case 4:
        return [1, 0];
      case 5:
        return [1, 1];
      case 6:
        return [1, 2];
      case 7:
        return [2, 0];
      case 8:
        return [2, 1];
      case 9:
        return [2, 2];
      default:
        return [0, 0];
    }
  };

  run = () => {
    const prompt = prompts[this.state.turn];
    reader.question(prompt, (input) => {
      if (String(input).toLowerCase() === "exit") return reader.close();
      if (!input || input < "1" || input > "9") {
        this.run();
      } else {
        input = Number(input);
        let symbol = this.state.getPlayerSymbol();
        let pos = this.transposePosition(input);
        let result = this.board.onFillSquare(pos[0], pos[1], symbol);
        if (result) {
          this.board.onPrint();
          this.state.onUpdateTurn();
        }
        this.run();
      }
    });
  };
}
