import React, { useEffect } from 'react';
import { Grid } from '@mui/material';


import { Game } from '../game/game.ts';
import { GridState } from '../game/grid-state.ts';
import { Grid as GridGame, isValidCoordonates } from '../game/grid.ts';
import { Coordinates } from '../game/coordinates.ts';
import { Cell } from './cell.tsx';
import { computeStyles } from '@popperjs/core/index';
import { Button } from '@mui/base';

// TODO: refactor: exist in another file
const range = (start: number, end: number): Array<number> => {
    return Array.from({ length: end - start }, (_, index) => start + index);
}

export const InitBoatsGrid = (game: Game) => {
    const [grid, setGrid] = React.useState<GridGame>(game.grids[game.currentPlayer]);
    const [direction, setDirection] = React.useState<'horizontal' | 'vertical'>('horizontal');
    // const grid = game.grids[game.currentPlayer];
    const rows = range(0, grid.matrix.length);
    const columns = range(0, grid.matrix[0].length);
    const [currentBoat, setCurrentBoat] = React.useState<number>(0);

    useEffect(() => {
        }, [direction]);

    // TODO: handle both directions
    const onClickFunc = (row: number, column: number) => {
        console.log('Current player', game.currentPlayer);
        const boatSize = game.BOAT_SIZES[currentBoat];
        const boatsCoordinates = direction === 'vertical' ?
            Array.from({ length: boatSize }, (_, idx) => new Coordinates(row + idx, column)) :
            Array.from({ length: boatSize }, (_, idx) => new Coordinates(row, column + idx));

        const areBoatsCoordinatesValid = boatsCoordinates.every((coord) => {
            return isValidCoordonates(coord) && 
                grid.matrix[coord.row][coord.col] === GridState.Water;
        });

        // TODO: write that the boat is valid or not
        if (areBoatsCoordinatesValid) {
            boatsCoordinates.forEach((coord) => {
                grid.matrix[coord.row][coord.col] = GridState.Boat;
                setGrid(grid)
            });
            setCurrentBoat(currentBoat + 1);

            if (currentBoat === game.BOAT_SIZES.length - 1) {
                game.nextPlayer();
                setGrid(game.grids[game.currentPlayer]);
                setCurrentBoat(game.BOAT_SIZES);
            }
            // debugger;
        }
    }

    const onClickDirection = () => 
        setDirection(direction === 'horizontal' ? 'vertical' : 'horizontal');

    return (
        <>
        <Button onClick={onClickDirection}>
                {direction}
        </Button>

        <Grid container>
            {rows.map((column) => (
                <Grid item key={column} >
                    {columns.map((row) => (
                        <Cell key={`${row} ${column}`} cellType={grid.matrix[row][column]} onClick={() => onClickFunc(row, column)}></Cell>

                        // <div  key={`${row} ${column}`} onClick={() => onClickFunc(row, column)}style={{
                        //     border: '1px solid #000',
                        //     // height: '100%', // Make each item a square by setting the height and width to the same value
                        //     // width: '100%',
                        //     //
                        //     width: '50px',
                        //     height: '50px',
                        //     backgroundColor: 'lightblue', // Set the background color
                        //     display: 'flex',
                        //     justifyContent: 'center',
                        //     alignItems: 'center',
                        // }}>
                        // </div>
                    ))}
                </Grid>
            ))}
        </Grid>
        </>
    );
}
