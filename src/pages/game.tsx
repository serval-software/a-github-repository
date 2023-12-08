import { useLocation } from "react-router-dom";
import { GridCoupleDisplay } from "../components/grids.tsx";
import { InitBoatsGrid } from "../components/init-boats-grid.tsx";
import { Game } from "../game/game.ts";
import { initVisibleGrid, GRID_SIZE } from "../game/grid.ts";
import { Coordinates } from "../game/coordinates.ts";

export const GamePage = () => {
    const location = useLocation();
    const {player1, player2} = location.state.players;
    const game = new Game([player1, player2]);

    return (
        InitBoatsGrid(game)
    )
    // return(
    //  GridCoupleDisplay({
    //     currentGrid: game.grids[0],
    //     currentVisible: initVisibleGrid(Array.from({ length: GRID_SIZE * GRID_SIZE}, (_, idx) => new Coordinates(idx % GRID_SIZE, Math.floor(idx / GRID_SIZE)))),
    //     ennemyGrid: game.grids[1],
    //     ennemyVisible: initVisibleGrid(Array.from(game.grids[1].hitMap.keys())),
    // })
    // );
}
