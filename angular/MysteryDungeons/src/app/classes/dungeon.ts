export class Dungeon {

    public static readonly TILE_TYPES = {
        WALL: 0,
        ROOM: 1,
        HALL: 2,
        STAIR: 3,
        TRAP: 4
    }

    width: number;
    height: number;

    spaces: number[][];

    constructor(height, width) {
        this.width = width;
        this.height = height;
        this.spaces = [];
        for(let i = 0; i < this.height; i++) {
            this.spaces.push([]);
            for(let j = 0; j < this.width; j++) {
                this.spaces[i][j] = 0;
            }
        }
    }
}
