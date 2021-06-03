import "./App.css";
import { GithubState } from "./GithubContext";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./Hero";

const App = () => {
  return (
    <GithubState>
      <Router>
        <Hero />
      </Router>
    </GithubState>
  );
};

export default App;
