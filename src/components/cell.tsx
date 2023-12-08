import React from "react";
import { Grid, Typography } from "@mui/material";
import { GridState } from "../game/grid-state.ts";

export const Cell = ({ cellType, onClick, mouseOver, borderColor }) => {
  const setBackGroundColor = () => {
    switch (cellType) {
      case GridState.Boat:
        return "bisque";
      case GridState.Water:
        return "lightblue";
      case GridState.Hit:
        return "red";
      case "Hidden":
        return "grey";
      default:
        return "lightblue";
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <div
          onMouseOver={() => mouseOver()}
          onClick={onClick}
          style={{
            border: "1px solid #000",
            width: "50px",
            height: "50px",
            backgroundColor: setBackGroundColor(),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor: borderColor,
          }}
        >
          <Typography> {GridState[cellType] ? GridState[cellType[0]] : cellType[0]} </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
