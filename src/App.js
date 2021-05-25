import './App.css';
import DankImages from './components/DankImages';
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Commands from "./pages/Commands";
import Support from "./pages/Support";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="Grid-container">
      <DankImages/>
      <Router>
        <div className="Content">
          <NavBar />
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/commands">
            <Commands />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
        </div>
        <div className="Footer">
          Made with &#129504; by <a href="https://discord.com/users/381449378810036234">Papanash#0488</a>
        </div>
      </Router>
    </div>
  );
}

export default App;
