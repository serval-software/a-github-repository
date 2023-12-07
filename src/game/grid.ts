import { GridState } from './GridState';
import { Coordinates } from './coordinates';
import { HitState } from './hit-state';

const GRID_SIZE = 10; 

export class Grid {
    matrix!: Array<Array<GridState>>
    hitMap!: Map<Coordinates, number>
    boatSizes!: Array<number>
    hitCells!: Array<Coordinates>

    constructor() {
        this.matrix = new Array(GRID_SIZE)
            .fill(new Array(GRID_SIZE).fill(GridState.Water));
        this.hitMap = new Map();
        this.boatSizes = new Array();
        this.hitCells = new Array();
    }

    addBoat(coordinates: Array<Coordinates>) {
        coordinates.forEach(coord => {
            this.matrix[coord.row][coord.col] = GridState.Boat;
            this.hitMap.set(coord, coordinates.length);
        });
        this.boatSizes.push(coordinates.length);
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

        return --this.boatSizes[boatId] === 0 ? HitState.Sunk : HitState.Hit;
    }
}
