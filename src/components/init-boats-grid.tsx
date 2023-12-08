import React, { useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";

import { Game } from "../game/game.ts";
import { GridState } from "../game/grid-state.ts";
import { Grid as GridGame, isValidCoordonates } from "../game/grid.ts";
import { Coordinates } from "../game/coordinates.ts";
import { Cell } from "./cell.tsx";

// TODO: refactor: exist in another file
const range = (start: number, end: number): Array<number> => {
  return Array.from({ length: end - start }, (_, index) => start + index);
};

export const InitBoatsGrid = (game: Game) => {
  const [grid, setGrid] = React.useState<GridGame>(
    game.grids[game.currentPlayer]
  );
  const [direction, setDirection] = React.useState<"horizontal" | "vertical">(
    "horizontal"
  );
  const rows = range(0, grid.matrix.length);
  const columns = range(0, grid.matrix[0].length);
  const [currentBoat, setCurrentBoat] = React.useState<number>(0);
  const [previewBoat, setPreviewBoat] = React.useState<Array<Coordinates>>([]);

  useEffect(() => {}, [direction]);

  // TODO: handle both directions
  const onClickFunc = (row: number, column: number) => {
    const boatSize = game.BOAT_SIZES[currentBoat];
    const boatsCoordinates =
      direction === "vertical"
        ? Array.from(
            { length: boatSize },
            (_, idx) => new Coordinates(row + idx, column)
          )
        : Array.from(
            { length: boatSize },
            (_, idx) => new Coordinates(row, column + idx)
          );

    const areBoatsCoordinatesValid = boatsCoordinates.every((coord) => {
      return (
        isValidCoordonates(coord) &&
        grid.matrix[coord.row][coord.col] === GridState.Water
      );
    });

    // TODO: write that the boat is valid or not
    if (areBoatsCoordinatesValid) {
      boatsCoordinates.forEach((coord) => {
        grid.matrix[coord.row][coord.col] = GridState.Boat;
        setGrid(grid);
      });
      setCurrentBoat(currentBoat + 1);

      if (currentBoat === game.BOAT_SIZES.length - 1) {
        game.nextPlayer();
        setGrid(game.grids[game.currentPlayer]);
        setCurrentBoat(game.BOAT_SIZES);
      }
    }
  };

  const onClickDirection = () =>
    setDirection(direction === "horizontal" ? "vertical" : "horizontal");

  const onMouseOver = (row: number, column: number) => {
    const boatSize = game.BOAT_SIZES[currentBoat];

    const preview = Array.from({ length: boatSize }, (_, idx) =>
      direction === "horizontal"
        ? new Coordinates(row, column + idx)
        : new Coordinates(row + idx, column)
    );
    setPreviewBoat(preview);
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5}>
      <Grid item>
        <Button variant="contained" color="primary" onClick={onClickDirection}>
          {direction}
        </Button>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justifyItems="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" component="div" gutterBottom>
              Add your boats {game.players[game.currentPlayer]}!
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              {rows.map((column) => (
                <Grid item key={column}>
                  {columns.map((row) => (
                    <Cell
                      key={`${row} ${column}`}
                      cellType={grid.matrix[row][column]}
                      onClick={() => onClickFunc(row, column)}
                      mouseOver={() => onMouseOver(row, column)}
                      borderColor={
                        previewBoat.some(
                          (coord) => coord.row === row && coord.col === column
                        )
                          ? "bisque"
                          : "black"
                      }
                    ></Cell>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
