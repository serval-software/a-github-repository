import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { GridState } from "../game/grid-state.ts";

export const Cell = ({cellType, onClick}) => {

    useEffect(() => {
            console.log(cellType);
        }, [cellType]);
    
    const setBackGroundColor = () => {
        switch (cellType) {
            case GridState.Boat:
                return 'bisque';
            case GridState.Water:
                return 'lightblue';
            case GridState.Hit:
                return 'red';
            case "Hidden":
                return 'grey';
            default:
                return 'lightblue';
        }
    }
    
    const displayCell = () => {
        
        return (
            <div onClick={onClick} style={{
                border: '1px solid #000',
                // height: '100%', // Make each item a square by setting the height and width to the same value
                // width: '100%',
                //
                width: '50px',
                height: '50px',
                backgroundColor: setBackGroundColor(), // Set the background color
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography> {GridState[cellType] ?? cellType} </Typography>
            </div>
        );
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
