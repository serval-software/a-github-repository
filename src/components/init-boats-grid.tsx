import React from 'react';
import { Grid } from '@mui/material';


import { Game } from '../game/game.ts';
import { GridState } from '../game/grid-state.ts';
import { isValidCoordonates } from '../game/grid.ts';
import { Coordinates } from '../game/coordinates.ts';

// TODO: refactor: exist in another file
const range = (start: number, end: number): Array<number> => {
    return Array.from({ length: end - start }, (_, index) => start + index);
}

export const InitBoatsGrid = (game: Game) => {
    const grid = game.grids[game.currentPlayer];
    const rows = range(0, grid.matrix.length);
    const columns = range(0, grid.matrix[0].length);
    const [currentBoat, setCurrentBoat] = React.useState<number>(0);

    // TODO: handle both directions
    const onClickFunc = (row: number, column: number) => {
        // debugger;
        const boatSize = game.BOAT_SIZES[currentBoat];
        const boatsCoordinates = Array.from({ length: boatSize }, (_, idx) =>
            new Coordinates(row + idx, column));

        console.log(boatsCoordinates);
        const areBoatsCoordinatesValid = boatsCoordinates.every((coord) => {
            return isValidCoordonates(coord) && grid.matrix[coord.row][coord.col] === GridState.Water;
        });

        // TODO: write that the boat is valid or not
        if (areBoatsCoordinatesValid) {
            boatsCoordinates.forEach((coord) => {
                grid.matrix[coord.row][coord.col] = GridState.Boat;
            });
            setCurrentBoat(currentBoat + 1);
            console.log('boat is valid');
        } else {
            console.log('boat is not valid');
        }
    }

    return (
        <Grid container>
            {rows.map((column) => (
                <Grid item key={column} >
                    {columns.map((row) => (
                        <div  key={`${row} ${column}`} onClick={() => onClickFunc(row, column)}style={{
                            border: '1px solid #000',
                            // height: '100%', // Make each item a square by setting the height and width to the same value
                            // width: '100%',
                            //
                            width: '50px',
                            height: '50px',
                            backgroundColor: 'lightblue', // Set the background color
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        </div>
                    ))}
                </Grid>
            ))}
        </Grid>
    );
}
