import React from "react";
import { Grid } from "@mui/material";
import { Cell } from "./cell.tsx";

const range = (start: number, end: number): Array<number> => {
    return Array.from({ length: end - start }, (_, index) => start + index);
}

export const GridComponent = (props) => {
    const { grid, isVisibleMatrix } = props;
    const rows = range(0, grid.matrix.length);
    const columns = range(0, grid.matrix[0].length);


    const displayMatrix = (row: number, column: number) => {
        return isVisibleMatrix[row][column] ? grid.matrix[row][column] : 'Hidden';
    };

    return (
        <Grid container>
            {rows.map((column) => (
                <Grid item key={column} >
                    {columns.map((row) => (
                        <Cell key={`${row} ${column}`} cellType={displayMatrix(row, column)} onClick={null}></Cell>
                        // <div  key={`${row} ${column}`} style={{
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
                        //     { displayMatrix(row, column) }
                        // </div>
                    ))}
                </Grid>
            ))}
        </Grid>
    );
}
