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

  attack(pos) {
    const [r, c] = pos;
    if (this.grid[r][c] === 'S') {
      this.grid[r][c] = 'H';
      console.log('You sunk my battleship!');
      return true;
    } else {
      this.grid[r][c] = 'XH';
      console.log('Miss!');
      return false;
    }
  }

  placeRandomShips() {
    let ct = Math.floor(this.size * 0.25);
    let shipCt = 0;

    while (shipCt < ct) {
      const row = Math.floor(Math.random() * this.grid.length);
      const col = Math.floor(Math.random() * this.grid.length);
      if (this.grid[row][col] !== 'S') {
        this.grid[row][col] = 'S';
        shipCt++;
      }
    }
  }

  hiddenShipsGrid() {
    let grid = [];
    let n = this.grid.length;
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        if (this.grid[i][j] === 'S') {
          row.push('N');
        } else {
          row.push(this.grid[i][j]);
        }
      }
      grid.push(row);
    }
    return grid;
  }

  printGrid(grid) {
    let n = grid.length;
    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j < n; j++) {
        row += grid[i][j] + ' ';
      }
      console.log(row);
    }
  }
}

class Player {
  getMove() {
    const input = prompt(
      'enter a position with coordinates separated with a space like `4 7`'
    );
    const [r, c] = input.split(' ');
    // console.log([r, c]);
  }
}

let board = new Board(6);
console.log(JSON.stringify(board));
// board.grid[2][4] = 'S';
console.log(board.size);
// board.setElementAtPosition([2, 4], 'S');
// console.log(board.getElementAtPosition([2, 4]));
// console.log(board.getElementAtPosition([0, 0]));
// board.setElementAtPosition([5, 1], 'X');
// console.log(board.getElementAtPosition([5, 1]));
// board.setElementAtPosition([1, 1], 'S');
console.log(JSON.stringify(board));
console.log(board.placeRandomShips());
console.log(board.numShips());
console.log(board.hiddenShipsGrid());
board.printGrid(board.hiddenShipsGrid());
board.printGrid(board.grid);
const player = new Player();
player.getMove();
