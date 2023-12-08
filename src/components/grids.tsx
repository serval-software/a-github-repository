import { Button, Dialog, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import React from "react";
import { GridComponent } from "../components/grid-component.tsx";

export const GridCoupleDisplay = (props) => {
  const {
    currentGrid,
    currentVisible,
    ennemyGrid,
    ennemyVisible,
    currentPlayerName,
    otherPlayerName,
  } = props;
  const [open, setOpen] = React.useState(true);

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
              Defend your territory {currentPlayerName}!
            </Typography>
          </Grid>
          <Grid item>
            <GridComponent
              grid={currentGrid}
              isVisibleMatrix={currentVisible}
              ennemy={false}
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
              Strike down the enemy {otherPlayerName}!
            </Typography>
          </Grid>
          <Grid item>
            <GridComponent
              grid={ennemyGrid}
              isVisibleMatrix={ennemyVisible}
              ennemy={true}
            />
          </Grid>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={() => null} fullScreen>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <DialogTitle>Your turn begins {currentPlayerName}!</DialogTitle>
          </Grid>
          <Grid item>
          <DialogContent>Be carreful, this is {currentPlayerName} turn!! </DialogContent>
          </Grid>
          <Grid item>
          <Button variant="contained" color="success" onClick={() => setOpen(false)}>Let's do this!</Button>
          </Grid>
        </Grid>
      </Dialog>
    </Grid>
  );
};
