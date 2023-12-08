import { PlayersPage } from "./pages/players.tsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GamePage } from "./pages/game.tsx";
import { Layout } from "./components/layout.tsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <PlayersPage />
              </Layout>
            }
            ></Route>
          <Route
            exact
            path="/game"
            element={
              <Layout>
                <GamePage />
              </Layout>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
