import React from "react";
import { Grid as GameGrid } from "../game/grid";
import { Grid } from "@mui/material";

const range = (start: number, end: number): Array<number> => {
    return Array.from({ length: end - start }, (_, index) => start + index);
}
export const GridComponent = (inputs) => {
    const { grid, isVisibleMatrix } = inputs;
    const rows = range(0, grid.matrix.length);
    const columns = range(0, grid.matrix[0].length);


    const displayMatrix = (row, column) => {
        console.log(row, column, isVisibleMatrix[row][column], grid.matrix[row][column]);
        return isVisibleMatrix[row][column] ? grid.matrix[row][column] : 'hidden';
    };

    return (
        <Grid container>
            {rows.map((column) => (
                <Grid item key={column} >
                    {columns.map((row) => (
                        <div  key={`${row} ${column}`} style={{
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
                            { displayMatrix(row, column) }
                        </div>
                    ))}
                </Grid>
            ))}
        </Grid>
    );
}
