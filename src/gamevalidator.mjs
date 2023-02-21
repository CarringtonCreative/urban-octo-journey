export default class GameValidator {
  constructor() {}

  checkRow = (row, symbol, board) => {
    let col = 0;
    let previous = board[row][col].value;
    let exploredRow = col === board[row].length;
    const rowData = [[row, col]];
    while (!exploredRow) {
      const current = board[row][col++].value;
      const symbolStreak = previous === current && current === symbol;
      exploredRow = col === board[row].length;
      if (symbolStreak && exploredRow) {
        return { isRowWin: true, rowData };
      } else if (!symbolStreak || exploredRow) {
        return { isRowWin: false, rowData: [] };
      }
      rowData.push([row, col]);
      previous = current;
    }
    return { isRowWin: false, rowData: [] };
  };

  checkColumn = (col, symbol, board) => {
    let row = 0;
    let previous = board[row][col].value;
    let exploredColumn = row === board.length;
    const columnData = [[row, col]];
    while (!exploredColumn) {
      const current = board[row++][col].value;
      const symbolStreak = previous === current && current === symbol;
      exploredColumn = row === board.length;
      if (symbolStreak && exploredColumn) {
        return { isColWin: true, columnData };
      } else if (!symbolStreak || exploredColumn) {
        return { isColWin: false, columnData: [] };
      }
      columnData.push([row, col]);
      previous = current;
    }
    return { isColWin: false, columnData: [] };
  };

  checkLeftDiagonal = (symbol, board) => {
    let row = 0;
    let col = 0;
    let previous = board[row][col].value;
    let exploredDiagonal = row === board.length - 1;
    const leftDiagonalData = [[row, col]];
    while (!exploredDiagonal) {
      const current = board[++row][++col].value;
      const symbolStreak = previous === current && current === symbol;
      exploredDiagonal = row === board.length - 1;
      leftDiagonalData.push([row, col]);
      if (symbolStreak && exploredDiagonal) {
        return { isLeftDiagonalWin: true, leftDiagonalData };
      } else if (!symbolStreak || exploredDiagonal) {
        return { isLeftDiagonalWin: false, leftDiagonalData: [] };
      }
      leftDiagonalData.push([row, col]);
      previous = current;
    }
    return { isLeftDiagonalWin: false, leftDiagonalData: [] };
  };

  checkRightDiagonal = (symbol, board) => {
    let row = 0;
    let col = board.length - 1;
    let previous = board[row][col].value;
    let exploredDiagonal = col === 0;
    const rightDiagonalData = [[row, col]];
    while (!exploredDiagonal) {
      const current = board[++row][--col].value;
      const symbolStreak = previous === current && current === symbol;
      exploredDiagonal = row === board.length - 1 && col === 0;
      if (symbolStreak && exploredDiagonal) {
        return { isRightDiagonalWin: true, rightDiagonalData };
      } else if (!symbolStreak || exploredDiagonal) {
        return { isRightDiagonalWin: false, rightDiagonalData: [] };
      }
      rightDiagonalData.push([row, col]);
      previous = current;
    }
    return { isRightDiagonalWin: false, rightDiagonalData: [] };
  };

  isAxialWin = (row, col, symbol, board) => {
    const { isRowWin, rowData } = this.checkRow(row, symbol, board);
    const { isColWin, columnData } = this.checkColumn(col, symbol, board);
    return isRowWin || isColWin;
  };

  isDiagonalWin = (symbol, board) => {
    const { isLeftDiagonalWin, leftDiagonalData } = this.checkLeftDiagonal(
      symbol,
      board
    );
    const { isRightDiagonalWin, rightDiagonalData } = this.checkRightDiagonal(
      symbol,
      board
    );
    return isLeftDiagonalWin || isRightDiagonalWin;
  };

  isWin = (row, col, symbol, board) => {
    const axialWin = this.isAxialWin(row, col, symbol, board);
    const diagonalWin = this.isDiagonalWin(symbol, board);
    return axialWin || diagonalWin;
  };
}
