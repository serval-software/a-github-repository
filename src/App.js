import { PlayersPage } from "./pages/players.tsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GamePage } from "./pages/game.tsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<PlayersPage />}></Route>
          <Route exact path="/game" element={<GamePage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
