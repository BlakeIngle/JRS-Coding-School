export class Cell {
    public isBomb?: boolean;
    public isRevealed?: boolean;
    public neighborBombs?: number;
    public flag?: boolean;

    constructor() {
        this.isBomb = false;
        this.isRevealed = false;
        this.neighborBombs = 0;
        this.flag = false;
    }
}