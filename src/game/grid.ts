import { GridState } from './GridState';
import { Boat } from './boat';
import { Coordinates } from './coordinates';

const GRID_SIZE = 10; 

export class Grid {
    matrix!: Array<Array<GridState>>
    hitMap: Array<[coordinates: Coordinates, boatId: number]> = [];

    constructor() {
        this.matrix = new Array(GRID_SIZE)
            .fill(new Array(GRID_SIZE).fill(GridState.Water));
    }

    addBoatTiles(coodordates: Array<[x: number, y: number]>) {
        coodordates.forEach(([x, y]) => this.matrix[x][y] = GridState.Boat);
    }
}
