import { GridState } from "./grid-state.ts";
import { Coordinates } from "./coordinates.ts";
import { HitState } from "./hit-state.ts";

const GRID_SIZE = 10;

export class Grid {
  matrix!: Array<Array<GridState>>;
  hitMap!: Map<Coordinates, number>;
  boatSizes!: Array<number>;
  hitCells!: Array<Coordinates>;

  constructor() {
    this.matrix = Array.from({length: GRID_SIZE}, () => 
      Array.from({ length: GRID_SIZE}, () => GridState.Water)
    );
    this.hitMap = new Map();
    this.boatSizes = new Array();
    this.hitCells = new Array();
  }

  addBoat(coordinates: Array<Coordinates>): boolean {
    const result = coordinates.every((coord) => {
      const { row, col } = coord;
      return (
        row >= 0 &&
        row < GRID_SIZE &&
        col >= 0 &&
        col < GRID_SIZE &&
        this.matrix[row][col] === GridState.Water
      );
    });

    if (result) {
      coordinates.forEach((coord) => {
        this.matrix[coord.row][coord.col] = GridState.Boat;
        this.hitMap.set(coord, coordinates.length);
      });
      this.boatSizes.push(coordinates.length);
    }

    return result;
  }

  hitCell(coordinates: Coordinates): HitState {
    if (this.hitMap.has(coordinates)) {
      return HitState.Invalid;
    }

    this.hitCells.push(coordinates);
    const boatId = this.hitMap.get(coordinates);

    if (boatId === undefined) {
      return HitState.Miss;
    }

    return --this.boatSizes[boatId] === 0
      ? this.boatSizes.every((size) => size === 0)
        ? HitState.Win
        : HitState.Sunk
      : HitState.Hit;
  }
}
