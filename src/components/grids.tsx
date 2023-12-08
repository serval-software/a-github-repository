import { Grid } from "@mui/material";
import React from "react";
import { GridComponent } from "../components/grid-component.tsx";

export const GridCoupleDisplay = (props) => {
  const { currentGrid, currentVisible, ennemyGrid, ennemyVisible } = props;

  return (
    <Grid container direction="row" justifyContent="" alignItems="center" spacing={2}>
      <Grid item xs={6}>
        <GridComponent grid={currentGrid} isVisibleMatrix={currentVisible} />
      </Grid>
      <Grid item xs={6}>
        <GridComponent grid={ennemyGrid} isVisibleMatrix={ennemyVisible} />
      </Grid>
    </Grid>
  );
};
