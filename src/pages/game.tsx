import React from "react";
import { GridCoupleDisplay } from "../components/grids";
import { Game } from "../game/game";
import { initVisibleGrid } from "../game/grid";

export const GamePage = ({ player1Name, player2Name }) => {
    const game = new Game([player1Name, player2Name]);

    return (
        GridCoupleDisplay({
            currentGrid: game.grids[0],
            currentVisible: initVisibleGrid(Array.from(game.grids[0].hitMap.keys())),
            ennemyGrid: game.grids[1],
            ennemyVisible: initVisibleGrid(Array.from(game.grids[1].hitMap.keys())),
        })
    );
}
