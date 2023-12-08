import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { InitBoatsGrid } from "../components/init-boats-grid.tsx";
import { Game } from "../game/game.ts";
import { GridCoupleDisplay } from "../components/grids.tsx";
import { GRID_SIZE, initVisibleGrid } from "../game/grid.ts";
import { Coordinates } from "../game/coordinates.ts";

export const GamePage = () => {
    const location = useLocation();
    const {player1, player2} = location.state.players;
    const [game, _] = React.useState<Game>(() => new Game([player1, player2]));
    const [boardsAreInitialized, setBoardsAreInitialized] = React.useState<boolean>(false);

    return (
        <>
            {
                !boardsAreInitialized ? 
                <InitBoatsGrid game={game} boardsAreInitialized={boardsAreInitialized} setBoardsAreInitialized={setBoardsAreInitialized} />
                : 
                <GridCoupleDisplay 
                    currentGrid={game.grids[0]} 
                    currentVisible={initVisibleGrid(Array.from({ length: GRID_SIZE * GRID_SIZE}, (_, idx) => new Coordinates(idx % GRID_SIZE, Math.floor(idx / GRID_SIZE))))} 
                    ennemyGrid={game.grids[1]} 
                    ennemyVisible={initVisibleGrid(Array.from(game.grids[1].hitMap.keys()))}
                    currentPlayerName={game.players[game.currentPlayer]}
                    otherPlayerName={game.players[game.currentPlayer + 1 % 2]} />
            }
        </>
    );

}
