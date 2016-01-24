/* eslint-disable no-console */

// https://fivethirtyeight.com/features/night-falls-a-storm-rolls-in-can-you-cross-the-river/

function isOdd(number) {
  return number % 2;
}
function isEven(number) {
  return !isOdd(number);
}
function bridgeBroken() {
  return Math.random() < 0.5;
}
function isWater(row, column) {
  return isEven(row) && isOdd(column);
}
function isIsland(row, column) {
  return isOdd(row) && isEven(column);
}

class Grid {
  constructor({ rows, columns }) {
    this.rows = rows * 2 + 1;
    this.columns = columns * 2 - 1;
    let row = 0;
    this.path = [];
    while (row < this.rows) {
      this.path[row] = [];
      let column = 0;
      while (column < this.columns) {
        let marker = null;
        if (isIsland(row, column)) {
          marker = 'X';
        } else if (isWater(row, column)) {
          marker = 'w';
        } else if (bridgeBroken()) {
          marker = 'w';
        } else {
          marker = '|';
        }
        this.path[row][column] = marker;
        column++;
      }
      row++;
    }
  }
}

const grid = new Grid({ rows: 2, columns: 3 });
console.log(grid.path);
