import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { Router } from "@reach/router";
import Home from "./Views/Home";

function App() {
  return (
    <div className="container">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
