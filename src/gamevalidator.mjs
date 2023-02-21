export default class GameValidator {
  constructor() {}

  checkRow = (row, symbol, board) => {
    let col = 0;
    let previous = board[row][col].value;
    let exploredRow = col === board[row].length;
    while (!exploredRow) {
      const current = board[row][col++].value;
      const symbolStreak = previous === current && current === symbol;
      exploredRow = col === board[row].length;
      if (symbolStreak && exploredRow) {
        return true;
      } else if (!symbolStreak || exploredRow) {
        return false;
      }
      previous = current;
    }
    return false;
  };

  checkColumn = (col, symbol, board) => {
    let row = 0;
    let previous = board[row][col].value;
    let exploredColumn = row === board.length;
    while (!exploredColumn) {
      const current = board[row++][col].value;
      const symbolStreak = previous === current && current === symbol;
      exploredColumn = row === board.length;
      if (symbolStreak && exploredColumn) {
        return true;
      } else if (!symbolStreak || exploredColumn) {
        return false;
      }
      previous = current;
    }
    return false;
  };

  checkLeftDiagonal = (symbol, board) => {
    let row = 0;
    let col = 0;
    let previous = board[row][col].value;
    let exploredDiagonal = row === board.length - 1;
    while (!exploredDiagonal) {
      const current = board[++row][++col].value;
      const symbolStreak = previous === current && current === symbol;
      exploredDiagonal = row === board.length - 1;
      if (symbolStreak && exploredDiagonal) {
        return true;
      } else if (!symbolStreak || exploredDiagonal) {
        return false;
      }
      previous = current;
    }
    return false;
  };

  checkRightDiagonal = (symbol, board) => {
    let row = 0;
    let col = board.length - 1;
    let previous = board[row][col].value;
    let exploredDiagonal = col === 0;
    while (!exploredDiagonal) {
      const current = board[++row][--col].value;
      const symbolStreak = previous === current && current === symbol;
      exploredDiagonal = row === board.length - 1 && col === 0;
      if (symbolStreak && exploredDiagonal) {
        return true;
      } else if (!symbolStreak || exploredDiagonal) {
        return false;
      }
      previous = current;
    }
    return false;
  };

  isAxialWin = (row, col, symbol, board) => {
    const isRowWin = this.checkRow(row, symbol, board);
    const isColWin = this.checkColumn(col, symbol, board);
    return isRowWin || isColWin;
  };

  isDiagonalWin = (symbol, board) => {
    const isLeftDiagonalWin = this.checkLeftDiagonal(symbol, board);
    const isRightDiagonalWin = this.checkRightDiagonal(symbol, board);
    return isLeftDiagonalWin || isRightDiagonalWin;
  };

  isWin = (row, col, symbol, board) => {
    const axialWin = this.isAxialWin(row, col, symbol, board);
    const diagonalWin = this.isDiagonalWin(symbol, board);
    return axialWin || diagonalWin;
  };
}
