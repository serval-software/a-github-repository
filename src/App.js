import { PlayersPage } from "./pages/players.tsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<PlayersPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
