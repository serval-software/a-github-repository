import React from "react";
import { Grid } from "@mui/material";
import { Cell } from "./cell.tsx";

const range = (start: number, end: number): Array<number> => {
  return Array.from({ length: end - start }, (_, index) => start + index);
};

export const GridComponent = (props) => {
  const { grid, isVisibleMatrix } = props;
  const rows = range(0, grid.matrix.length);
  const columns = range(0, grid.matrix[0].length);

  const displayMatrix = (row: number, column: number) => {
    return isVisibleMatrix[row][column] ? grid.matrix[row][column] : "Hidden";
  };

  return (
    <Grid container>
      {rows.map((column) => (
        <Grid item key={column}>
          {columns.map((row) => (
            <Cell
              key={`${row} ${column}`}
              cellType={displayMatrix(row, column)}
              onClick={null}
              mouseOver={() => null}
              borderColor="black"
            ></Cell>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};
