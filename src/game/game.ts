import { Coordinates } from "./coordinates.ts";
import { Grid } from "./grid.ts";

export class Game {
    players: Array<string>;
    grids: Array<Grid>;
    currentPlayer: number;
    readonly BOAT_SIZES = [5, 4, 3, 3, 2];

    constructor(players: Array<string>) {
        this.players = players;
        this.grids = players.map(() => new Grid());
        this.currentPlayer = Math.floor(Math.random() * players.length);
    }

    initBoat(currentPlayer: number, currentBoat: number, coordinates: Array<Coordinates>): boolean {
        return coordinates.length === this.BOAT_SIZES[currentBoat] && this.grids[currentPlayer].addBoat(coordinates);
    }
}