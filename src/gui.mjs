import chalk from "chalk";
import boxen from "boxen";

const boardOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "cyan",
};

const winOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "cyan",
};

export default class Gui {
  printBoard = (rows, cols, board) => {
    let output = "";
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        output += board[i][j].value;
        if (j >= 0 && j < cols - 1) {
          output += " | ";
        }
        if (j == cols - 1) {
          output += "\n";
        }
      }
    }
    const message = chalk.white.bold(output);
    const messageBox = boxen(message, boardOptions);
    console.log(messageBox);
    return output;
  };

  printWin = (symbol) => {
    const output = `🥇 🏆 ${symbol} won 🏆 🥇`;
    const message = chalk.white.bold(output);
    const messageBox = boxen(message, winOptions);
    console.log(messageBox);
    return output;
  };

  printMessage = (message) => {
    const output = chalk.cyan.bgWhite.bold(message);
    console.log(output);
    return output;
  };

  getMessage = (message) => {
    const output = chalk.cyan.bgWhite.bold(message);
    return output;
  };
}
