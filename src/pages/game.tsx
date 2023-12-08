import { useLocation } from "react-router-dom";
import { GridCoupleDisplay } from "../components/grids.tsx";
import { Game } from "../game/game.ts";
import { initVisibleGrid } from "../game/grid.ts";

export const GamePage = () => {
    const location = useLocation();
    const {player1, player2} = location.state.players;
    const game = new Game([player1, player2]);

    return (
        GridCoupleDisplay({
            currentGrid: game.grids[0],
            currentVisible: initVisibleGrid(Array.from(game.grids[0].hitMap.keys())),
            ennemyGrid: game.grids[1],
            ennemyVisible: initVisibleGrid(Array.from(game.grids[1].hitMap.keys())),
        })
    );
}
