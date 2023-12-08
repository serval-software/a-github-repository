import React from "react";
import {
  Button,
  Card,
  Dialog,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import GamesIcon from "@mui/icons-material/Games";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CheckIcon from '@mui/icons-material/Check';
import RowingIcon from '@mui/icons-material/Rowing';
import { useNavigate } from "react-router-dom";

export const PlayersPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = React.useState(false);
  const [currentPlayer, setCurrentPlayer] = React.useState(1); // [1, 2]
  const [player1, setPlayer1] = React.useState("");
  const [player2, setPlayer2] = React.useState("");

  const displayPseudoInput = () => {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            label={`Player 1 pseudo`}
            id="filled-basic"
            variant="filled"
            disabled={currentPlayer === 2}
            onChange={(event) => {
              setPlayer1(event.target.value);
            }}
          />
        </Grid>
        <Grid item>
          {currentPlayer === 2 && (
            <TextField
              label={`Player 2 pseudo`}
              id="filled-basic"
              variant="filled"
              onChange={(event) => {
                setPlayer2(event.target.value);
              }}
            />
          )}
        </Grid>
      </Grid>
    );
  };

  const startGame = () => {
    setShowPopup(false);
    navigate("/game", { state: { players: { player1, player2 } } });
  };

  return (
    <Container>
      <Card style={{ backgroundColor: "#f5f7fd", height: "100vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          style={{ height: 'inherit' }}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h2">Welcome to BattleShip war!</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => setShowPopup(true)}
              >
                Start! &nbsp;
                <GamesIcon />
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <RowingIcon style={{ fontSize: '500%' }} color="primary" />
          </Grid>
        </Grid>
      </Card>

      <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <DialogTitle>Enter players pseudos :</DialogTitle>
            </Grid>
            <Grid item>
            <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>{displayPseudoInput()}</Grid>
          <Grid item>
            {currentPlayer === 2 ? (
              <Button
                variant="contained"
                color="success"
                onClick={() => startGame()}
                disabled={player2 === "" || player2 === player1}
              >
                <CheckIcon />
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                disabled={player1 === ""}
                onClick={() => setCurrentPlayer(2)}
              >
                <KeyboardDoubleArrowRightIcon />
              </Button>
            )}
          </Grid>
        </Grid>
            </Grid>
        </Grid>
      </Dialog>
    </Container>
  );
};
