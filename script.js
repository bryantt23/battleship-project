class Board {
  constructor(n) {
    this.grid = this.setGrid(n);
  }

  get size() {
    return this.grid.length * this.grid[0].length;
  }

  setGrid(n) {
    let grid = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push('N');
      }
      grid.push(row);
    }
    return grid;
  }

  getElementAtPosition(position) {
    return this.grid[position[0]][position[1]];
  }

  setElementAtPosition(position, value) {
    this.grid[position[0]][position[1]] = value;
  }

  // https://stackoverflow.com/questions/61228757/counting-occurrences-in-multidimensional-array
  numShips() {
    const freqCounts = this.grid.reduce((acc, arr) => {
      console.log(arr);
      for (const item of arr) {
        acc[item] = acc[item] !== undefined ? acc[item] + 1 : 1;
      }
      return acc;
    }, {});
    console.log(freqCounts);
    return freqCounts['S'];
  }
}

let board = new Board(10);
console.log(JSON.stringify(board));
board.grid[2][4] = 'S';
console.log(board.size);
board.setElementAtPosition([2, 4], 'S');
console.log(board.getElementAtPosition([2, 4]));
console.log(board.getElementAtPosition([0, 0]));
board.setElementAtPosition([5, 1], 'X');
console.log(board.getElementAtPosition([5, 1]));
board.setElementAtPosition([1, 1], 'S');
console.log(JSON.stringify(board));
console.log(board.numShips());
