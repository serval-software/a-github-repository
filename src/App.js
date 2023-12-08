import { PlayersPage } from "./pages/players.tsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GamePage } from "./pages/game.tsx";
import { InitBoatsGrid } from "./components/init-boats-grid.tsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<PlayersPage />}></Route>
          // <Route exact path="/init-boats" element={<InitBoatsGrid />}></Route>
          <Route exact path="/game" element={<GamePage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
