import { Injectable } from '@angular/core';
import { Cell } from '../cell.class';


@Injectable({
  providedIn: 'root'
})
export class MinesweeperService {

  readonly ROW_EASY: number = 8;
  readonly COL_EASY: number = 10;

  readonly ROW_MED: number = 14;
  readonly COL_MED: number = 18;

  readonly ROW_HARD: number = 20;
  readonly COL_HARD: number = 24;

  readonly BOMBS_EASY: number = 10;
  readonly BOMBS_MED: number = 14;
  readonly BOMBS_HARD: number = 99;

  constructor() { }

  generateGrid(difficulty: number): Cell[][] {
    var rows: number = 0;
    var columns: number = 0;

    if (difficulty == 0) { // easy
      rows = this.ROW_EASY;
      columns = this.COL_EASY;
    } else if (difficulty == 1) { // medium
      rows = this.ROW_MED;
      columns = this.COL_MED;
    } else if (difficulty == 2) { // hard
      rows = this.ROW_HARD;
      columns = this.COL_HARD;
    }

    let grid: Cell[][] = [];

    for (let i = 0; i < rows; i++) {
      grid.push([]);
      for (let j = 0; j < columns; j++) {
        grid[i].push(new Cell());
      }
    }

    this.populateBombs(grid, difficulty);
    this.generateNumbers(grid);

    return grid;
  }

  /**
   * Populates a grid with some number of bombs. The total number of 
   * bombs in the grid is determined by the difficulty of the game.
   * @param grid the grid to generate bombs into
   * @param difficulty the difficulty of the game. Determines the number of bombs
   */
  private populateBombs(grid: Cell[][], difficulty) {
    let numBombs: number;
    if (difficulty == 0) {
      numBombs = this.BOMBS_EASY;
    } else if (difficulty == 1) {
      numBombs = this.BOMBS_MED;
    } else if (difficulty == 2) {
      numBombs = this.BOMBS_HARD;
    }

    for (let i = 0; i < numBombs; i++) {
      let j = this.randomBetween(0, grid.length - 1);
      let k = this.randomBetween(0, grid[0].length - 1);

      if (grid[j][k].isBomb) {
        i--;
      } else {
        grid[j][k].isBomb = true;
      }
    }
  }

  /**
   * Generates the correct number of neighboring bombs
   * for each cell.
   * @param grid the playing grid with bombs in it
   */
  private generateNumbers(grid: Cell[][]) {
    for (let row in grid) {
      for (let col in grid[row]) {
        if (grid[row][col].isBomb) {
          // add 1 to all neighbors
          this.addOneToNeighbors(grid, Number(row), Number(col));
        }
      }
    }
  }

  private addOneToNeighbors(grid: Cell[][], row: number, col: number) {
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        // 
        if (i < 0 || j < 0) {
          continue;
        } else if (i >= grid.length || j >= grid[0].length) {
          continue;
        } else {
          // [i][j] is not outside the border
          grid[i][j].neighborBombs++;
        }
      }
    }
  }

  /**
   * Returns a random integer between two boundaries (inclusive)
   * @param a lower bound
   * @param b upper bound
   * @returns a random integer between a and b (inclusive)
   */
  private randomBetween(a, b) {
    return Math.floor(Math.random() * (Math.max(a, b) + 1 - Math.min(a, b))) + Math.min(a, b)
  }
}
