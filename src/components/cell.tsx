import React from "react";
import { Grid, Typography } from "@mui/material";

export const Cell = ({cellType, boatColor}) => {

    const displayCell = () => {
        // TODO 000 : if cellType is Boat, add color to style
        return (<Typography> {cellType} </Typography>);
    }

    return (
    <Grid container>
        <Grid item xs={12}>
            {
                displayCell()
            }
        </Grid>
    </Grid>
    )
}
