import Gameboard from "./gameboard.mjs";
import readline from "readline";

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default class GameManager {
  state;
  board;
  constructor() {
    this.board = new Gameboard();
  }

  run = () => {};

  onUserInputSymbol = () => {
    reader.question("Enter a key for your player symbol", (symbol) => {
      console.log(`You entered ${symbol}!`);
    });
    reader.close();
  };

  onCloseUserInput = () => {
    reader.close();
  };
}
