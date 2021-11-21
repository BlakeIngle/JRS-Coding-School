import { Injectable } from '@angular/core';
import { Dungeon } from '../classes/dungeon';

@Injectable({
  providedIn: 'root'
})
export class DungeonGeneratorService {

  constructor() { }

  private cullDungeon(dungeon: Dungeon) {
    // trim the edges off of the dungeon

    let firstRow = 0,
      firstCol = 0,
      lastRow = dungeon.height - 1,
      lastCol = dungeon.width - 1;

    rowLoop: for (let i = 0; i < dungeon.height; i++) {
      for (let j = 0; j < dungeon.width; j++) {
        if (dungeon.spaces[i][j] != Dungeon.TILE_TYPES.WALL) {
          firstRow = i;
          break rowLoop;
        }
      }
    }
    rowReverseLoop: for (let i = dungeon.height - 1; i >= 0; i--) {
      for (let j = 0; j < dungeon.width; j++) {
        if (dungeon.spaces[i][j] != Dungeon.TILE_TYPES.WALL) {
          lastRow = i;
          break rowReverseLoop;
        }
      }
    }
    colLoop: for (let j = 0; j < dungeon.width; j++) {
      for (let i = 0; i < dungeon.height; i++) {
        if (dungeon.spaces[i][j] != Dungeon.TILE_TYPES.WALL) {
          firstCol = j;
          break colLoop;
        }
      }
    }
    colReverseLoop: for (let j = dungeon.width - 1; j >= 0; j--) {
      for (let i = 0; i < dungeon.height; i++) {
        if (dungeon.spaces[i][j] != Dungeon.TILE_TYPES.WALL) {
          lastCol = j;
          break colReverseLoop;
        }
      }
    }

    let culledDungeon = []
    for (let i = firstRow; i <= lastRow; i++) {
      culledDungeon.push([])
    }
    for (let i = firstRow; i <= lastRow; i++) {
      for (let j = firstCol; j <= lastCol; j++) {
        culledDungeon[i - firstRow][j - firstCol] = dungeon.spaces[i][j];
      }
    }

    dungeon.spaces = culledDungeon;
  }

  private fillDungeon(dungeon: Dungeon) {
    // set a stairs
    // set traps
    
  }

  public drunkardDungeon(dungeon: Dungeon, drunkards: number, steps: number, cull?: true) {
    /**
     *  [0, 1, 2, 3, 4, 5],
     *  [0, 1, 2, 3, 4, 5],
     *  [0, 1, 2, 3, 4, 5]
     * 
     * width = 6
     * height = 3
     * spaces[2,5] -> bottom right
     */

    steps = Math.floor(steps)
    drunkards = Math.floor(drunkards);

    let firstDrunk = {
      x: Math.floor(dungeon.width / 2),
      y: Math.floor(dungeon.height / 2)
    }

    this.drunkardWalk(firstDrunk, dungeon, steps);

    for (let i = 1; i < drunkards; i++) {
      let x: number = Math.floor(Math.random() * dungeon.width);
      let y: number = Math.floor(Math.random() * dungeon.height);

      if (dungeon.spaces[y][x] == Dungeon.TILE_TYPES.WALL) {
        i--;
        continue;
      }
      this.drunkardWalk({ x: x, y: y }, dungeon, steps)
    }

    if (cull) {
      this.cullDungeon(dungeon);
    }
    this.fillDungeon(dungeon);
  }

  private drunkardWalk(drunk: { x: number, y: number }, dungeon: Dungeon, steps: number) {
    for (let i = 0; i < steps; i++) {
      dungeon.spaces[drunk.y][drunk.x] = Dungeon.TILE_TYPES.ROOM;
      let dir = Math.random();
      if (dir < 0.25) {
        if (drunk.x > 0) {
          drunk.x--;
        } else {
          drunk.x++;
        }
      } else if (dir < 0.5) {
        if (drunk.x < dungeon.width - 1) {
          drunk.x++;
        } else {
          drunk.x--;
        }
      } else if (dir < 0.75) {
        if (drunk.y > 0) {
          drunk.y--;
        } else {
          drunk.y++;
        }
      } else {
        if (drunk.y < dungeon.height - 1) {
          drunk.y++;
        } else {
          drunk.y--;
        }
      }
    }
  }

