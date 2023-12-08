import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { GridComponent } from "../components/grid-component.tsx";
import { GridState } from "../game/grid-state.ts";

export const GridCoupleDisplay = (props) => {
  const { currentGrid, currentVisible, ennemyGrid, ennemyVisible } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" component="div" gutterBottom>
              My Grid
            </Typography>
          </Grid>
          <Grid item>
            <GridComponent
              grid={currentGrid}
              isVisibleMatrix={currentVisible}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" component="div" gutterBottom>
              Ennemy Grid
            </Typography>
          </Grid>
          <Grid item>
            <GridComponent grid={ennemyGrid} isVisibleMatrix={ennemyVisible} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
