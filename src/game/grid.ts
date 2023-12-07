import { GridState } from './GridState';

const GRID_SIZE = 10; 

export class Grid {
    matrix!: Array<Array<GridState>>

    constructor() {
        this.matrix = new Array(GRID_SIZE)
            .fill(new Array(GRID_SIZE).fill(GridState.Water));
    }

    addBoatTiles(coodordates: Array<[x: number, y: number]>) {
        coodordates.forEach(([x, y]) => this.matrix[x][y] = GridState.Boat);
    }
}