  public drunkardBiasedDungeon(dungeon: Dungeon, drunkards: number, steps: number, cull?: true) {
    /**
     * [0, 1, 2, 3, 4, 5],
     * [0, 1, 2, 3, 4, 5],
     * [0, 1, 2, 3, 4, 5]
     * width = 6
     * height = 3
     * spaces[2,5] -> bottom right
     * */

    steps = Math.floor(steps)
    drunkards = Math.floor(drunkards);

    let center = {
      x: Math.floor(dungeon.width / 2),
      y: Math.floor(dungeon.height / 2)
    }
    this.drunkardWalkBiased({ x: center.x, y: center.y }, dungeon, steps, 0)

    for (let i = 1; i < drunkards; i++) {
      let x = Math.floor(Math.random() * dungeon.width);
      let y = Math.floor(Math.random() * dungeon.height);
      if (dungeon.spaces[y][x] == Dungeon.TILE_TYPES.WALL) {
        //invalid space
        i--;
        continue;
      }
      this.drunkardWalkBiased({ x: x, y: y }, dungeon, steps, i % 4)
    }

    if (cull) {
      this.cullDungeon(dungeon);
    }
    this.fillDungeon(dungeon);
  }

  private drunkardWalkBiased(drunk: { x: number, y: number }, dungeon: Dungeon, steps: number, startingDirection: number) {

    let dir = startingDirection; // 0, 1, 2, 3 -> N, E, S, W -> y--, x++, y++, x--

    for (let i = 0; i < steps; i++) {
      dungeon.spaces[drunk.y][drunk.x] = Dungeon.TILE_TYPES.ROOM;
      let move = Math.random();
      if (move < 0.3) {
        move = 0; // do not turn
      } else if (move < 0.6) {
        move = 1; // turn right
      } else if (move < 0.9) {
        move = 3; // turn left
      } else {
        move = 2; // 10% chance to turn around
      }
      dir = (dir + move) % 4;

      if (dir == 3) {
        if (drunk.x > 0) {
          drunk.x--;
        } else {
          drunk.x++;
          dir += 2;
        }
      } else if (dir == 1) {
        if (drunk.x < dungeon.width - 1) {
          drunk.x++;
        } else {
          drunk.x--;
          dir += 2;
        }
      } else if (dir == 0) {
        if (drunk.y > 0) {
          drunk.y--;
        } else {
          drunk.y++;
          dir += 2;
        }
      } else {
        if (drunk.y < dungeon.height - 1) {
          drunk.y++;
        } else {
          drunk.y--;
          dir += 2;
        }
      }
    }
  }

  public diffusionLimitedAggregationDungeon(dungeon: Dungeon, cull?: true) {
    let shots = dungeon.width * 20;
    // generate base area -> + shape area maybe
    // pick a random point on the map
    // 'shoot' in a random direction
    // carve out the last spot that is passed through
    let center = {
      x: Math.floor(dungeon.width / 2),
      y: Math.floor(dungeon.height / 2)
    }

    if (dungeon.width > 2 && dungeon.height > 2) {
      dungeon.spaces[center.y][center.x] = Dungeon.TILE_TYPES.ROOM;
      dungeon.spaces[center.y + 1][center.x + 1] = Dungeon.TILE_TYPES.ROOM;
      dungeon.spaces[center.y + 1][center.x - 1] = Dungeon.TILE_TYPES.ROOM;
      dungeon.spaces[center.y - 1][center.x + 1] = Dungeon.TILE_TYPES.ROOM;
      dungeon.spaces[center.y - 1][center.x - 1] = Dungeon.TILE_TYPES.ROOM;
      // plus shape 'carved out'
    }

    for (let i = 0; i < shots; i++) {
      let x = Math.floor(Math.random() * dungeon.width);
      let y = Math.floor(Math.random() * dungeon.height);
      let dir = Math.floor(Math.random() * 4) // one of 4 possible directions

      // 'shoot' a particle
      let lastRoom = { x: -1, y: -1 } // -1 -> not found
      while (x < dungeon.width && x >= 0 && y < dungeon.height && y >= 0) {
        if (dungeon.spaces[y][x] == Dungeon.TILE_TYPES.ROOM) {
          lastRoom.x = x;
          lastRoom.y = y;
        }

        switch (dir) {
          case 0:
            //U
            y--;
            break;
          case 1:
            //R
            x++;
            break;
          case 2:
            //D
            y++;
            break;
          case 3:
            //L
            x--;
            break;
          default:
            break;
        }
      }

      if (lastRoom.y == -1 || lastRoom.x == -1) {
        i--;
        continue;
      }
      // find next open space based off last room
      switch (dir) {
        case 0:
          //U
          lastRoom.y--;
          break;
        case 1:
          //R
          lastRoom.x++;
          break;
        case 2:
          //D
          lastRoom.y++;
          break;
        case 3:
          //L
          lastRoom.x--;
          break;
        default:
          break;
      }

      if (lastRoom.x < dungeon.width && lastRoom.x >= 0 && lastRoom.y < dungeon.height && lastRoom.y >= 0) {
        dungeon.spaces[lastRoom.y][lastRoom.x] = Dungeon.TILE_TYPES.ROOM;
      }
    }

    if (cull) {
      this.cullDungeon(dungeon);
    }
    this.fillDungeon(dungeon);
  }

