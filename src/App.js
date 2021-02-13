import './App.css';
import DankImages from './components/DankImages';
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Commands from "./pages/Commands";
import Support from "./pages/Support";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <DankImages/>
      <Router>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/commands">
          <Commands />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
      </Router>
    </div>
  );
}

export default App;
