import { Grid } from '@mui/material';
import React from 'react';
import { GridComponent } from '../components/grid-component';

export const GridCoupleDisplay = (props) => {
    const { currentGrid, currentVisible, ennemyGrid, ennemyVisible } = props;


    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <GridComponent grid={currentGrid} visible={currentVisible} />
                <GridComponent grid={ennemyGrid} visible={ennemyVisible} />
            </Grid>
        </Grid>
    );

} 