  public diffusionLimitedAggregationDungeon8Way(dungeon: Dungeon, cull?: true) {
    let shots = (Math.pow(dungeon.width, 2) / 2);
    // generate base area -> + shape area maybe
    // pick a random point on the map
    // 'shoot' in a random direction
    // carve out the last spot that is passed through
    let center = {
      x: Math.floor(dungeon.width / 2),
      y: Math.floor(dungeon.height / 2)
    }

    if (dungeon.width > 2 && dungeon.height > 2) {
      dungeon.spaces[center.y][center.x] = Dungeon.TILE_TYPES.ROOM;
      dungeon.spaces[center.y + 1][center.x + 1] = Dungeon.TILE_TYPES.ROOM;
      dungeon.spaces[center.y + 1][center.x - 1] = Dungeon.TILE_TYPES.ROOM;
      dungeon.spaces[center.y - 1][center.x + 1] = Dungeon.TILE_TYPES.ROOM;
      dungeon.spaces[center.y - 1][center.x - 1] = Dungeon.TILE_TYPES.ROOM;
      // plus shape 'carved out'
    }

    for (let i = 0; i < shots; i++) {
      let x = Math.floor(Math.random() * dungeon.width);
      let y = Math.floor(Math.random() * dungeon.height);
      let dir = Math.floor(Math.random() * 8) // one of 8 possible directions

      let xChange = 0;
      let yChange = 0;

      switch (dir) {
        case 0:
          //U
          yChange = -1;
          break;
        case 1:
          //UR
          yChange = -1;
          xChange = 1;
          break;
        case 2:
          //R
          xChange = 1;
          break;
        case 3:
          //DR
          yChange = 1;
          xChange = 1;
          break;
        case 4:
          //D
          yChange = 1;
          break;
        case 5:
          //DL
          yChange = 1;
          xChange = -1;
          break;
        case 6:
          //L
          xChange = -1;
          break;
        case 7:
          //UL
          yChange = -1;
          xChange = -1;
          break;
        default:
          break;
      }

      // 'shoot' a particle
      let lastRoom = { x: -1, y: -1 } // -1 -> not found
      while (x < dungeon.width && x >= 0 && y < dungeon.height && y >= 0) {
        if (dungeon.spaces[y][x] == Dungeon.TILE_TYPES.ROOM) {
          lastRoom.x = x;
          lastRoom.y = y;
        }
        x += xChange;
        y += yChange;
      }

      if (lastRoom.y == -1 || lastRoom.x == -1) {
        i--;
        continue;
      }

      if (lastRoom.x + xChange >= dungeon.width || lastRoom.x + xChange < 0 || lastRoom.y + yChange >= dungeon.height || lastRoom.y + yChange < 0) {
        i--;
        continue;
      }

      // find next open space based off last room
      if (dir % 2 == 0) {
        // 0 2 4 6 -> U R D L
        lastRoom.x += xChange;
        lastRoom.y += yChange;
      } else {
        if (dungeon.spaces[lastRoom.y + yChange][lastRoom.x] != Dungeon.TILE_TYPES.ROOM && dungeon.spaces[lastRoom.y + yChange][lastRoom.x] != Dungeon.TILE_TYPES.ROOM) {
          // last room next U R D or L are not rooms yet
          // fill one of them instead of the cardinal
          if (Math.random() < 0.5) {
            // 50% chance y direction
            lastRoom.y += yChange;
          } else {
            // 50% chance x direction
            lastRoom.x += xChange;
          }
        }
      }

      if (lastRoom.x < dungeon.width && lastRoom.x >= 0 && lastRoom.y < dungeon.height && lastRoom.y >= 0) {
        dungeon.spaces[lastRoom.y][lastRoom.x] = Dungeon.TILE_TYPES.ROOM;
      }
    }

    if (cull) {
      this.cullDungeon(dungeon);
    }
    this.fillDungeon(dungeon);
  }

  public centralAttractorDungeon(dungeon: Dungeon, cull?: true) {
    //TODO
  }

  public centralAttractorMirrorDungeon(dungeon: Dungeon, cull?: true) {
    //TODO
  }
}
