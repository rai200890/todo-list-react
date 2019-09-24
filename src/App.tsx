import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>TODOs List</h2>;
}

function NewTODO() {
  return <h2>Add TODO</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos/new">Add TODO</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/todos/new" component={NewTODO} />
      </div>
    </Router>
  );
}

export default AppRouter;
