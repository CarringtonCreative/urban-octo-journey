import readline from "readline";
import Gui from "./gui.mjs";
import Gameboard from "./gameboard.mjs";
import GameState from "./gamestate.mjs";
import GameValidator from "./gamevalidator.mjs";
import { SYMBOL } from "./constants.mjs";

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gui = new Gui();

const prompts = [`\t It's ${SYMBOL.X} turn \n`, `\t It's ${SYMBOL.Y} turn \n`];

export default class GameManager {
  state;
  gameboard;
  validator;
  constructor() {
    this.state = new GameState();
    this.gameboard = new Gameboard();
    this.validator = new GameValidator();
    this.gameboard.initialize();
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
    this.prompt();
    const message = gui.getMessage(prompts[this.state.turn]);
    reader.question(message, (input) => {
      if (String(input).toLowerCase() === "exit") return reader.close();
      if (!input || input < "1" || input > "9") {
        this.prompt();
        this.run();
      } else {
        input = Number(input);
        let [row, col] = this.transposePosition(input);
        let symbol = this.state.getPlayerSymbol();
        let result = this.gameboard.onFillSquare(row, col, symbol);
        if (result) {
          const board = this.gameboard.board;
          const rows = this.gameboard.rows;
          const cols = this.gameboard.cols;
          const isWin = this.validator.isWin(row, col, symbol, board);
          if (isWin) {
            gui.printWin(symbol);
            gui.printBoard(rows, cols, board);
            return reader.close();
          }
          gui.printBoard(rows, cols, board);
          this.state.onUpdateTurn();
        }
        this.run();
      }
    });
  };

  prompt = () => {
    const message = "\t Select a valid square (1-9) ";
    gui.printMessage(message);
  };
}
