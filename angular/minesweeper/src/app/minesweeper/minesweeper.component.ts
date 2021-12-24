import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell.class';
import { MinesweeperService } from '../services/minesweeper.service';

@Component({
  selector: 'minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent implements OnInit {

  public difficulty: number = 0; // 0-Easy, 1-Med, 2-Hard
  public grid: Cell[][];

  public totalBombs: number;
  public flagsRemaining: number;
  public cellsRevealed: number;

  constructor(public minesweeperService: MinesweeperService) { }

  ngOnInit(): void {
    this.setupGrid()
  }

  setupGrid(): void {
    this.grid = this.minesweeperService.generateGrid(this.difficulty);
    this.cellsRevealed = 0;
    if (this.difficulty == 0) {
      this.totalBombs = this.minesweeperService.BOMBS_EASY;
      this.flagsRemaining = this.totalBombs;
    } else if (this.difficulty == 1) {
      this.totalBombs = this.minesweeperService.BOMBS_MED;
      this.flagsRemaining = this.totalBombs;
    } else if (this.difficulty == 2) {
      this.totalBombs = this.minesweeperService.BOMBS_HARD;
      this.flagsRemaining = this.totalBombs;
    }
  }

  difficultyChange() {
    // changed difficulty
    this.setupGrid()
  }

  cellClicked(i: number, j: number) {

    if (this.grid[i][j].isBomb) {
      this.lose();
    } else {
      this.revealCell(i, j);
      if (this.cellsRevealed == (this.grid.length * this.grid[0].length) - this.totalBombs) {
        //you win
        alert("you win!")
      }
    }

  }

  cellRightClicked(event, i: number, j: number) {
    event.preventDefault()
    if (!this.grid[i][j].isRevealed) {
      // cell is still hiden
      if (this.grid[i][j].flag) {
        // unflag this cell
        this.flagsRemaining++;
        // swap the actual boolean value
        this.grid[i][j].flag = !this.grid[i][j].flag;
      } else {
        // cell is not flagged
        if (this.flagsRemaining > 0) {
          // flag this cell if flags are available
          this.flagsRemaining--;
          this.grid[i][j].flag = !this.grid[i][j].flag;
        }
      }
    }
  }

  revealCell(row: number, col: number) {
    this.grid[row][col].isRevealed = true;
    this.cellsRevealed++;

    if (this.grid[row][col].flag) {
      // unflag - flag was on cell with no bomb
      this.grid[row][col].flag = false;
      this.flagsRemaining++;

    }
    if (this.grid[row][col].neighborBombs == 0) {
      //reveal all neighbors
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (i < 0 || j < 0) {
            continue;
          } else if (i >= this.grid.length || j >= this.grid[0].length) {
            continue;
          } else {
            // [i][j] is not outside the border
            if (!this.grid[i][j].isRevealed) { // && !this.grid[i][j].flag


              this.revealCell(i, j);

            }
          }
        }
      }
    }

  }


  lose() {
    // stop game
    // show you lose
    alert("You Lose! :(")
    // option to reset

    // reset
    this.setupGrid()
  }
}
