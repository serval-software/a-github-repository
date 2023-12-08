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
import { Container, color } from "@mui/system";
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

    // TODO 000 : start game with players pseudos
  };

  return (
    <Container>
      <Card style={{ backgroundColor: "#f5f7fd", height: "100vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
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
                onClick={() => setShowPopup(true)}
              >
                Start game
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
        <DialogTitle>Enter players pseudos :</DialogTitle>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>{displayPseudoInput()}</Grid>
          <Grid item>
            {currentPlayer === 2 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => startGame()}
                disabled={player2 === ""}
              >
                Validate
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                disabled={player1 === ""}
                onClick={() => setCurrentPlayer(2)}
              >
                Next player
              </Button>
            )}
          </Grid>
        </Grid>
      </Dialog>
    </Container>
  );
};
