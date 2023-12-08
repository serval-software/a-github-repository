import React from "react";
import { Grid } from "@mui/material";
import { Cell } from "./cell.tsx";
import { Coordinates } from "../game/coordinates.ts";

const range = (start: number, end: number): Array<number> => {
  return Array.from({ length: end - start }, (_, index) => start + index);
};

export const GridComponent = (props) => {
  const { grid, isVisibleMatrix, ennemy } = props;
  const rows = range(0, grid.matrix.length);
  const columns = range(0, grid.matrix[0].length);
  const [preview, setPreview] = React.useState<Coordinates>(
    new Coordinates(-1, -1)
  );

  const displayMatrix = (row: number, column: number) => {
    return isVisibleMatrix[row][column] ? grid.matrix[row][column] : "Hidden";
  };

  const onMouseOver = (row: number, column: number) => {
    setPreview(new Coordinates(row, column));
  };

  return (
    <Grid container>
      {rows.map((column) => (
        <Grid item key={column}>
          {columns.map((row) => (
            <Cell
              key={`${row} ${column}`}
              cellType={displayMatrix(row, column)}
              // TODO 000 : handle touché / coulé
              onClick={() => console.log("click")}
              mouseOver={() => onMouseOver(row, column)}
              borderColor={
                preview.row === row && preview.col === column && ennemy ? "red" : "black"
              }
            ></Cell>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};
