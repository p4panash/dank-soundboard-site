import './App.css';
import DankImages from './components/DankImages';
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Commands from "./pages/Commands";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="Grid-container">
      <DankImages/>
      <Router>
        <div className="Content">
          <NavBar />
          <Switch>
            <Route exact path="/dank-soundboard-site" component={Home}/>
            <Route exact path="/dank-soundboard-site/commands">
              <Commands perPage={7}/>
            </Route>
            <Route exact path="/dank-soundboard-site/about" component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
        <div className="Footer">
          <p>Made with &#129504; by <a href="https://discord.com/users/381449378810036234">Papanash#0488</a></p>
        </div>
      </Router>
    </div>
  );
}

export default App;
